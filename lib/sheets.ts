/**
 * Utility to fetch and parse Google Sheets Published CSV
 */

export interface ActivityData {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  icon: string;
  color: string;
  pamphlet: string;
  barcode: string;
  link: string;
}

/**
 * Parses a CSV line while respecting quoted strings
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export async function fetchActivities(): Promise<ActivityData[]> {
  const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVsUF24Xs5yuG6fUyfnBeuvisO-GxeyL3j0JeITZTtAj4kb6EnkyXy0IPCEY2IfbgjoRuvP5sDIa8a/pub?output=csv";

  try {
    const response = await fetch(SPREADSHEET_URL, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    });

    if (!response.ok) throw new Error("Failed to fetch Google Sheet");

    const csvText = await response.text();
    const lines = csvText.split("\n").filter(line => line.trim() !== "");
    
    // Skip header
    const dataLines = lines.slice(1);

    return dataLines.map((line) => {
      const parts = parseCSVLine(line);
      
      // Basic mapping (ensure index matches the CSV columns)
      return {
        id: parts[0] || "",
        title: parts[1] || "",
        subtitle: parts[2] || "",
        shortDesc: parts[3] || "",
        fullDesc: parts[4] || "",
        highlights: (parts[5] || "").split(",").map(s => s.trim()).filter(s => s !== ""),
        icon: parts[6] || "",
        color: parts[7] || "",
        pamphlet: parts[8] || "",
        barcode: parts[9] || "",
        link: parts[10] || "",
      };
    });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return []; // Return empty if error, component will use fallback
  }
}

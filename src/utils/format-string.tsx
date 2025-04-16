export function formatString(input: string): string {
  return input
    .replace(/-/g, "")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

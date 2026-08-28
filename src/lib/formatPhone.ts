/**
 * Formats a phone number input to standard international +62 format.
 * Converts 08xxx or 8xxx or 62xxx into +628xxx while preserving user input flow.
 */
export function formatPhoneNumber(value: string): string {
  if (!value) return "";

  let cleaned = value.trim();

  // If user types '08...', transform to '+628...'
  if (cleaned.startsWith("08")) {
    cleaned = "+62" + cleaned.slice(1);
  } else if (cleaned.startsWith("0")) {
    cleaned = "+62" + cleaned.slice(1);
  } else if (cleaned.startsWith("8")) {
    cleaned = "+62" + cleaned;
  } else if (cleaned.startsWith("62")) {
    cleaned = "+" + cleaned;
  }

  // Preserve leading '+' and remove non-digit characters
  if (cleaned.startsWith("+")) {
    cleaned = "+" + cleaned.slice(1).replace(/\D/g, "");
  } else {
    cleaned = cleaned.replace(/\D/g, "");
  }

  // Max 15 characters (standard E.164 / Indonesian phone format +628xxxxxxxxxx)
  return cleaned.slice(0, 15);
}

export const formatDate = (date: Date | undefined) => {
  if (date) return date.toISOString().slice(0, 10);
};

export const daysAgo = (days: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  return currentDate;
};

export function isValidDate(dateString: string) {
  // Regex pattern for YYYY-MM-DD format
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return false; // If format doesn't match
  }

  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  // Validate month (1-12)
  if (month < 1 || month > 12) {
    return false;
  }

  // Validate day based on month and leap year considerations (assuming non-leap years for simplicity)
  if (day < 1 || day > new Date(year, month, 0).getDate()) {
    return false;
  }

  return true;
}

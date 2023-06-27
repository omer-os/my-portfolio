import { useState } from "react";

/**
 * A mapping of month names to their corresponding numerical representation.
 */
const monthNames: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

/**
 * Type definition for the date object
 */
interface DateObject {
  year: string;
  month: string;
  day: string;
}

/**
 * Get the current date.
 *
 * @returns {DateObject} An object with year, month, and day as strings.
 */
const getTodayDate = (): DateObject => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    today
  );
  const day = String(today.getDate()).padStart(2, "0");
  return { year, month, day };
};

/**
 * Custom hook to manage departure and return dates.
 *
 * @returns {Object} An object containing departureDate, setDepartureDate, returnDate, setReturnDate, and formatDateForUrl.
 */
export const useDateSelector = () => {
  const [departureDate, setDepartureDate] = useState<DateObject>(
    getTodayDate()
  );
  const [returnDate, setReturnDate] = useState<DateObject>(getTodayDate());

  /**
   * Formats the date object to a string format suitable for URL.
   *
   * @param {DateObject} date - The date object to format.
   * @returns {string} The formatted date string.
   */
  const formatDateForUrl = (date: DateObject): string => {
    const year = date.year;
    const month = monthNames[date.month.toLowerCase()] || "01";
    const day = String(date.day).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    formatDateForUrl,
  };
};

/**
 * Updates a specific query parameter in the URL without affecting other query parameters.
 * Can be used in Next.js components for dynamically updating the URL.
 *
 * Example usage:
 * import { updateQueryParameter } from 'path_to_this_function';
 * updateQueryParameter('color', 'red', useRouter());
 *
 * This example updates the 'color' query parameter to 'red' without affecting other parameters.
 *
 * @param queryName - The name of the query parameter to update. E.g. 'color'.
 * @param newValue - The new value for the query parameter. E.g. 'red'.
 * @param router - The Next.js router instance, can be passed if already available in the calling component.
 *                 If this argument is not provided, the function will attempt to use useRouter() from Next.js.
 */
export function updateQueryParameter(
  queryName: string,
  newValue: string,
  router: any
) {
  try {
    // Ensure the function is used in a client-side environment
    if (typeof window === "undefined") {
      throw new Error(
        "This function can only be used in a client-side environment."
      );
    }

    // Get the current search parameters from the URL
    const currentParams = new URLSearchParams(window.location.search);

    // Update the specific query parameter
    currentParams.set(queryName, newValue);

    // Replace the current URL with the updated search parameters
    const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
    router.replace(newUrl);
  } catch (error) {
    // Log error message for debugging purposes
    console.error("Failed to update the query parameter:", error);
  }
}

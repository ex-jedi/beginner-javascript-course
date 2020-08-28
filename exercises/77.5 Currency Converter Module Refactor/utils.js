export function generateOptions(options) {
  return (
    // Convert currencies object into array
    Object.entries(options)
      // Mapping over currencies array
      .map(
        // Destructuring array into variables & outputting html template for each item
        ([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
      )
      // Joining on nothind so they output as an HTML dump with no commas separating each item
      .join('')
  );
}

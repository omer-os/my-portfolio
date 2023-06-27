export const fetchFlights = async (from: string, to: string): Promise<any> => {
  return fetch(process.env.FLIGHTS_API_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CatalogOfferingsRequestAir: {
        offersPerPage: 1,
        PassengerCriteria: [
          {
            value: "ADT",
            number: 1,
          },
        ],
        PricingModifiersAir: {
          currencyCode: "USD",
        },
        SearchCriteriaFlight: [
          {
            "@type": "SearchCriteriaFlight",
            departureDate: "2023-06-25",
            From: {
              value: from,
            },
            To: {
              value: to,
            },
          },
        ],
      },
    }),
    cache: "no-store",
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

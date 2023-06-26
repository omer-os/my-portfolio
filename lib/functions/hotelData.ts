export async function fetchHotelData(name: string) {
  const response = await fetch(process.env.HOTELS_API_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query ($name: String) {
            hotels(name: $name) {
              address { en }
              city { en }
              eating_description { en }
              general_description { en }
              hotel_description { en }
              hotel_id
              hotel_image_url
              hotel_web
              latitude
              longitude
              min_price
              zip
              room_description { en }
              poi_description { en }
              name { en }
            }
          }
        `,
      variables: {
        name: name.replaceAll("-", " "),
      },
    }),
  });

  const data = await response.json();
  return data;
}

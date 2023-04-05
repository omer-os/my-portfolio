import client from "../client";

export const GetAllGalleryImages = async () => {
  const data = await client.fetch(
    `*[_type == "ImageGallery"] {
            title,
            slug {
              current
            },
            image {
              asset -> {
                url
              }
            }
          }
          `
  );
  return data;
};

import client from "../client";

// title
// description
// slug
// coverimage
// templateCategory
// images

export const GetAllTemplates = async () => {
  const data = await client.fetch(`*[_type == "templates"]{
        title,
        description,
        slug{
            current
        },
        coverimage{
            asset->{
                url
            }
        },
        templateCategory->{
            title
        },
        images[]{
            asset->{
                url
            }
        }
        }
    `);

  return data;
};

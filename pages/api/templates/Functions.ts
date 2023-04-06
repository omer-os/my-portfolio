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

export const GetTemplateBySlug = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "templates" && slug.current == $slug]{
  
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
price,

        templateCategory->{
            title
        },
        images[]{
            asset->{
                url
            }
        },
        demoUrl,
        githubUrl,
        framework
        }
        `,
    { slug }
  );

  return data[0];
};

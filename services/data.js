import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

export const getTopBlogs = async () => {
  const query = gql`
    query topBlogs {
      blogs(first: 2) {
        title
        thumbnail {
          id
          url
        }
        category
        date
        slug
      }
    }
  `;
  const data = await graphcms.request(query);
  return data;
};

export const YouMayLikeData = async () => {
  const query = gql`
    query YouMayLikeData {
      blogs(last: 3) {
        title
        thumbnail {
          url
        }
        category
        date
        slug
      }
    }
  `;
  const data = await graphcms.request(query);
  return data;
};

export const GetAllCategories = async () => {
  const query = gql`
    query GetAllCategories {
      categories {
        id
        name
      }
    }
  `;
  const data = await graphcms.request(query);
  return data;
};

export const GetBlogsBasedOnCategory = async (category) => {
  const query = gql`
    query GetBlogsBasedOnCategory($category: String!) {
      blogs(where: { category: "${category}" }) {
        title
        thumbnail {
          url
        }
        category
        date
        slug
      }
    }
  `;
  const data = await graphcms.request(query, { category });
  return data;
};

export const getBlogs = async () => {
  const query = gql`
    query getBlogs {
      blogs {
        title
        thumbnail {
          url
        }
        category
        date
        slug
      }
    }
  `;
  const data = await graphcms.request(query);
  return data;
};

export const GetBlog = async (slug) => {
  const query = gql`
    query GetBlog{
      blog(where: { slug: "${slug}" }) {
        title
        thumbnail {
          url
        }
        category
        date
        slug
        content{
          html
        }
      }
    }
  `;
  const data = await graphcms.request(query, { slug });
  return data;
};

export const GetMyProjects = async () => {
  const query = gql`
    query getMyProjects {
      myProjects {
        name
        img {
          url
        }
        subtitle
        tags
      }
    }
  `;
  const data = await graphcms.request(query);
  return data;
};

import { Blog } from "../interfaces/interfaces";
import client from "../sanityClient";

export const revalidate = 10000; // revalidate this segment every 60 seconds

// Function to retrieve all blogs
export async function getAllBlogs(
  includeContent: boolean = false
): Promise<Blog[]> {
  const contentField = includeContent ? "content," : "";
  const query = `*[_type == "blogs"]{
        title,
        subtitle,
        ${contentField}
        slug,
        "category": category->title,
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        publishDate
      }`;
  return await client.fetch(query);
}

// Function to retrieve a single blog by its slug
export async function getBlogBySlug(
  slug: string,
  includeContent: boolean = true
): Promise<Blog | null> {
  const contentField = includeContent ? "content," : "";
  const query = `*[_type == "blogs" && slug.current == $slug][0]{
        title,
        subtitle,
        ${contentField}
        slug,
        "category": category->title,
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        publishDate
      }`;
  return await client.fetch(query, { slug });
}

// Function to retrieve blogs by category slug
export async function getBlogsByCategory(
  categorySlug: string,
  includeContent: boolean = false
): Promise<Blog[]> {
  const contentField = includeContent ? "content," : "";
  const query = `*[_type == "blogs" && category->slug.current == $categorySlug]{
        title,
        subtitle,
        ${contentField}
        slug,
        "category": category->title,
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        publishDate
      }`;
  return await client.fetch(query, { categorySlug });
}

// Function to retrieve 3 related blogs by category slug excluding the current blog
export async function getRelatedBlogs(
  categorySlug: string,
  currentBlogSlug: string
): Promise<Blog[]> {
  const query = `*[_type == "blogs" && category->slug.current == $categorySlug && slug.current != $currentBlogSlug][0..2]{
        title,
        subtitle,
        slug,
        "category": category->title,
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        publishDate
      }`;
  return await client.fetch(query, { categorySlug, currentBlogSlug });
}

export function formatSanityDate(isoString: string): string {
  const date = new Date(isoString);

  // Array to map month number to month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return monthNames[monthIndex] + " " + day + ", " + year;
}

export async function getTemplateBySlug(slug: string) {
  const query = `*[_type == "template" && slug.current == "${slug}"]{
    _id,
    slug,
    coverimage {
      asset->{
        _id,
        url
      }
    },
    title,
    subtitle,
    price,
    technology,
    demoLink,
    "projectImages": projectImages[]{
      "image": asset->{
        _id,
        url
      }
    }
  }[0]`;
  const template = await client.fetch(query);
  return template;
}

export async function getAllTemplates() {
  const query = `*[_type == "template"]{
    _id,
    slug,
    coverimage {
      asset->{
        _id,
        url
      }
    },
    title,
    subtitle,
    price,
    technology,
    demoLink,
    "projectImages": projectImages[].asset->url
  }`;
  const templates = await client.fetch(query);
  return templates;
}

// Function to retrieve all projects
export async function getAllProjects() {
  const query = `*[_type == "project"]{
        title,
        subtitle,
        content,
        demoLink,
        sourceCodeLink,
        slug, // Added slug
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        "projectImages": projectImages[].asset->url // Added project images URLs
      }`;
  return await client.fetch(query);
}

// Function to retrieve a single project by its slug
export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"]{
        title,
        subtitle,
        content,
        demoLink,
        sourceCodeLink,
        slug, // Added slug
        "coverImageUrl": coverImage.asset->url, // Added cover image URL
        "projectImages": projectImages[]{
            "image": asset->{
                _id,
                url
            }
        }
    }[0]`;
  return await client.fetch(query);
}

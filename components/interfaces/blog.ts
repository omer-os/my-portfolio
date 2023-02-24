export interface Blog {
  title: string;
  subtitle: string;
  showinhome: boolean;
  slug: Slug;
  coverimage: Media;
  publishedAt: string;
  content: string;
  blogCategories: BlogCategory;
}

export interface BlogCategory {
  title: string;
  slug: Slug;
  subtitle: string;
  coverimage: Media;
}

interface Media {
  asset: {
    url: string;
  };
}

interface Slug {
  current: string;
}

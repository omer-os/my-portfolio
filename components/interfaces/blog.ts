export interface Blog {
  title: string;
  subtitle: string;
  showinhome: boolean;
  slug: Slug;
  coverimage: Media;
  publishedAt: string;
  content: any;
  blogCategory: BlogCategory;
  wordcount: number;
  readminutes: number;
}

export interface BlogCategory {
  title: string;
  slug: Slug;
}

interface Media {
  asset: {
    url: string;
  };
}

interface Slug {
  current: string;
}

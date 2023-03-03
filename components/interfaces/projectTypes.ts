export interface ProjectType {
  title: string;
  showinhome: boolean;
  subtitle: string;
  slug: Slug;
  coverimage: Media;
  publishedAt: string;
  projectCategories: ProjectCategory[];
  demo: string;
  github: string;
}

export interface ProjectCategory {
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

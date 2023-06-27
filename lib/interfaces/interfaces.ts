export interface Blog {
  title: string;
  subtitle: string;
  content?: any;
  slug: {
    current: string;
    _type: "slug";
  };
  category: string;
  coverImage?: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  coverImageUrl?: string; // Added this field for the cover image URL
  publishDate: string;
}

interface Image {
  asset: {
    _ref: string;
    url: string;
  };
}

interface ProjectImage {
  image: {
    _id: string;
    url: string;
  };
}

interface Template {
  _id: string;
  slug: {
    current: string;
  };
  coverimage: Image;
  title: string;
  subtitle: string;
  price: number;
  technology: string;
  demoLink: string;
  projectImages: ProjectImage[];
}

export default Template;

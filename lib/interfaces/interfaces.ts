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

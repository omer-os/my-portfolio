import { GetAllTemplates } from "@/pages/api/templates/Functions";
import React from "react";
import Card from "./Card";

export default async function AllTemplates() {
  const data: Template[] = await GetAllTemplates();

  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 mt-10 ">
      {data.map((template) => (
        <Card key={template.slug.current} template={template} />
      ))}
    </div>
  );
}

export type Template = {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  coverimage: {
    asset: {
      url: string;
    };
  };

  templateCategory: {
    title: string;
  };
  images: {
    asset: {
      url: string;
    };
  }[];
};

import TemplatesPage from "@/components/pages/templates/TemplatesPage";
import { getAllTemplates } from "@/lib/functions/sanityFunctions";
import React from "react";

export default async function page() {
  const templates = await getAllTemplates();
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <TemplatesPage templates={templates} />
    </div>
  );
}

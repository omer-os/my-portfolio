import AllTemplates from "@/components/templates/right/AllTemplates";
import React from "react";

export default function page() {
  return (
    <div className="max-w-5xl px-6 mx-auto">
      <div className="min-h-screen mt-10">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">
          Find your Template
        </h1>
        <p className="w-5/6 mx-auto mt-2 text-sm text-center text-zinc-400 sm:text-base">
          Choose from my pre-built templates and I'll build your website.
          Contact me to discuss customizations. Let's create a professional
          website that meets your needs.
        </p>

        {/* @ts-ignore */}
        <AllTemplates />
      </div>
    </div>
  );
}

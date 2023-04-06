import AllTemplates from "@/components/templates/right/AllTemplates";
import React from "react";

export default function page() {
  return (
    <div className="max-w-5xl px-6 mx-auto">
      <div className="min-h-screen mt-10">
        <h1 className="sm:text-5xl text-4xl font-bold text-center">
          Find your Template
        </h1>
        <p className="text-zinc-400 text-center sm:text-base text-sm mx-auto w-5/6 mt-2">
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

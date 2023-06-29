import { getSlugs, getTemplateBySlug } from "@/lib/functions/sanityFunctions";
import Template from "@/lib/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsLink } from "react-icons/bs";

export async function generateStaticParams() {
  const templatesSlugs = await getSlugs("templates");

  return templatesSlugs.map((i: { slug: string }) => ({
    slug: i.slug,
  }));
}

export default async function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const template: Template = await getTemplateBySlug(params.slug);

  return (
    <div className="max-w-5xl px-6 mx-auto md:pt-0 pt-10">
      <div className="flex flex-col min-h-screen gap-10 pb-10 md:flex-row md:pb-0">
        <div className="relative md:hidden h-[25em] w-full  dark:border-zinc-800 rounded-xl">
          <img
            src={template?.coverimage?.asset?.url}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
          <Link
            href={template?.demoLink || ""}
            className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-zinc-900 hover:bg-zinc-800 px-4 py-2 absolute bottom-4 left-4"
          >
            <BsLink />
            View Demo
          </Link>
        </div>
        <div className="flex w-full md:sticky top-20 h-max left-0 flex-col py-6 md:max-w-[20em]">
          <Link
            className="mt-8 dark:hover:!bg-zinc-800 hover:!bg-zinc-300 dark:hover:text-white hover: w-max active:scale-95 rounded py-2 hover:px-3 dark:bg-black bg-white transition-all dark:text-zinc-400 md:mt-0 flex items-center gap-2"
            href="/templates"
          >
            <BsArrowLeft />
            Back to Templates
          </Link>

          <div className="mt-4 text-4xl font-bold capitalize">
            {template.title}
          </div>
          <div className="mt-3">{template.subtitle}</div>
          
          <div className="flex flex-col">
            <div className="flex flex-col mt-10 divide-y text-zinc-400 dark:divide-zinc-800 divide-zinc-400">
              <div className="flex items-center justify-between py-2">
                <span>Price</span>
                <span>${template?.price}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Framework</span>
                <span>nextjs</span>
              </div>
            </div>
            <div className="flex flex-1 gap-3 mt-6">
              <Link
                className="rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-white text-black hover:bg-black  hover:!text-white border-white border px-4 py-2 flex-1"
                href="/contact"
              >
                contact me
              </Link>
              <Link
                className="text-white rounded active:scale-95 fill-current transition-all flex gap-2 items-center justify-center text-center w-max bg-black hover:bg-white border hover:border-white  hover:text-black px-4 py-2 flex-1"
                href={template?.demoLink || ""}
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="flex-1 md:p-10 md:border-l border-zinc-800">
          <div className="img md:flex hidden relative h-[25em] w-full border border-zinc-800 rounded-xl">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={template?.coverimage?.asset?.url}
              alt=""
            />
          </div>

          <div className="mt-6 text-4xl font-bold capitalize">
            {template?.title}
          </div>
          <div className="mt-2 dark:text-zinc-400">{template?.subtitle}</div>
          <div className="mt-10 text-2xl font-bold">Demo</div>
          <a className="mt-2 text-blue-600" href={template?.demoLink || ""}>
            {template?.demoLink || ""}
          </a>

          <div className="grid gap-4 mt-10 md:grid-cols-2">
            {template?.projectImages.map((image) => (
              <div className="img relative h-[20em]">
                <img
                  src={image?.image.url}
                  className="w-full h-full object-cover rounded "
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

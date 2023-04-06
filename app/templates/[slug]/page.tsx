import { Template } from "@/components/templates/right/AllTemplates";
import { GetTemplateBySlug } from "@/pages/api/templates/Functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
type PageProps = {
  params: {
    slug: string;
  };
};
export default async function page({ params }: PageProps) {
  const template: Template = await GetTemplateBySlug(params.slug);
  console.log(template);

  return (
    <div className="flex flex-col min-h-screen gap-10 pb-10 md:flex-row md:pb-0">
      {/* LEFT SIDE STARTS HERE */}
      <div className="flex w-full md:sticky top-20 h-max left-0 flex-col py-6 md:max-w-[20em]">
        <div className="relative md:hidden h-[25em] w-full border border-zinc-800 rounded-xl">
          <Image
            src={template.coverimage.asset.url}
            fill
            alt="nextjs"
            className="object-cover w-full h-full rounded-xl"
          />
          <Link
            href={template.demoUrl}
            className="absolute bottom-4 left-4 py-2 px-3 bg-white text-black flex items-center gap-2 z-10 rounded active:scale-95 transition-all hover:!bg-black/50 hover:!text-white hover:ring-[0.1em] ring-white"
          >
            <TbExternalLink />
            <span className="z-10">View Demo</span>
          </Link>
        </div>

        <Link
          href="/templates"
          className="mt-8 hover:!bg-zinc-800 hover:text-white hover: w-max active:scale-95 rounded py-2 hover:px-3 bg-black transition-all text-zinc-400 md:mt-0 flex items-center gap-2"
        >
          <BsArrowLeftShort />
          Back to Templates
        </Link>

        <div className="mt-4 text-4xl font-bold capitalize">
          {template.title}
        </div>

        <div className="mt-3 text-zinc-400">{template.description}</div>

        <div className="flex flex-col">
          <div className="flex flex-col mt-10 divide-y text-zinc-400 divide-zinc-800">
            <div className="flex items-center justify-between py-2">
              <span>Price</span>
              <span>${template.price}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Framework</span>
              <span>{template.framework}</span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 mt-6">
            <Link
              className="bg-white text-black flex-1 rounded text-center py-2
              hover:bg-black hover:text-white hover:ring-[.05em] ring-white active:scale-95 transition-all
              "
              href="/contact"
            >
              Contact Me
            </Link>
            <Link
              className="flex-1 py-2 text-center transition-all border rounded border-zinc-800 hover:bg-white hover:text-black hover:border active:scale-95 "
              href={template.demoUrl}
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE STARTS HERE */}
      <div className="flex-1 md:p-10 md:border-l border-zinc-800">
        <div className="img md:flex hidden relative h-[25em] w-full border border-zinc-800 rounded-xl">
          <Image
            src="https://cdn.sanity.io/images/245fryc5/production/7aedf12843f0668d78d97a59f274d8edbf3036b7-1920x2880.jpg"
            fill
            alt="nextjs"
            className="object-cover w-full h-full rounded-xl"
          />

          <Link
            href={template.demoUrl}
            className="absolute bottom-4 left-4 py-2 px-3 bg-white text-black flex items-center gap-2 z-10 rounded active:scale-95 transition-all hover:!bg-black/50 hover:!text-white hover:ring-[0.1em] ring-white"
          >
            <TbExternalLink />
            <span className="z-10">View Demo</span>
          </Link>
        </div>

        <div className="mt-6 text-4xl font-bold">{template.title}</div>
        <div className="mt-2 text-zinc-400">
          Looking to create a beautiful website that stands out from the crowd?
          This template has everything you need, and it's available at an
          affordable price starting from just ${template.price}! Customize it to
          your heart's content and launch your website in no time. To purchase
          this template and start building your dream website, simply click on{" "}
          <Link href={"/"} className="w-max text-blue-600 underline">
            this link
          </Link>{" "}
          below and follow the instructions. Don't miss out on this opportunity
          to create a stunning online presence!
        </div>

        <div className="mt-10 text-2xl font-bold">Demo</div>
        <Link href={template.demoUrl} className="mt-2 text-blue-600">
          {template.demoUrl}
        </Link>

        <div className="grid gap-4 mt-10 md:grid-cols-2">
          <div className="text-2xl font-bold md:col-span-2 capitalize">
            images from this template :
          </div>
          {template.images.map((image, index) => (
            <div key={index} className="img relative h-[20em]">
              <Image
                src={image.asset.url}
                fill
                alt={`image ${index} of ${template.title}`}
                className="object-cover w-full h-full rounded-xl cursor-pointer"
              />
            </div>
          ))}

          <Link
            className="flex-1 py-2 text-center transition-all border rounded border-zinc-800 hover:bg-white md:col-span-2 mt-6 capitalize hover:text-black hover:border active:scale-95 "
            href="/templates"
          >
            view more templates
          </Link>
        </div>
      </div>





      
    </div>
  );
}

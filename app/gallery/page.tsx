import { GetAllGalleryImages } from "@/pages/api/gallery/Functions";
import Image from "next/image";
import React from "react";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
];

type ImageProp = {
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
};

export default async function Page() {
  const data: ImageProp[] = await GetAllGalleryImages();

  return (
    <div className="max-w-5xl px-6 mx-auto my-10">
      <div className=" text-4xl font-bold">My Gallery</div>
      <div className="text-zinc-400 text-lg mt-2 max-w-[30em]">
        Discover my transformative college memories through photos that capture
        the excitement of new beginnings and the bittersweet farewells of
        graduation day.
      </div>
      <div className="grid mt-10 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map((image) => (
          <div
            key={image.slug.current}
            className={`relative pb-2/3 h-[25em]
            `}
          >
            <Image
              className="absolute inset-0 object-cover w-full h-full rounded-xl"
              src={image.image.asset.url}
              alt="gallery item"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}

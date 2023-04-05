// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { AiOutlineEye } from "react-icons/ai";
// import { BiPencil } from "react-icons/bi";
// import { BsCalendarDate } from "react-icons/bs";
// import { FiChevronLeft, FiClock } from "react-icons/fi";
// import { Blog } from "../interfaces/blog";

// type PageProps = { blog: Blog };

// export default function BlogMain({ blog }: PageProps) {
//   return (
//     <div>
//       <header className="flex text-center flex-col  items-center">
//         <div className="date w-max text-zinc-400 flex gap-3 items-center">
//           <BsCalendarDate />
//           <p>{blog?.publishedAt}</p>
//         </div>

//         <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl relative sm:leading-10 md:text-5xl md:leading-14">
//           {blog?.title}{" "}
//         </h1>

//         <div className="flex mt-4 items-center gap-3">
//           <div className="flex gap-4 items-center">
//             <div className="flex gap-1 items-center">
//               <BiPencil />
//               <p>{blog?.wordcount} words</p>
//             </div>
//             <div className="flex gap-1 items-center">
//               <FiClock />
//               <p>{blog?.readminutes} min read</p>
//             </div>

//             <div className="flex gap-1 items-center">
//               <AiOutlineEye />
//               <p>203 views</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="mt-10 border-zinc-400 flex gap-4 sm:pt-6 pt-2">
//         <div className="lg:flex hidden flex-col w-[15em]">
//           <div className="border-b my-2  pb-5 border-zinc-400">
//             <div className="text-zinc-400">Tags</div>
//             <div className="flex text-sm text-zinc-400 flex-wrap capitalize gap-3 mt-2">
//               {blog?.blogCategories?.map((i) => (
//                 <Link
//                   className="border active:scale-95  cursor-pointer hover:bg-white/10 bg-black transition-all border-orange-600 rounded-lg text-center py-1 px-2 grow"
//                   key={i.slug.current}
//                   href={`/blog/categories/`}
//                   // ${i?.slug?.current}
//                 >
//                   {i.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex gap-2 my-4 text-lg">
//             <Link
//               href="/blog"
//               className="hover:underline sm:text-base text-sm flex items-center gap-2"
//             >
//               <FiChevronLeft />
//               GO BACK
//             </Link>
//           </div>
//           <div className="relative sm:h-[20em] h-[15em] w-full">
//             <Image
//               src={blog?.coverimage?.asset?.url}
//               alt="blog cover image"
//               fill
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </div>
//           <article className="prose max-w-full my-4 prose-invert prose-code:bg-zinc-900 prose-code:p-2 prose-code:rounded">
//             <PortableText value={blog?.content} />
//           </article>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function BlogMain() {
  return (
    <div>BlogMain</div>
  )
}

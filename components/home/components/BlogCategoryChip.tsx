"use client";

import { BlogCategory } from "@/components/interfaces/blog";
import { useRouter } from "next/navigation";

export default function BlogCategoryChip({ cat }: { cat: BlogCategory }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/categories/${cat.slug.current}`)}
      className="ring-2 hover:bg-white/10 hover:scale-105 bg-black/0 transition-all ring-orange-600 py-1 px-3 rounded capitalize text-xs font-light"
    >
      {cat.title}
    </div>
  );
}

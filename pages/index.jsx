import React from "react";
import { Landing } from "../components";
import { client } from "../services/data2";

export default function index({ data }) {
  return (
    <>
      <Landing topBlogs={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "blog" && publishedAt < now()] | order(publishedAt desc) [0...3] {
    title,
    categories[]->{title},
    mainImage {
      asset -> {
        url
      }
    },
    body,
    publishedAt,
    slug
  }  
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

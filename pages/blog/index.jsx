import Link from "next/link";
import { motion } from "framer-motion";
import { getTopBlogs, YouMayLikeData } from "../../services/data";
import {
  AllCategories,
  FirstHomeComponent,
  Layout,
  Line,
  SubToNewsLetter,
  YouMayLike,
} from "../../src/blog/Files";

export default function Index({ topBlogs, youMayLike }) {
  return (
    <Layout>
      <div className="sm:px-10 px-5">
        <motion.div
          animate={{
            y: [20, 0],
            opacity: [0, 1],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          <FirstHomeComponent topBlogs={topBlogs} />
        </motion.div>
        <Line />
        <YouMayLike youMayLike={youMayLike} />
        <Line />
        <SubToNewsLetter />
        <Line />
        <AllCategories />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const topBlogs = (await getTopBlogs()) || [];
  const youMayLike = (await YouMayLikeData()) || [];
  return {
    props: {
      topBlogs,
      youMayLike,
    },
    revalidate: 60,
  };
};

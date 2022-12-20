import React from "react";
import { Layout } from "../../src/portfolio/Files";
import Image from "next/image";
import Link from "next/link";
import me2 from "../../public/images/me2.jpg";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import me3 from "../../public/images/me2.jpg";

export default function Index({ projects }) {
  const { t, lang } = useTranslation("portfolio");
  const skills = [];
  for (let i = 0; i < 3; i++) {
    skills.push({
      title: t(`sec-3.${i}.title`),
      desc: t(`sec-3.${i}.desc`),
    });
  }

  return (
    <Layout>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="flex items-center sm:h-auto h-[80vh] justify-center pt-1"
      >
        <div className="flex md:flex-row flex-col-reverse gap-3 items-center sm:px-7 px-4">
          <div className="flex flex-col gap-3">
            <motion.div
              className="md:text-5xl fade-from-top-1 sm:text-4xl text-2xl font-bold capitalize max-w-[13em]"
              animate={{ y: [-100, 0], opacity: [0, 1] }}
            >
              {t("title")}
            </motion.div>
            <motion.div
              className="subtitle sm:text-md text-sm text-gray-500 sm:max-w-[30em] max-w-[25em]"
              animate={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ delay: 0.5 }}
            >
              {t("subtitle")}
            </motion.div>
            <motion.div
              className="flex gap-4 mt-3"
              animate={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ delay: 1 }}
            >
              <Link href="/portfolio/projects">
                <a
                  className={`group transition-all duration-300 text-white lb-btn-gradient relative active:scale-95 overflow-hidden py-2 px-3 flex items-center text-center 
               justify-center
              gap-1`}
                >
                  {t("buttons.my-projects")}
                  <svg
                    className={`group-hover:opacity-0 relative top-[2px] group-hover:-right-3 transition-all duration-300 right-[1px] w-4 
                  ${lang === "ar" ? "rotate-180 " : ""}
                  `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="p-3 cursor-pointer">{t("buttons.learn-more")}</a>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative z-20 md:w-4/12 w-[10em] md:h-[33.5em] h-[10em] md:w-1/2 md:rounded-none rounded-full overflow-hidden"
            animate={{
              x: [lang === "ar" ? -100 : 100, 0],
              opacity: [0, 1],
            }}
            transition={{ delay: 1.5 }}
          >
            <Image
              priority
              src={me2}
              alt="me"
              className="w-full md:object-top object-[center_-30px] h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div
        className={`sec-2 sm:flex mx-auto w-11/12 pb-2 lg:px-[5em] md:mt-none sm:mt-5
      ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        <motion.div
          viewport={{
            once: true,
          }}
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          className="w-[20em] h-[25em] relative sm:left-10  -left-14 sm:-bottom-10 sm:z-30 z-10 -bottom-[10em]"
        >
          <Image
            priority
            placeholder="blur"
            blurDataURL="/images/blur.webp"
            src={me3}
            alt="me"
            className="w-full z-10 object-cover md:object-top object-[center_-30px] h-full object-cover"
            layout="fill"
          />
        </motion.div>
        <motion.div
          viewport={{
            once: true,
          }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          className={`flex gap-2 h-max pb-10 sm:w-[40em] h-max relative z-20 bg-gray-200 py-14 p-6 pl-10 sm:pl-16 flex-col 
          `}
        >
          <div className="font-bold text-2xl">{t("sec-2.title")}</div>
          <div className="text-xl">{t("sec-2.subtitle")}</div>

          <Link href="/portfolio/projects">
            <a
              className={`w-max py-2 px-4 mt-3 text-white bg-blue-600
            ${lang === "ar" ? "self-end" : ""}`}
            >
              {t("sec-2.see-my-projects")}
            </a>
          </Link>
        </motion.div>
      </div>

      <div
        className={`sec-3 mt-40 grid grid-rows-auto sm:grid-cols-3 gap-[1em]  md:px-[7em] px-[3em]
      ${lang === "ar" ? "text-right" : "text-left"}
      `}
      >
        {skills.map((item, index) => (
          <motion.div
            whileInView={{
              y: [-100, 10, 0],
              opacity: [0, 1],
            }}
            transition={{
              delay: index * 0.5,
            }}
            viewport={{
              once: true,
            }}
            key={index}
            className={`skill-card gap-1 shadow-xl py-6 px-4 flex flex-col            
            ${lang === "ar" ? "items-end" : ""}
            `}
          >
            <div className="img w-7 h-7 font-bold bg-blue-600 rounded-full text-white flex justify-center items-center">
              {index + 1}
            </div>
            <div className="text-xl font-bold">{item.title}</div>
            <div className="dec">{item.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="projects pt-20">
        <div className="text-2xl font-bold text-center">{t("projects")}</div>
        <div className="grid sm:gap-5 gap-10 py-10 lg:px-[7em] px-[2em] md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {JSON.parse(projects).map((website, index) => {
            return (
              <motion.div
                whileInView={{
                  scale: [0.8, 1],
                }}
                className="project-box flex flex-col "
                style={{
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
                }}
                viewport={{
                  once: true,
                }}
                key={index}
              >
                <div className="img h-[10em]">
                  <img
                    src={website.img}
                    alt={website.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex h-full flex-col p-5">
                  <div className="title text-xl font-bold">{website.title}</div>
                  <div className="description flex-1">
                    {website.description}
                  </div>
                  <div className="flex pt-4 items-center justify-between">
                    <a href={website.demo} className="flex">
                      <div className="text-sm text-blue-600">Visit</div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* last section */}
      <div className="contact-me text-lg w-full items-center font-bold  text-blue-600 text-center py-[3em] flex flex-col">
        <div className="github capitalize w-max flex flex-col gap-1 underline-none">
          <div className="text-xl text-black">find me from</div>
          <a className="underline" href="https://github.com/omer-os">
            github
          </a>
          <a className="underline" href="https://instagram.com/omar.chatin">
            instagram
          </a>
          <a className="underline" href="https://github.com/omer-os">
            telegram
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let projects = [];
  const res = await fetch("https://omarchatin.vercel.app/api/projects");
  projects = await res.text();

  return {
    props: {
      projects,
    },
  };
};

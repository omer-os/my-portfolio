import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <>
      <div className=" h-screen flex items-center justify-center px-4">
        <section className="flex items-center">
          <div className="mx-auto max-w-[43rem]">
            <div className="text-center">
              <p className="sm:text-lg font-medium sm:leading-8 text-indigo-600/95">
                Welcome to my website
              </p>
              <h1 className="sm:mt-3 mt-1 sm:text-[3.5rem] text-3xl font-bold sm:leading-[4rem] tracking-tight">
                I'm A Creative Ui/Ux Designer And Front End Web Developer
              </h1>
              <p className="mt-3 sm:text-lg leading-relaxed text-slate-400">
                Web Designer and Front End Developer with a passion for creating
                beautiful and functional user interfaces and websites
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/projects"
                className="transform rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                My Projects
              </Link>
              <Link
                href="/blog"
                className="transform rounded-md border border-zinc-800 px-5 py-3 font-medium text-zinc-300 bg-zinc-900 transition-colors hover:bg-zinc-800"
              >
                My Blog
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="py-20 px-[clamp(1em,7vw,10em)] bg-zinc-900/80 border border-zinc-800 items-center mt-20 flex lg:flex-row flex-col gap-10">
        <div className="img h-[25em] w-full lg:min-w-[clamp(2em,50vw,35em)]">
          <img
            src="/images/hero-me.jpg"
            className="rounded-xl border border-zinc-800 h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="sm:text-3xl text-2xl capitalize font-bold">
            about me
          </div>
          <div className="sm:text-2xl">
            my name is omar and I am currently a dental student and a musician.
            I started coding when I was 18 years old and instantly fell in love
            with it. I have mostly worked on web development and web design
            projects, but I am always open to learning new things.
          </div>
          <Link
            className="py-2 px-4 sm:mt-10 mt-6 bg-blue-600 rounded w-max capitalize"
            href="/projects"
          >
            my projects
          </Link>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-start md:px-0 px-8 mx-auto lg:w-[70vw] md:w-5/6 sm:mt-[9em] mt-[20em] sm:gap-10 gap-4">
        <div className="flex flex-col">
          <div className="text-3xl font-bold capitalize">achievements</div>
          <div className="text-zinc-400 mt-3 text-xl">
            I have helped create sites and applications for a wide range of
            businesses and organizations. My skills include responsive design,
            user experience, and front-end development.
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 lg:w-max w-full justify-between rounded-xl py-[2em] sm:px-[4em] px-10 flex sm:flex-row flex-col sm:gap-10 gap-14">
          {[
            {
              head: "25+",
              subhead: "self projects",
            },
            {
              head: "3+",
              subhead: "for clients",
            },
            {
              head: "2+",
              subhead: "Years Experience",
            },
          ].map((i, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="font-bold text-4xl sm:text-5xl">{i.head}</div>
              <div className="text-xl w-max">{i.subhead}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-full w-4/6 mx-auto bg-zinc-800 h-[.1em] mt-28"></div>

      <div className="h-[30em] flex items-center justify-ceter">
        <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl mx-auto lg:w-4/6 w-5/6 text-center font-bold">
          Design is more than what it looks like and feels like. Design is how
          it works.
        </div>
      </div>

      <div className="py-10 bg-gradient-to-b from-zinc-900 border-t border-zinc-700 grid md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-10 gap-20 lg:px-[10em] px-10">
        {[
          {
            head: "Ui/Ux Designer",
            subhead:
              "I have a passion for creating simple, elegant, and user-friendly designs that are both aesthetically pleasing and easy to use",
          },
          {
            head: "coder",
            subhead:
              "I love to code and i love to learn new things. I have a strong desire to learn and grow as a developer.",
          },
          {
            head: "Learning and Growing",
            subhead: "I have a strong desire to learn and grow as a developer.",
          },
        ].map((i, index) => (
          <div key={index} className="flex gap-2 flex-col">
            <div className="text-xl font-bold border border-zinc-700 rounded-xl flex items-center justify-center w-10 h-10 ">
              {index + 1}
            </div>
            <div className="text-xl mt-3 font-bold">{i.head}</div>
            <div className="text-zinc-400">{i.subhead} </div>
          </div>
        ))}
      </div>

      <div className="rounded-full w-4/6 mx-auto bg-zinc-800 h-[.1em] mt-20"></div>

      <div className="py-20">
        <div className="flex text-center mx-auto lg:w-3/6 px-10 gap-2 flex-col items-center">
          <div className="sm:text-4xl text-3xl font-bold">
            Why You Should Have a Website?
          </div>
          <div className="text-zinc-400 sm:text-base text-sm mt-1 sm:mt-4 max-w-[30em]">
            There are many reasons why you should have a website for your
            business or organization.
          </div>
        </div>

        <div className="flex flex-col px-10 lg:w-[50vw] mt-10 md:w-5/6 mx-auto gap-10">
          {[
            "A website can help you reach a larger audience, build credibility, and establish thought leadership in your industry.",
            "A Most people today use the internet as their primary source of information. If you don't have a website, you're missing out on a huge opportunity to reach potential customers and grow your business.",
            "Finally, a website can help you establish thought leadership in your industry. By sharing blog posts, infographics, and other thought-provoking content, you can position yourself as an expert in your field. This can help you attract more customers and grow your business.",
            "Finally, a website can help you establish thought leadership in your industry. By sharing blog posts, infographics, and other thought-provoking content, you can position yourself as an expert in your field. This can help you attract more customers and grow your business.",
            "If you're not sure where to start, there are many web design companies that can help you create a professional website for your business. Investing in a website is a smart decision that can help you reach your business goals.",
          ].map((i, index) => (
            <div
              key={index}
              className="flex bg-zinc-900 px-5 py-6 rounded border border-zinc-800 items-start gap-10"
            >
              <div className="sm:text-2xl text-zinc-400">{i}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-full w-4/6 mx-auto bg-zinc-800 h-[.1em] mt-20"></div>

      <div className="grid xl:mx-auto lg:grid-cols-3 md:grid-cols-2 xl:w-[70vw] mt-20 mx-8 gap-10">
        <div className="sm:col-span-2 lg:col-span-3 text-4xl font-bold capitalize">
          featured projects
        </div>
        {[
          {
            img: "https://images.unsplash.com/photo-1671561388563-5ea72ba13151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            categories: ["agency", , "portfolio"],
            title: "Melo Production Website",
            subtitle:
              "Company website for Melo Production. Meloproduction is a company that provides digital services to the world.",
          },
          {
            img: "https://images.unsplash.com/photo-1671561388563-5ea72ba13151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            categories: ["agency", , "portfolio"],
            title: "Melo Production Website",
            subtitle:
              "Company website for Melo Production. Meloproduction is a company that provides digital services to the world.",
          },
          {
            img: "https://images.unsplash.com/photo-1671561388563-5ea72ba13151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            categories: ["agency", , "portfolio"],
            title: "Melo Production Website",
            subtitle:
              "Company website for Melo Production. Meloproduction is a company that provides digital services to the world.",
          },
        ].map((i, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-3 rounded-lg border border-zinc-800"
          >
            <div className="w-full h-[15em]">
              <img
                src={i.img}
                className="w-full rounded-lg h-full object-cover"
                alt=""
              />
            </div>
            <div className="flex my-3 gap-3">
              {i.categories.map((i, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 border border-zinc-700/50 text-sm rounded py-1 px-2"
                >
                  {i}
                </div>
              ))}
            </div>

            <div className="text-xl font-bold">{i.title}</div>

            <div className="text-zinc-300 my-2">{i.subtitle}</div>

            <div className="flex mt-5 gap-4">
              <Link
                href="/"
                className="bg-blue-600 text-center sm:text-base text-sm flex-1 font-bold py-2 px-3 rounded"
              >
                project details
              </Link>
              <Link
                href="/"
                className="bg-zinc-700/60 text-center sm:text-base text-sm flex-1 font-bold py-2 px-3 rounded"
              >
                project details
              </Link>
            </div>
          </div>
        ))}
        <div className="sm:col-span-2 lg:col-span-3 flex justify-center mt-2">
          <Link
            href="/projects"
            className="capitalize bg-blue-600 font-bold text-xl py-2 px-3 rounded"
          >
            checkout more projects
          </Link>
        </div>
      </div>
    </>
  );
}

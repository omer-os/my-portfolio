// const projects = {
//   en: [
//     {
//       id: "96587f1e-d106-5c20-b617-bcece9b3ca37",
//       title: "Melo Production Website",
//       description:
//         "Company website for Melo Production. This website is built with React and NextJS. meloproduction is a company that provides digital services to the world.",
//       demo: "https://meloproduction.vercel.app/",
//       sourcecode: "https://github.com/omer-os/meloproduction-website/",
//       img: "https://user-images.githubusercontent.com/66512898/168011845-614d1293-c81c-48b1-aa2b-f17aa8b07392.PNG",
//     },
//     {
//       id: "61d6f680-d3c4-5175-a976-f0e9c25a1714",
//       title: "Codie.club",
//       description: "platform for learning to code.",
//       demo: "https://codie-club.vercel.app/",
//       sourcecode: "https://github.com/omer-os/codie.club",
//       img: "https://user-images.githubusercontent.com/66512898/170021314-b239fd2d-c165-4586-96ca-0f0bc3d6e754.png",
//     },
//     {
//       id: "8b79dd93-ca80-518a-b2cf-36f1cbe7c580",
//       title: "Treesa",
//       description:
//         "Create a legacy for a loved one by planting trees to restore forests.limate change. Your tribute will safeguard biodiversity and fight c. Effective Conservation. Restore Earth's Balance.",
//       demo: "https://omer-os.github.io/treesa/",
//       sourcecode: "https://github.com/omer-os/treesa",
//       img: "https://omarchatin.netlify.app/static/media/p1.a796d8bb.png",
//     },
//   ],
//   ar: [
//     {
//       id: "96587f1e-d106-5c20-b617-bcece9b3ca37",
//       title: "Melo Production Website",
//       description:
//         "موقع الكتروني لبناء حلول البرمجية.",
//       demo: "https://meloproduction.vercel.app/",
//       sourcecode: "https://github.com/omer-os/meloproduction-website/",
//       img: "https://user-images.githubusercontent.com/66512898/168011845-614d1293-c81c-48b1-aa2b-f17aa8b07392.PNG",
//     },
//     {
//       id: "61d6f680-d3c4-5175-a976-f0e9c25a1714",
//       title: "Codie.club",
//       description: "منصة لتعلم البرمجة.",
//       demo: "https://codie-club.vercel.app/",
//       sourcecode: "https://github.com/omer-os/codie.club",
//       img: "https://user-images.githubusercontent.com/66512898/170021314-b239fd2d-c165-4586-96ca-0f0bc3d6e754.png",
//     },
//     {
//       id: "8b79dd93-ca80-518a-b2cf-36f1cbe7c580",
//       title: "Treesa",
//       description:
//         "موقع الكتروني لشراء اشجار.",
//       demo: "https://omer-os.github.io/treesa/",
//       sourcecode: "https://github.com/omer-os/treesa",
//       img: "https://omarchatin.netlify.app/static/media/p1.a796d8bb.png",
//     },
//   ],
// };

const projects = [
  {
    id: "96587f1e-d106-5c20-b617-bcece9b3ca37",
    title: "Melo Production Website",
    description:
      "Company website for Melo Production. This website is built with React and NextJS. meloproduction is a company that provides digital services to the world.",
    demo: "https://meloproduction.vercel.app/",
    sourcecode: "https://github.com/omer-os/meloproduction-website/",
    img: "https://user-images.githubusercontent.com/66512898/168011845-614d1293-c81c-48b1-aa2b-f17aa8b07392.PNG",
  },
  {
    id: "61d6f680-d3c4-5175-a976-f0e9c25a1714",
    title: "Codie.club",
    description: "platform for learning to code.",
    demo: "https://codie-club.vercel.app/",
    sourcecode: "https://github.com/omer-os/codie.club",
    img: "https://user-images.githubusercontent.com/66512898/170021314-b239fd2d-c165-4586-96ca-0f0bc3d6e754.png",
  },
  {
    id: "8b79dd93-ca80-518a-b2cf-36f1cbe7c580",
    title: "Treesa",
    description:
      "Create a legacy for a loved one by planting trees to restore forests.limate change. Your tribute will safeguard biodiversity and fight c. Effective Conservation. Restore Earth's Balance.",
    demo: "https://omer-os.github.io/treesa/",
    sourcecode: "https://github.com/omer-os/treesa",
    img: "https://omarchatin.netlify.app/static/media/p1.a796d8bb.png",
  },
];

export default function handeler(req, res) {
  res.send(projects);
}

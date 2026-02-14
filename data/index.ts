import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build scalable, production-ready MERN stack applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones & ready for global remote work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently mastering Data Structures & Algorithms",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 -bottom-5 md:w-96 w-80   ",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b52.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to add value to your engineering team?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Unimart - E-commerce Website",
    des: "Unimart is a comprehensive e-commerce platform built with React, Tailwind CSS and Node.js with MongoDB as the database. ",
    img: "/Unimart.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg","/postman.svg"],
    link: "https://unimart.pankajkumar.app/",
  },
  {
    id: 2,
    title: "Bond and Bites",
    des: "Bond and Bites is a restaurant order management app built with React.js, Tailwind CSS, Express.js, and Cloudinary for image management.",
    img: "/bond&bites.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg","/cloud.svg"],
    link: "https://github.com/kumarpankaj3404/Resturant-Frontend",
  },
  {
    id: 3,
    title: "Recipe Finder",
    des: "Recipe Finder is a modern React application that allows users to discover, browse, and save their favorite recipes.",
    img: "/recipe.png",
    iconLists: ["/re.svg", "/tail.svg","/js.svg","/api.svg"],
    link: "https://recipe-finder-pankaj.vercel.app/",
  },
  {
    id: 4,
    title: "Dojo Blog",
    des: "Dojo Blog is a modern React application that allows users to discover, browse, and save their favorite blog posts.",
    img: "/dojo.png",
    iconLists: ["/re.svg", "/tail.svg","/js.svg"],
    link: "https://dojo-blog-sage.vercel.app/",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/kumarpankaj3404"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pankaj-kumar-513a10298/"
  },
];
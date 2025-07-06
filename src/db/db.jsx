import aptechImg from "../assets/aptech-computer-education-logo.png";
import ptouche from "../assets/logo-long@1000x-120x35.png";
import adminting from "../assets/adm-log-1.png";
import { Facebook, Twitter, GitHub, WhatsApp } from "@mui/icons-material";
import mario from "../assets/mario.png";
import admintingpage from "../assets/Home-Adminting.png";
import alpaca from "../assets/Alpaca-Fashion-Academy.png";
import ptouchePage from "../assets/Ptouche-Wifi-–-do-more…-be-unlimited.png";
import lastofUs from "../assets/The-last-of-us-Reboot.png";

/* export const ContactInfo = [
    {title:"Uyo, Akwaibom State", icon:<Star/>},
    {title:'Stanykhay29@gmail.com', }
] */

export const socialMedia = [
  {
    icon: <Facebook className="cusiconclass" />,
    link: "https://www.facebook.com/stanley.ajaero.5",
  },
  {
    icon: <Twitter className="cusiconclass" />,
    link: "https://twitter.com/weereyGeneral",
  },
  {
    icon: <GitHub className="cusiconclass" />,
    link: "https://github.com/Stanjae",
  },
  {
    icon: <WhatsApp className="cusiconclass" />,
    link: "tel:+234-701-532-4683",
  },
];

export const skillset = [
  { title: "HTML5/CSS", score: 97 },
  { title: "REACT.Js", score: 90 },
  { title: "TYPESCRIPT", score: 90 },
  { title: "WORDPRESS", score: 95 },
  { title: "NODE.JS", score: 90 },
  { title: "NEXT.JS", score: 95 },
  { title: "GIT", score: 95 },
];

export const Projectso = [
  {
    id: 1,
    title: "Mario Animation",
    link: "https://stanjae.github.io/mario-animation/",
    image: mario,
    tech: ["Html5", "Css", "Vanilla Javascript"],
  },
  {
    id: 2,
    title: "Adminting Website",
    link: "https://adminting.com/",
    image: admintingpage,
    tech: ["Elementor", "Gamipress", "Mautic", "Wordpress"],
  },
  {
    id: 3,
    title: "Alpaca Web Design",
    link: "https://stanjae.github.io/Alpaca-fashion-Academy/",
    image: alpaca,
    tech: ["Html5", "Tailwind.css", "Vanilla javascript"],
  },
  {
    id: 4,
    title: "Ptouche WIFI Website",
    link: "https://ptouche.com/",
    image: ptouchePage,
    tech: ["Elementor", "Woo-Commerce", "Mautic", "Wordpress"],
  },
  {
    id: 5,
    title: "Last of Us WebPage",
    link: "https://stanjae.github.io/last-of-us/",
    image: lastofUs,
    tech: ["Html5", "Bootstrap"],
  },
];

export const Xperience = [
  {
    header: "Front-End Intern",
    workplace: "Aptech Nigeria",
    type: "Full-time",
    image: aptechImg,
    longtext:
      "At Aptech Nigeria, I had the opportunity to work in the web development department, contributing to various projects and gaining valuable experience in the field.Here, I worked with a team of developers, designers, and project managers to deliver high-quality web solutions to clients across diverse industries",
    duty: "Office Job",
    period: "June 2020 - May 2021",
  },

  {
    header: "Fullstack Engineer",
    workplace: "Adminting Services",
    type: "Full-time",
    image: adminting,
    longtext:
      "At Adminting, I enhanced existing codebases by applying industry best practices, ensuring semantic HTML structure and implementing effective SEO strategies through tools like the Yoast SEO plugin. I also played a key role in setting up a robust email marketing system by integrating Mautic and configuring an SMTP server to ensure smooth, spam-free communication between the company and its clients. Working closely with the back-end team, I integrated API calls seamlessly into a React.js frontend, creating a cohesive user experience. Additionally, I developed a secure, gamified web application using WordPress and GamiPress, designed to reward users for completing tasks—blending engagement with functionality.",
    duty: "Remote",
    period: "June 2022 - April 2023",
  },

  {
    header: "Front-End Engineer",
    workplace: "Ptouche WIFI Services",
    type: "Full-time",
    image: ptouche,
    longtext: "coming soon",
    duty: "Remote",
    period: "June 2022 - till date",
  },
];

export const Academia = [
  {
    title: "B.Eng Computer Engineering",
    school: "University of Uyo, Uyo, Akwaibom",
    period: "2017 - 2022",
  },
  {
    title: "Diploma in Web Development",
    school: "Aptech, Nigeria",
    period: "2020 - 2021",
  },
  {
    title: "B.Eng Software Engineering",
    school: "ALX Academy",
    period: "2022 - 2023",
  },
];

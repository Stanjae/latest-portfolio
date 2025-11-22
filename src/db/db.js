import aptechImg from "../assets/aptech-computer-education-logo.png";
import ptouche from "../assets/logo-long@1000x-120x35.png";
import adminting from "../assets/adm-log-1.png";
import { Facebook, Twitter, GitHub, WhatsApp } from "@mui/icons-material";
import mario from "../assets/mario.png";
import admintingpage from "../assets/Home-Adminting.png";
import skillupImo from "../assets/skillup.png";
import ptouchePage from "../assets/pinterest.png";
import lastofUs from "../assets/The-last-of-us-Reboot.png";
import Owarch from "../assets/opera.png";
import Tiktok from "../assets/tiktok.png";
import MedReserve from "../assets/medreserve.png";
import Blacko from "../assets/blacko.png";

export const socialMedia = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/stanley.ajaero.5",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/weereyGeneral",
  },
  {
    icon: GitHub,
    link: "https://github.com/Stanjae",
  },
  {
    icon: WhatsApp,
    link: "tel:+234-701-532-4683",
  },
];

export const skillset = [
  { title: "HTML5/CSS", score: 97 },
  { title: "React.Js/Next.Js", score: 90 },
  { title: "TypeScript", score: 90 },
  { title: "Wordpress", score: 95 },
  { title: "Node.js", score: 90 },
  { title: "Testing - Jest,", score: 95 },
  { title: "Git", score: 95 },
  { title: "State Management", score: 90 },
  { title: "CI/CD workflows", score: 95 },
];

export const Projectso = [
  {
    id: 1,
    title: "MedReserve - Hospital Appointment Booking System",
    link: "https://medreserve-self.vercel.app/",
    image: MedReserve,
    tech: [
      "Next.js",
      "Mantine UI",
      "Tailwind.css",
      "TypeScript",
      "Appwrite",
      "Paystack",
    ],
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
    title: "SKILL-UP IMO PROGRAMME",
    link: "https://portal.mdeeg.im.gov.ng/",
    image: skillupImo,
    tech: [
      "Wordpress",
      "Elementor",
      "Yoast SEO",
      "WP Rocket",
      "Cloudflare",
      "Mailgun",
      "School MGT LMS",
    ],
  },
  {
    id: 4,
    title: "X Pinterest Clone",
    link: "https://x-pinterest.vercel.app/",
    image: ptouchePage,
    tech: ["Next.js", "Tailwind.css", "Chakra UI", "Sanity.io"],
  },
  {
    id: 5,
    title: "Blacko Store  - E-commerce Website",
    link: "https://blacko-store.vercel.app/",
    image: Blacko,
    tech: ["React.js", "Material UI", "TypeScript", "Monnify", "Sanity.io"],
  },
  {
    id: 6,
    title: "Tiktok Clone",
    link: "https://vybesync.vercel.app/",
    image: Tiktok,
    tech: ["Next.js", "Tailwind.css", "ShadCn", "Sanity.io", "Cloudinary"],
  },
  {
    id: 7,
    title: "Mario Animation",
    link: "https://stanjae.github.io/mario-animation/",
    image: mario,
    tech: ["Html5", "Css", "Vanilla Javascript"],
  },
  {
    id: 8,
    title: "Last of Us WebPage",
    link: "https://stanjae.github.io/last-of-us/",
    image: lastofUs,
    tech: ["Html5", "Bootstrap"],
  },
];

export const Xperience = [
  {
    header: "FullStack Engineer",
    workplace: "ICTDs Technologies",
    longtext:
      "I developed, tested, and deployed intuitive school portals that empowered students under the Catholic Archdiocese to securely access their academic session results. In addition to building the core functionality, I led the development and implementation of new features within the content delivery platform, enhancing its usability and impact. I also provided ongoing support and maintenance, swiftly troubleshooting and resolving complex issues to ensure uninterrupted access and a smooth user experience.",
    type: "Full-time",
    image: Owarch,
        period: "April 2024 - Present",
    duty: "Remote",
  },
  {
    header: "Front-End Intern",
    workplace: "Aptech Nigeria",
    type: "Full-time",
    image: aptechImg,
    longtext:
      "At Aptech Nigeria, I had the opportunity to work in the web development department, contributing to various projects and gaining valuable experience in the field.Here, I worked with a team of developers, designers, and project managers to deliver high-quality web solutions to clients across diverse industries",
    duty: "Onsite Job",
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
    longtext:
      "I consistently recommended and implemented performance enhancements for both new and existing web applications, ensuring smooth and efficient user experiences. By leveraging progressive enhancement techniques, I built cross-browser compatible websites that remained accessible and functional across diverse environments. I translated design mockups and wireframes into high-quality, maintainable code, bringing visual concepts to life with precision. My frontend development process often involved React libraries such as Material UI, Ant Design, Chakra UI, and ShadCN to deliver clean, responsive interfaces. Additionally, I integrated seamlessly with RESTful APIs to connect the frontend with robust back-end services.",
    duty: "Remote",
    period: "Jan 2022 - Aug 2022",
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

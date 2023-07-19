import aptechImg from '../assets/aptech-computer-education-logo.png'
import ptouche from '../assets/logo-long@1000x-120x35.png'
import adminting from '../assets/adm-log-1.png'
import { Home, AccountBox, Tune, CollectionsBookmark,  
    Facebook, Twitter, GitHub, WhatsApp} from '@mui/icons-material';
import mario from '../assets/mario.png'
import admintingpage from '../assets/Home-Adminting.png'
import alpaca from '../assets/Alpaca-Fashion-Academy.png'
import ptouchePage from '../assets/Ptouche-Wifi-–-do-more…-be-unlimited.png'
import lastofUs from '../assets/The-last-of-us-Reboot.png'
import { Star } from '@mui/icons-material'



/* export const ContactInfo = [
    {title:"Uyo, Akwaibom State", icon:<Star/>},
    {title:'Stanykhay29@gmail.com', }
] */

export const socialMedia = [
    {icon:<Facebook className='cusiconclass'/>, link:'https://www.facebook.com/stanley.ajaero.5'},
    {icon:<Twitter className='cusiconclass'/>, link:'https://twitter.com/weereyGeneral'},
    {icon:<GitHub className='cusiconclass'/>, link:'https://github.com/Stanjae'},
    {icon:<WhatsApp className='cusiconclass'/>, link:'tel:+234-701-532-4683'}
  ]

export const skillset = [
    {title:'HTML5', score:97},
    {title:'REACT.Js', score:90},
    {title:'WORDPRESS', score:85},
    {title:'MATERIAL UI', score:89},
    {title:'FIREBASE', score:85},
    {title:'GIT', score:90},
]

export const Projectso = [
    {id:1, title:'Mario Animation', link:'https://stanjae.github.io/mario-animation/', image:mario, tech:['Html5', 'Css', 'Vanilla Javascript']},
    {id:2, title:'Adminting Website', link:'https://adminting.com/', image:admintingpage, tech:['Elementor', 'Gamipress', 'Mautic', 'Wordpress']},
    {id:3, title:'Alpaca Web Design', link:'https://stanjae.github.io/Alpaca-fashion-Academy/', image:alpaca, tech:['Html5', 'Tailwind.css', 'Vanilla javascript']},
    {id:4, title:'Ptouche WIFI Website', link:'https://ptouche.com/', image:ptouchePage, tech:['Elementor', 'Woo-Commerce', 'Mautic', 'Wordpress']},
    {id:5, title:'Last of Us WebPage', link:'https://stanjae.github.io/last-of-us/', image:lastofUs, tech:['Html5', 'Bootstrap',]},
    
]



export const Xperience = [
    {header:'Front-End Intern', workplace:'Aptech Nigeria', 
    type:'Full-time', image:aptechImg, 
    longtext:"At Aptech Nigeria, I had the opportunity to work in the web development department, contributing to various projects and gaining valuable experience in the field.Here, I worked with a team of developers, designers, and project managers to deliver high-quality web solutions to clients across diverse industries", 
    duty:'Office Job', period:'June 2020 - May 2021'},
    
    {header:'Web Engineer', workplace:'Adminting Services', 
    type:'Full-time', image:adminting, 
    longtext:"During my tenure at Adminting Serices, I had the privilege of working in the web development department and contributing to the company's digital presence. I Collaborated with a skilled team of web developers and designers to create innovative and user-friendly websites and web applications. Also Implemented front-end frameworks and libraries like React.js to build dynamic and interactive user interfaces, enhancing the overall user experience.", 
    duty:'Remote', period:'June 2022 - April 2023'},
    
    {header:'Front-End Engineer', workplace:'Ptouche WIFI Services', 
    type:'Full-time', image:ptouche, 
    longtext:'coming soon', 
    duty:'Remote', period:'June 2022 - till date'},
]
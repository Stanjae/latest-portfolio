import React from 'react'
import '../stylesio/cusLoader.css'
import { motion, AnimatePresence } from "framer-motion"
import svGdefault from '../assets/svg-loaders/three-dots.svg'


const styleo = {
  background:'rgba(255,255,255,0.1)', 
  width:'100%', 
  height:'100vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
  }

const CustomLoader = () => {
  return (
    <AnimatePresence>
    <motion.div style={styleo}  transition={{duration: 3}} 
    initial={{ opacity: 0, }} animate={{ opacity: 1 }} exit={{opacity:0}}>

        <motion.img src={svGdefault}
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
        }}/>

    </motion.div>
    </AnimatePresence>
  )
}

export default CustomLoader
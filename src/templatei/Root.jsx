import React, { useEffect, useState, useLayoutEffect } from 'react'
import Navbar from '../components/Navbar'
import { Box, Grid, Button } from '@mui/material'
import { Outlet , useNavigation} from 'react-router-dom'
import Sidebaro from '../components/Sidebaro'
import '../stylesio/Root.css'
import {motion} from 'framer-motion'
import greenCirlce from '../assets/greencircle.png'
import Footer from '../components/Footer'
import CustomLoader from '../components/CustomLoader'



const cardbgstyles={ 
width: '100%',
backgroundImage:`url(${greenCirlce})`,
backgroundSize:'cover', 
backgroundPositionX:'-535px',
backgroundPositionY:'-450px', 
backgroundRepeat:'no-repeat'

}


const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  /* useEffect(() => {
    const myTimeout = setTimeout(() => setIsLoading(false), 13000);
    return () => {
      clearTimeout(myTimeout)
    }
  }, [])
 */
  useLayoutEffect(() => {
    const myTimeout = setTimeout(() => setIsLoading(false), 4000);
  
    return () => {
      clearTimeout(myTimeout)
    };
  }, [])

  
  return (
    <>
      {isLoading ? <CustomLoader/> : 
<motion.div inital={{opacity:0}} animate={{opacity:1}} transition={{ delay: 1, duration: 10, ease: "easeInOut", }}>
       <Grid container columns={12} columnSpacing={0}>
            <Grid p={3} className={'sidebar'}
            sx={{bgcolor:'bgcolor.sidebg', ...cardbgstyles}}
            xs={0} sm={0} md={0} lg={2.5}  item>
                <Sidebaro/>
            </Grid>
            <Grid sx={{bgcolor:'bgcolor.main'}}
            className='content' xs={12} sm={12} md={12} lg={12} item>
            <Navbar/>
                <Outlet/>
            <Footer/>
            </Grid>
       </Grid>
       </motion.div> 
      }
    </>
  )
}

export default Root
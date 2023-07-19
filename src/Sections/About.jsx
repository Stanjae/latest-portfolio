import { Container,Box,  Grid, Typography, Paper, Stack, Divider } from '@mui/material'
import React from 'react'
import rocketo from '../assets/rocket.png'
import { TypeAnime } from '../components/TypeAnime'
import { CustomButton, DownButton, LinkoButton } from '../components/cusButton'
import ScoreProject from '../components/ScoreProject'
import {motion } from 'framer-motion'


const wrapperStyles = { py:{md:'10px'},
 pl:{lg:'140px', xs:'15px'}, pr:{lg:'100px', xs:'15px'}, display:'flex', justifyContent:'center'}

const imageStyles = {maxWidth:'100%', width:'900px',
display:'block', margin:'auto', height:'auto', maxHeight:'500px'}

const variants = {
    visible: { opacity: 1, scale:1 },
    hidden: { opacity: 0 , scale:0},
  }


const About = () => {
  return (
    <Box sx={wrapperStyles}>
        <Grid columnSpacing={1} columns={12} container sx={{ pl:{lg:2, xs:3}, }}>
            <Grid  xs={12} md={6} p={2} item>
                <motion.img transition={{ ease: "easeInOut", duration: 1.5 }} initial="hidden" variants={variants} whileInView="visible" viewport={{ once: false }}
                style={imageStyles} src={rocketo}/>
                    
            </Grid>
            <Grid sx={{py:{lg:'50px'}, pl:{lg:'50px', xs:'0px'}}} px={2} xs={12} md={6} item>
                <Typography  py={1} textAlign={'left'} fontWeight={100} gutterBottom color={'neutral.main'} 
                variant='h5'>
                    ABOUT ME
                    <Divider sx={{bgcolor:'primary.main', width:'50px', height:'1px', mt:1.2}} variant=''/>
                </Typography>

                <Typography  py={1} textAlign={'left'} fontWeight={700} gutterBottom 
                        color={'neutral.main'} variant='h5'>
                        I'm a Full-Stack Developer with over 3 years of experience.
                </Typography>

                <Typography sx={{ opacity:0.7}} py={1.6}  textAlign={'left'} fontWeight={100} gutterBottom 
                        color={'neutral.main'} variant='subtitle1'>
                         I'm a Freelancer Full-Stack Developer with over 3 years of experience. 
                         I am from Lagos, Nigeria. I code and develop problem-solving web-based products for clients. I like work with new people. New people new Experiences.
                </Typography>

               <Stack direction={'row'} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <ScoreProject bigtext={'25'} text={'Projects Completed'}/>
                <ScoreProject bigtext={'15'} text={'Satisfied Clients'}/>
               </Stack>

               <Stack my={0} direction={'row'} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <LinkoButton title={'Contact Me'} link={'contact-me'}/>
                <LinkoButton title={'Portfolio .'} link={'contact-me'}/>
               </Stack>
            </Grid>
           
        </Grid>
    </Box>
  )
}

export default About

import { Container,Box,  Grid, Typography, Paper, Stack, Divider, ListItemText,
List, ListItem } from '@mui/material'
import React from 'react'
import { CustomButton, DownButton, LinkoButton } from '../components/cusButton'
import styled from '@emotion/styled'
import '../stylesio/Home.css'
import CusSlider from '../components/CusSlider'
import { skillset } from '../db/db'


const wrapperStyles = { py:{sm:'80px'},
 pl:{lg:'140px', xs:'15px'}, pr:{lg:'100px', xs:'15px'},}

const imageStyles = {maxWidth:'100%', width:'900px',
display:'block', margin:'auto', height:'auto', maxHeight:'500px'}

/* const CusListItemtext = styled(ListItemText)(({ theme }) => ({
 fontSize:'72px',
  lineHeight:'18px',
  letterSpacing:'3px',
  color:'rgba(255,255,255, 0.8)',
  '&:hover':{
    opacity:'0.9'
 } , 
 }));
 */





const ServicesPage = () => {
  return (
    <Box sx={wrapperStyles}>
      <Typography  py={1} textAlign={'left'} fontWeight={100} gutterBottom 
      color={'neutral.main'} variant='h5'>
                    EDUCATION & SKILLS
                <Divider sx={{bgcolor:'primary.main', width:'50px', height:'1px', mt:1.2}} variant=''/>
        </Typography>
        <Grid columnSpacing={1} columns={12} container sx={{ pl:{lg:2, xs:3}, }}>
            <Grid  xs={12} md={5} sx={{py:{lg:'50px'}}} item>
              <List sx={{width:{md:'300px'}}} >
                  <ListItem className='newItem' divider={true}>
                    <Stack spacing={1.5}>
                    <span className='spanText'>2010 - 2016</span>
                  
                  <ListItemText sx={{pb:1}} primary="SSCE"
                    secondary='Nigeran Navy Secondary School, Akpabuyo, CrossRiver'
                  />
                    </Stack>
                  
                  
                  </ListItem>

                  <ListItem className='newItem' divider={true}>
                    <Stack spacing={1.5}>
                    <span className='spanText'>2017 - 2022</span>
                  
                  <ListItemText sx={{pb:1}} primary="B.Eng"
                    secondary='University of Uyo, Uyo, Akwaibom'
                  />
                    </Stack>
                  
                  
                  </ListItem>
                  <ListItem className='newItem' divider={true}>
                    <Stack spacing={1.5}>
                    <span className='spanText'>2020 - 2021</span>
                  
                  <ListItemText sx={{pb:1}} primary="Web Development"
                    secondary='Aptech Computer Institute, Owerri'
                  />
                    </Stack>
                  
                  
                  </ListItem>
                  
              </List>
                    
            </Grid>
            <Grid sx={{py:{lg:'50px', xs:'30px'}, pl:{lg:'0px', xs:'0px'}}} xs={12} md={7} item>

                <Typography  py={{lg:1, xs:2}} textAlign={'left'} fontWeight={700} gutterBottom 
                        color={'neutral.main'} variant='h5'>
                        My Skills
                </Typography>

                <Typography sx={{ opacity:0.7}} py={1.6}  textAlign={'left'} fontWeight={100} gutterBottom 
                        color={'neutral.main'} variant='subtitle2'>
                         As a web developer, I possess a diverse range of technical skills and expertise. I constantly strive to stay up-to-date with the latest industry trends and technologies to deliver high-quality web solutions. Here are some of the key skills I bring to the table:
                </Typography>

               <Stack direction={'column'} spacing={{ xs: 1, sm: 1, md: 1 }}>
                {skillset.map((item, index)=>(
                    <CusSlider key={index} title={item.title} score={item.score}/>
                ))}
                
               </Stack>
            </Grid>
           
        </Grid>
    </Box>
  )
}

export default ServicesPage

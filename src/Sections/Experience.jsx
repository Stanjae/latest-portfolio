import { Container,Box,  Grid, Typography, Paper, Stack, Divider, ListItemText,
    List, ListItem } from '@mui/material'
    import React from 'react'
    import { CustomButton, DownButton, LinkoButton } from '../components/cusButton'
    import '../stylesio/Home.css'
    import CusSlider from '../components/CusSlider'
    import { skillset, Xperience } from '../db/db'
    import CusCard from '../components/CusCard'
    
    
    const wrapperStyles = { py:{md:'80px', xs:'40px'},
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
    
    
    
    
    
    const Experience = () => {
      return (
        <Box sx={wrapperStyles}>
          <Typography  py={2} textAlign={'left'} fontWeight={100} gutterBottom 
          color={'neutral.main'} variant='h5'>
                        EXPERIENCE
                    <Divider sx={{bgcolor:'primary.main', width:'50px', height:'1px', mt:1.2}} variant=''/>
            </Typography>
            <Grid columnSpacing={1} columns={12} container sx={{ pl:{md:2, xs:0.5}, }}>
                <Grid  xs={12}  sx={{py:{lg:'50px'}}} item>
                   <Stack >
                    {Xperience.map((item,index) =>(
                        <div key={index}>
                            <CusCard item={item}/>
                            <Divider sx={{backgroundColor:'rgba(255,255,255,0.05)'}}/>
                      </div>
                    ))}
                    </Stack>
                  
                        
                </Grid>
            </Grid>
        </Box>
      )
    }
    
    export default Experience
    
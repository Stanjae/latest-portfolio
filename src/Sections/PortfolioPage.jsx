import { Box,  Grid, Typography, Divider, } from '@mui/material'
import { useState } from 'react'
import '../stylesio/Home.css'
import { Projectso} from '../db/db'
import ImgCard from '../components/ImgCard'
import CusModal from '../components/CusModal'
import {motion} from 'framer-motion'
    
    
    const wrapperStyles = { py:{md:'80px', xs:'40px'},
     pl:{lg:'140px', xs:'15px'}, pr:{lg:'100px', xs:'15px'},}


    const variants = {
            visible: { opacity: 1, scale:1 },
            hidden: { opacity: 0 , scale:0},
          }

    const PortfolioPage = () => {
        const [modalObj, setModalObj] = useState(null);
        const [modalOpen, setModalOpen] = useState(false)

        const handleOpen = () => setModalOpen(true);
        const handleClose = () => setModalOpen(false);

        const HandleClickProject =(id)=>{
            const newObj = Projectso.find((item)=> id === item.id)
            setModalObj(newObj);
            handleOpen();
        }

        

      return (
        <Box sx={wrapperStyles}>
          <Typography  py={1} textAlign={'left'} fontWeight={100} gutterBottom 
          color={'neutral.main'} variant='h5'>
                        PORTFOLIO
                    <Divider sx={{bgcolor:'primary.main', width:'15%', height:'1px', mt:1.2}} variant=''/>
            </Typography>
            <Box>
                {/* <ImageList  variant="masonry" cols={3} gap={8}>
                {Projectso.map((item, index)=>(
                    <ImageListItem key={index} >
                        <ImgCard HandleClickProject={HandleClickProject} item={item} 
                        heighto={heights[index]}/>
                    </ImageListItem>
                ))}
                    
                </ImageList> */}
                <Grid container py={2} columns={12} spacing={{md:3, xs:2 }}>
                    {Projectso.map((item, index)=>(
                        <Grid key={index} xs={12} sm={6} md={4} item>
                            <motion.div transition={{ ease: "easeInOut", duration:`${index/2}` }} initial="hidden" variants={variants} whileInView="visible" viewport={{ once: false }} >
                                <ImgCard HandleClickProject={HandleClickProject} item={item} 
                                heighto={'200'}/>
                            </motion.div>
                        </Grid>  
                ))}
                </Grid>
                <CusModal modalstate={modalOpen} 
                handleClose={handleClose} handleOpen={handleOpen} content={modalObj}/>
            </Box>
                              
        </Box>
      )
    }
    
    export default PortfolioPage
    
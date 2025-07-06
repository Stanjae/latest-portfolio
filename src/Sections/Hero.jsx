import { Box,  Grid, Typography } from '@mui/material'
import bghero from '../assets/blackcircle.png'
import bigProfile from '../assets/green.png'
import { TypeAnime } from '../components/TypeAnime'
import { DownButton } from '../components/cusButton'
import {motion} from 'framer-motion'


const wrapperStyles = { backgroundImage:`url(${bghero})`,
backgroundSize:'cover', backgroundPositionX:{lg:'535px', xs:'-550px'},
backgroundPositionY:{lg:'-200px', xs:'-250px'}, backgroundRepeat:'no-repeat',
pt:{xs:'80px'}, pb:{lg:'30px'},  pl:{lg:'140px', xs:'15px'}, pr:{lg:'100px', xs:'15px'}, display:'flex', justifyContent:'center'}

const imageStyles = {maxWidth:'100%', borderRadius:'100%', width:'445px', objectFit:'cover',
display:'block', margin:'auto', height:'auto', maxHeight:'445px'}

const variants = {
    visible: { opacity: 1, scale:1 },
    hidden: { opacity: 0 , scale:0},
  }


const Hero = () => {
  return (
    <Box sx={wrapperStyles}>
      <Grid
        columnSpacing={1}
        columns={12}
        container
        sx={{ pl: { lg: 2, xs: 3 } }}
      >
        <Grid
          sx={{ py: { lg: "50px" }, pl: { lg: "50px", xs: "0px" } }}
          px={2}
          xs={12}
          md={6}
          item
        >
          <Typography
            py={1}
            textAlign={"left"}
            fontWeight={600}
            gutterBottom
            color={"neutral.main"}
            variant="h5"
          >
            Hello, I am
          </Typography>

          <Typography
            py={1}
            textAlign={"left"}
            fontWeight={700}
            gutterBottom
            color={"neutral.main"}
            variant="h1"
          >
            Stanley Ajaero
          </Typography>

          <TypeAnime />

          <Typography
            sx={{ opacity: 0.7 }}
            py={1.6}
            textAlign={"left"}
            fontWeight={200}
            gutterBottom
            color={"neutral.main"}
            variant="subtitle1"
          >
            I&apos;m a results-driven Full-Stack Developer passionate about building
            scalable, user-centric digital experiences.
          </Typography>

          <DownButton title={"Download Cv"} />
        </Grid>
        <Grid xs={12} md={6} px={{ xs: 2 }} py={{ xs: 4 }} item>
          <motion.img
            transition={{ ease: "easeOut", duration: 3 }}
            initial="hidden"
            variants={variants}
            whileInView="visible"
            viewport={{ once: true }}
            style={imageStyles}
            src={bigProfile}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero

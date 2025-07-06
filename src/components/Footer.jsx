import { Box, Typography, Stack } from '@mui/material'
import {socialMedia } from '../db/db'

const Footer = () => {
  return (
   <Box sx={{width:'100%', p:4, bgcolor:'bgcolor.sidebg', display:{lg:'none', xs:'block'}}} component={'footer'}>
        <Typography color={'neutral.main'} variant='h6' textAlign={'center'}>
            &copy; Stan<Typography color={'primary'} component={'span'}>jhae</Typography>
        </Typography>

        <Stack sx={{ width:'100%', p:2}} 
      justifyContent={'center'} alignItems={'flex-end'} direction={'row'} spacing={1.5}>
        {socialMedia.map((item, index)=>(
            <Typography key={index} href={item.link} component={'a'}>
              {item.icon}  
            </Typography>
        ))}
              
      </Stack>
   </Box>
  )
}

export default Footer
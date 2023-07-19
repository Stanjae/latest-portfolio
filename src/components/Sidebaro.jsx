import React, {useState} from 'react'
import { Box, List, Stack, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {socialMedia} from '../db/db'
import cardImg from '../assets/yellow.png'
import '../stylesio/Sidebar.css'
import { Home, AccountBox, Tune, CollectionsBookmark, Contacts, Star  } from '@mui/icons-material';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';


const cardbgstyles={ 
width: '100%',
position:'relative'

};

const CustomListBtn = styled(ListItemButton)(({ theme }) => ({
  fontSize:'12px',
  lineHeight:'18px',
  letterSpacing:'3px',
  color:'rgba(255,255,255, 0.7)',
  '&:hover':{
    background:'rgba(12,12,15,0.5)',
    color:'rgba(255,255,255, 1)',
  }
}));

/* const CusListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  fontSize:'12px',
  lineHeight:'18px',
  letterSpacing:'3px',
  color:'rgba(255,255,255, 0.8)',
  '&:hover':{
    opacity:'0.9'
  }
})); */

const CusHashLink = styled(HashLink)(({ theme }) => ({
  fontSize:'12px',
  lineHeight:'18px',
  textAlign:'left',
  letterSpacing:'3px',
  paddingLeft:'12px',
  textDecoration:'none',
  color:'rgba(255,255,255, 0.7)',
  '&:hover':{
    color:'rgba(255,255,255, 1)',
  }
}));

const NaviItem =[
  {title:'HOME', link:'/#home', icon:<Home className='customicon'/>},
  {title:'ABOUT ME', link:'/#about-me', icon:<AccountBox className='customicon'/>},
  {title:'SKILLS', link:'/#services', icon:<Star className='customicon'/>},
  {title:'EXPERIENCE', link:'/#xperience', icon:<Tune className='customicon'/>},
  {title:'PORTFOLIO', link:'/#portfolio', icon:<CollectionsBookmark className='customicon'/>},
  {title:'CONTACT ME', link:'/#contact-me', icon:<Contacts className='customicon'/>}

]



export default function Sidebaro() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={cardbgstyles}>
      <Box py={5}>
      <div className='cardwrapper'>
        <div className='cardframe' >
            <img src={cardImg}/>
        </div>
        <Typography mt={2.5}
        color={'neutral.main'} textAlign={'center'} variant='subtitle1'>Stanley Ajaero</Typography>
      </div>
      </Box>
      
      <List  component="nav" aria-label="main mailbox folders">
        {NaviItem.map((item, index)=>(
          <div key={index}>
              <CustomListBtn  className='listWrapper'
                 selected={selectedIndex === index}
                 onClick={(event) => handleListItemClick(event, index)}
               >
                   {item.icon}
             
                 <CusHashLink className='custext' smooth to={item.link}>
                  <ListItemText primary={item.title} />
                 </CusHashLink>
                 
               </CustomListBtn>
               <Divider sx={{backgroundColor:'rgba(255,255,255,0.05)'}}/>
               </div>
        ))}  
      </List>
      <Stack sx={{position:'absolute', width:'100%', bottom:'-29%'}} 
      justifyContent={'center'} alignItems={'flex-end'} direction={'row'} spacing={2}>
        {socialMedia.map((item, index)=>(
            <Typography key={index} href={item.link} component={'a'}>
              {item.icon}  
            </Typography>
        ))}
              
      </Stack>

    </Box>
  );
}
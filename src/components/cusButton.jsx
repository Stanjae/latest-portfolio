import { Button, Paper } from '@mui/material';
import React from 'react'
import styled from '@emotion/styled';
import cusimage from '../assets/about-me.jpg'
import '../stylesio/Button.css'
import { HashLink } from 'react-router-hash-link';


const MakeButton = styled(Button)(({ theme }) => ({
    fontSize:'14px',
    lineHeight:'42px',
    letterSpacing:'2px',
    color:'rgba(255,255,255, 0.9)',
    
    '&:hover':{
      opacity:'0.9',
      background: theme.palette.neutral.main,
      color:theme.palette.primary.main,
}
}));

const DownloadButton = styled(Button)(({ theme }) => ({
    fontSize:'14px',
    lineHeight:'42px',
    letterSpacing:'2px',
    background: theme.palette.primary.main,
    borderRadius:0,
    color:'rgba(255,255,255, 0.9)',

    '&:hover':{
      opacity:'0.9',
      background: theme.palette.neutral.main,
      color:theme.palette.primary.main,
}
}));

const LinkerButton = styled(HashLink)(({ theme }) => ({
  fontSize:'14px',
  lineHeight:'42px',
  letterSpacing:'2px',
  background: theme.palette.primary.main,
  textDecoration:'none',
  borderRadius:0,
  padding:'10px 20px',
  color:'rgba(255,255,255, 0.9)',
  zIndex:11,
  display:'block',
  '&:hover':{
    opacity:'0.9',
    background: theme.palette.neutral.main,
    color:theme.palette.primary.main,
}
}));

export const DownButton = ({title}) => {
  return (
    <span className='makebut'>
    <Paper className='papero' style={{borderRadius:0, height:'50px', width:'142px',transform:'translate(2px, 57.5px)'}}  elevation={5}> 
    </Paper>
        <DownloadButton variant='contained' href={cusimage} download>
            {title}
        </DownloadButton>
    </span>
    
    
  )
};


export const CustomButton = ({title, link}) => {
    return (
    <div className='makebut'>
    <Paper className='papero' style={{borderRadius:0,  height:'50px', width:'140px',transform:'translate(2px, 57.5px)'}}  elevation={5}> 
    </Paper>
    <MakeButton href={link} target='_blank'>{title}</MakeButton>
    </div>
      
    )
  };

  const HandleRoute =(id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }}

  export const LinkoButton = ({title, link}) => {
    return (
    <span className='makebut'>
    <Paper className='papero' style={{borderRadius:0, height:'50px', width:'140px',transform:'translate(2px, 57.5px)'}}  elevation={5}> 
    </Paper>
        <DownloadButton onClick={()=> HandleRoute(link)} variant='contained' >
            {title}
        </DownloadButton>
    </span>
    )
  }
  
  export const FormBtn = ({title, link}) => {
    return (
    <span className='makebut'>
    <Paper className='papero' style={{borderRadius:0, height:'50px', width:'140px',transform:'translate(2px, 57.5px)'}}  elevation={5}> 
    </Paper>
        <DownloadButton onClick={()=> HandleRoute(link)} variant='contained' >
            {title}
        </DownloadButton>
    </span>
    )
  }

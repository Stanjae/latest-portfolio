import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import '../stylesio/Home.css'


/* .Mui-disabled */

const MakeSlider = styled(Slider)(({ theme }) => ({
    fontSize:'12px',
    lineHeight:'18px',
    letterSpacing:'3px',
    color:'rgba(255,255,255, 0.8)',
    /* '& .Mui-disabled':{
        color: theme.palette.primary.main,
        background: theme.palette.primary,
    } */
}))

const CusSlider = ({title, score}) => {
  return (
    <Box>
        <Typography fontSize={'14px'} variant='h6' color={'neutral.main'}>{title}</Typography>
        <MakeSlider size='small' aria-label="Html" valueLabelDisplay="auto" defaultValue={score} disabled/>
    </Box>
  )
}

export default CusSlider
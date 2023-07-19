import React from 'react'
import '../stylesio/ImgCard.css'
import { Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from '@mui/icons-material'

const MakeBtn = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.neutral.main,
    color:theme.palette.primary.main,
    fontWeight:600,
    '&:hover':{
        color:theme.palette.neutral.main,
    }

}))
const ImgCard = ({heighto, item, HandleClickProject}) => {
  return (
        <div style={{ height: `${heighto}px`, width:{md:'400px', xs:'100%'}}} className="container">
            <img src={item?.image} alt="Avatar" className="image"/>
            <div className="overlay">
                <Typography variant='body1' className='icon' color={'neutral.main'}>{item.title}</Typography>
                
                <MakeBtn onClick={()=>HandleClickProject(item.id)}  startIcon={<Link />} className="iconi" variant='contained'>View More </MakeBtn>

            </div>
    </div>
  )
}

export default ImgCard
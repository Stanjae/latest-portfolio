import { Box, Chip, Grid , Stack, Typography, Breadcrumbs, Link} from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

const imageStyles = {width:'100px', maxWidth:'100%', height:'100px', objectFit:'fill', }

const titleStyles = {color:'neutral.main',fontSize:'20px', fontWeight:'500', lineHeight:'24px'}

const NullLink = styled(Link)(({theme})=>({
    textDecoration:'none',
    color:theme.palette.neutral.main,
    fontSize:'11px',
    cursor:'default',
    opacity:'0.8'
}));

const OmarLink = styled(Link)(({ theme }) => ({
    fontSize:'12px',
    lineHeight:'18px',
    letterSpacing:'3px',
    color:'rgba(255,255,255, 0.8)',
    '&:hover':{
      opacity:'0.9'
    }
  }));

const CusCard = ({item}) => {
  return (
    <Box  sx={{bgcolor:'bgcolor.sidebg', p:3}} >
        <Grid container columns={12}>
            <Grid xs={12} sm={2} item>
                <img  style={imageStyles} src={item.image}/>
            </Grid>
            <Grid xs={12} sm={10} item>
                <Stack justifyContent="space-between" alignItems="center" spacing={2} 
                direction={'row'} >
                    <Box >
                        <Typography sx={titleStyles}>
                            {item.header}
                        </Typography>
                        
                        <Breadcrumbs sx={{color:'#fff'}} separator=">" aria-label="breadcrumb">
                            <NullLink to='#'>{item.workplace}</NullLink>
                            <NullLink to='#'>{item.duty}</NullLink>
                            <NullLink to='#'>{item.period}</NullLink>
                        </Breadcrumbs>
                        
                        
                    </Box>
                    <Chip color='primary' sx={{color:'neutral.main'}} label={item.type} />
                </Stack>
                <Typography gutterBottom component={'div'} color={'neutral.main'} 
                sx={{fontSize:'14px', wordWrap:'break-word', py:2, lineHeight:'25px', pr:{md:'150px', xs:2}}} variant='body1'>
                    {item.longtext}
                    </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CusCard
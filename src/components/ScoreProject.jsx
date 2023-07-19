import { Paper, Typography } from '@mui/material'
import React from 'react'


const paper = {display:'flex', backgroundColor:'inherit', color:'neutral.main',
 flexDirection:'row', width:'150px', justifyContent:'center'}

const ScoreProject = ({bigtext, text}) => {
  return (
    <Paper elevation={0} sx={paper}>
        <Typography fontWeight={900} fontSize={50}>{bigtext}</Typography>
        <div style={{paddingTop:'15px', paddingBottom:'5px', marginLeft:'0.7rem'}}>
            <Typography variant='body2' sx={{opacity:'0.7'}} fontWeight={50} lineHeight={'19.5px'} fontSize={'15px'}>
                {text}
                </Typography>
        </div>
    </Paper>
  )
}

export default ScoreProject
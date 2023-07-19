import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Star } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from '@emotion/styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'bgcolor.main',
  border: '2px solid #000',
  color:'neutral.main',
  boxShadow: 24,
  px: 1,
  py:1,

};
const MakeBtn = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.neutral.main,
    color:theme.palette.primary.main,
    fontWeight:600,
    '&:hover':{
        color:theme.palette.neutral.main,
    }

}))

export default function CusModal({modalstate, handleClose, handleOpen, content}) {
  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 */

  return (
    <div>
      <Modal
        keepMounted
        open={modalstate}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <div style={{padding:'5px'}}>
                <img style={{width:'100%', height:'100%', borderRadius:'5px'}} src={content?.image}/>
            </div>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {content?.title}
          </Typography>
          
          <Typography color={'primary.main'} id="keep-mounted-modal-title" variant="h6" component="h6">
            Technologies Used
          </Typography>

          <List dense>
              {content?.tech?.map((item, index)=>(
                    <ListItem key={index}>
                     <ListItemIcon>
                       <Star sx={{fontSize:'15px', color:'gold'}} />
                     </ListItemIcon>
                     <ListItemText
                       primary={item}
                     />
                    </ListItem>
              ))}
            </List>
            <MakeBtn href={content?.link} target='_blank'>Preview</MakeBtn>
        </Box>
      </Modal>
    </div>
  );
}
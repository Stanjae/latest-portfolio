import styled from '@emotion/styled'
import { Box, Button, Grid, TextField, Snackbar } from '@mui/material'
import React, { useState ,useRef} from 'react'
import '../stylesio/Home.css'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { red } from '@mui/material/colors'
import emailjs from '@emailjs/browser';
import MuiAlert from '@mui/material/Alert';





const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CusTextField = styled(TextField)(({theme})=>({
    color:theme.palette.neutral.main,
    border:'1px solid transparent',
    '& .MuiInputBase-input':{
        border:'1px solid rgba(255,255,255, 0.3)',
        borderRadius:'inherit',
        color:'rgba(255,255,255, 0.8)',
        fontWeight:'500'
    },
    '& .MuiFormLabel-root':{
        color:'rgba(255,255,255, 0.5)'
    },
    '& .MuiFormHelperText-root':{
        color:red[500]
    }
}));

const MakeBtn = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.neutral.main,
    color:theme.palette.primary.main,
    fontWeight:600,
    '&:hover':{
        color:theme.palette.neutral.main,
        background:theme.palette.primary.main,
    }

}))

const CusForm = () => {
    const cusValidation = yup.object().shape({
        name:yup.string().required('Name is required'),
        email:yup.string().email().required('Email is required'),
        subject:yup.string().required('Subject is required'),
        message:yup.string().required('Message is required')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(cusValidation),
    });

    /* =======================logic for handling the snackbar =============== */
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState({content:'', color:'success'});

    const handleClick = () => setOpen(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
    };

/* lol */
    const cusUseForm = useRef();

    /*===================== logic for validation==================================== */
    const CusHandleSubmit = (data)=>{
        console.log('formadata:', data);
        emailjs.sendForm('service_u7docpm', 'template_424plyo', cusUseForm.current, 'zX9MDBqG7FkEQpiis')
        .then((result) => {
          handleClick();
          setSeverity({content:'Message was sent successfully', color:'success'})
        }, (error) => {
          console.log(error.text);
          setSeverity({content:'Mesage could not be sent', color:'error'})
        });
    }

  return (
    <Box ref={cusUseForm} onSubmit={handleSubmit(CusHandleSubmit)} component={'form'}>
        <Grid spacing={{xs:1, sm:2, md:3}} py={2} container columns={12}>
            <Grid item xs={12} md={6}>            
                <CusTextField  id="name" {...register("name")} fullWidth name='name' size='small' 
                label="Name" helperText={errors.name?.message } error={errors?.name?.message ? true : false }  />
            </Grid>
            <Grid item xs={12} md={6}>            
                <CusTextField id="email" {...register("email")} type='email' fullWidth name='email'
                 size='small' label="Email"  helperText={errors.email?.message } error={errors?.email?.message ? true : false }/>
            </Grid>
            <Grid item xs={12} >            
                <CusTextField id="subject" {...register("subject")} type='text' fullWidth name='subject'
                 size='small' label="Subject"  helperText={errors.subject?.message } error={errors?.subject?.message ? true : false }/>
            </Grid>
            <Grid item xs={12} >            
               <CusTextField className='custextfield' {...register("message")}  rows={6} multiline id="message" type='text'
                fullWidth name='message' size='small' label="Message"  helperText={errors.message?.message } error={errors?.message?.message ? true : false }/> 
            </Grid>
        </Grid>
       <MakeBtn size='large' type='submit'>Send Message</MakeBtn>

       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity.color} sx={{ width: '100%' }}>
          {severity.content}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default CusForm
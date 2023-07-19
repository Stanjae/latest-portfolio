import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import Root from './templatei/Root';
import ErrorPage from './components/ErrorPage';
import Home from './Pages/Home';
/* import ThemeProvider from '@mui/material';
import createTheme from '@mui/material'; */
import '@fontsource/rubik'
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
   primary: {
      main: '#2FBF71',
    },
    bgcolor:{
      main:'#10101a',
      sidebg:'#0c0c14'
    },
    neutral:{
      main:'#fff'
    }
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
    },
  },
  typography: {
    fontFamily:'Rubik',
    subtitle1: {
      fontSize: '18px',
      lineHeight:'30.6px',
      letterSpacing:'normal'
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'regular',
    },
    h1:{
      fontWeight:'700',
      lineHeight:'70px',
      letterSpacing:'normal',
      fontSize:'65px',
      '@media (max-width:1200px)': {
        fontSize: '50px',
      },
    },
    h5:{
      fontSize:'25px',
      lineHeight:'30px',
      letterSpacing:'normal'
    }
  },
}); 




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element:<Home/>},
    ]
  },
]);

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
    
    </>
     

  )
}

export default App

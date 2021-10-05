import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#718486',
    },
    background: {
      default: '#22242A',
      paper: '#1E2325',
    },
    secondary: {
      main: '#11cb5f',
    },
  },

  button: {
    primary: {
      main: ''
    },

  },

  typography: {
    "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});


// '#212628'
// '#E4E5E6'
// '#1E2325'
// '#93BDC1'
// '#444F51'
// '#718486'
export default theme;

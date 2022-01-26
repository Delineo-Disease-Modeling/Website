import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    background: {
      paper: 'white',
      default: '#222629',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontSize: '6rem',
      fontWeight: '500',
      lineHeight: '1.167',
      paddingBottom: '10px',
      textAlign: 'left',
      color: 'white'
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: '400',
      lineHeight: '1.25',
      paddingBottom: '10px',
      paddingTop: '20px',
      textAlign: 'left',
      color: 'white'
    },
    h7: {
      fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
      color: "white",
      margin: '0 auto',
      borderBottom: "3px solid #66FCF1",
      width: "fit-content",
      fontSize: '2.5rem',
      lineHeight: '1.33',
      padding: "50px 30px 0 30px"
    },
    body2: {
      color: "white",
      marginRight: 100,
      marginLeft: 100,
      marginTop: 40,
      width: "fit-content",
      fontSize: '1.25rem',
      borderRadius: "25px",
      border: "2px solid #2f3538",
      padding: "20px 20px 20px 20px",
      backgroundColor: "#2f3538",
      maxWidth: "1000px",
    }
  },
});

theme = responsiveFontSizes(theme);


// '#212628'
// '#E4E5E6'
// '#1E2325'
// '#93BDC1'
// '#444F51'
// '#718486'
export default theme;

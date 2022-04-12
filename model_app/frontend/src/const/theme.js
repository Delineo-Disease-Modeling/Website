import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
  palette: {
    background: {
      default: '#222629',
    },
  },
  components: {
    // Name of the component
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#66FCF1',
          borderBottom: '0px solid rgba(0, 0, 0, .125)',
          marginBottom: 0,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          fontSize: '20px',
          color: 'black',
          border: '0px solid rgba(0, 0, 0, .125)',
          boxShadow: '0px 5px 5px black',
          borderRadius: '20px',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderColor: "#66FCF1",
          backgroundColor: "#222629",
          border: "2px solid",
          color: "#66FCF1",
          fontWeight: "bold",
          width: "200px",
          height: "76px",
          textAlign: "center",

          "&.Mui-selected, &:hover": {
            backgroundColor: "#66FCF1",
            color: "#222629",
            borderColor: "#66FCF1",
          },

        },
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor: "#222629",
            height: "4px"
          },
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '230px',
          height: '230px',
          marginTop: '20px',
          boxShadow: '0 0 14px 7px black',
        }
      }
    }
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
    body1: {
      fontSize: '1.1rem',
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
    },
    description: {
      fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
      fontSize: '0.9rem',
      fontStyle: 'italic',
      lineHeight: '1'
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

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import articles from '../const/devblogposts';
import DevelopmentBlogContainer from './DevelopmentBlogContainer.js'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  color: theme.palette.common.white,

  root: {
    backgroundColor: '#383838',
    '&:nth-of-type(odd)': {
      color: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: '#505050',
      cursor: 'pointer'
    },
    "&:onCellClick": {
      backgroundColor: "grey !important"
    }

  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#222629'
  },
  table: {
    fontSize: 14,
    color: theme.palette.common.white,
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/blog.jpg')`,
    height: "520px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },

  subtitle: {
    fontSize: 18,
    marginLeft: '0 0px',
    marginTop: '0 0px',
    padding: '0 0px',
  },

}));

function DevelopmentBlog(props) {
  const classes = useStyles();

  const handleClick = (id, title) => {
    return (event) => {
      window.location.assign('/developmentblog/Post' + id);
    }
  }

  return (
    <div className="App" style={{ backgroundColor: '#222629' }}>
      <AppBar className={classes.appBar} style={{ background: '#222629', boxShadow: "none" }} position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} >

        <Grid item xs>
          <Box className={classes.hero}>
            <Box><Typography>Articles & Announcements</Typography><Typography variant='h1'>Delineo Blog</Typography></Box>

          </Box>
        </Grid>
        <Grid item xs={3}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left"><span style={{ fontWeight: 'bold', fontSize: "18px" }}>Latest Posts</span></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((row) => {
                  if (row.id <= 3)
                    return <StyledTableRow key={row}>
                      <StyledTableCell style={{ paddingTop: "20px", paddingBottom: "20px" }} onClick={handleClick(row.id, row.title)} align="left" component="th" scope="row">
                        <span style={{ fontWeight: 'bold', color: 'grey' }}>{row.date} </span><br /><Typography className={classes.subtitle2}>{row.title}</Typography>
                        <Typography className={classes.subtitle}>{row.subtext}</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <DevelopmentBlogContainer/>
      
    </div>
  );
}

export default DevelopmentBlog;

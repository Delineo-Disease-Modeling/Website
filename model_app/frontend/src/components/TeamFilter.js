import React, { Component }  from 'react';



import leaders from '../const/leader.js';
import members from '../const/member.js';
import TeamGridList from '../components/TeamGridList.js'
import SupGridList from '../components/SupGridList.js'
import LeadGridList from '../components/LeaderGridList.js'
import { makeStyles } from '@material-ui/core/styles';
import FunctionClick from '../components/FunctionClick'
import Grid from '@material-ui/core/Grid';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#C4C4C4',

    textAlign: 'center',

  },
CardGreenBackground1: {
  marginTop: '0%',
  backgroundColor:'#4A4E51',
},
h2: {
  color: 'white',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: 0,
  borderBottom: '3px solid black',
  width: 'fit-content',
  paddingBottom: 0,
  paddingTop: '20px',


}
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: 'black',
    fontSize: '14px',
    backgroundColor: '#66FCF1',
    '&:hover': {
      backgroundColor: '#66FCF1',
    },
    margin: '3px'
  },
}))(Button);

class TeamFilter extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  constructor(props) {
    super(props);
    this.state = {
      all: true,
      fs: false,
      sim: false,
      ml: false,
      info: false
    }
  this.changeDiv= this.changeDiv.bind(this);
}
  changeDiv() {
    this.setState({
      all: false,
      fs: false,
      sim: false,
      ml: false,
      info: false
  })
}



  render() {

    const { classes } = this.props

    const { all } = this.state
    const { fs } = this.state
    const { sim } = this.state
    const { ml } = this.state
    const { info } = this.state

    const { showing} = this.state

    return (
      <div  >
    <br/>
          <ColorButton mt={2} variant="contained" color="#66FCF1" onClick={() => this.setState({ all: !all, fs: false, sim: false, ml: false, info: false })}>all</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => this.setState({ all: false, fs: !fs, sim: false, ml: false, info: false})}>full stack</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => this.setState({ all: false, fs: false, sim: !sim, ml: false, info: false })}>simulation</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1y"  onClick={() => this.setState({ all: false, fs: false, sim: false, ml: !ml, info: false })}>machine learning</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => this.setState({ all: false, fs: false, sim: false, ml: false, info: !info })}>infop</ColorButton>

          { all
              ?  <div>
                    <br></br>
                    <div>
                      <h2 className = {classes.h2} align='center'>Research Supervisor</h2>
                      <SupGridList/>
                      <h2 className = {classes.h2} align="center">Team Leaders</h2>
                      <LeadGridList></LeadGridList>
                      <h2 className = {classes.h2} align="center">Team Members</h2>
                      <TeamGridList></TeamGridList>
                    </div>
                </div>

              : null
          }
          { fs
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Full Stack Team Description </h3>
                  </div>
                  <div>
                    <h2 className = {classes.h2} align="left">Team Members</h2>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { sim
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Simulation Team Description </h3>
                  </div>
                  <div >
                    <h2 className = {classes.h2} align="left">Team Members</h2>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { ml
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Machine Learning Team Description </h3>
                  </div>
                  <div >
                    <h2 className = {classes.h2} align="left">Team Members</h2>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { info
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Information Team Descripiton </h3>
                  </div>
                  <div>
                    <h2 className = {classes.h2} align="left">Team Members</h2>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }

      </div>
    );
  }
}
export default withStyles(styles)(TeamFilter);

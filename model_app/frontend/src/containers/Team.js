import React, { Component } from "react";
import TeamFilter from "../components/TeamFilterNew";
import Typography from "@mui/material/Typography";

class Team extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#222629', paddingTop: '30px', paddingBottom: '150px'}}>
        <Typography variant="h2" align="center" style={{paddingBottom: '50px'}}>
          Meet the Team
        </Typography>

        <TeamFilter></TeamFilter>
      </div>
    );
  }
}

export default Team;

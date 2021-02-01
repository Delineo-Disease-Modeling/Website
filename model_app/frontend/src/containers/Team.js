import React from 'react';
import leaders from '../const/leader.js';
import members from '../const/member.js';
import TeamGridList from '../components/TeamGridList.js'
import SupGridList from '../components/SupGridList.js'
import LeadGridList from '../components/LeaderGridList.js'

import './Team.css';

function Team(props){
  let supervisorList = [];
  let list = [];
  let memberlist = [];

  members.forEach(member => {
    memberlist.push(member);
  })

  leaders.forEach(leader => {
    if (leader.designation === 'Research Supervisor') {
      supervisorList.push(leader);
    }
    else {
      list.push(leader);
    }
  });

  return(
    <div className = 'CardBackground'>

      <div className="MainHeader">
        <h2>Meet The Team</h2>
      </div>

      <div className = 'CardGreenBackground1'>
        <h3 align="left">Research Supervisor</h3>
        <SupGridList></SupGridList>
      </div>

      <div className = 'CardGreenBackground1'>
        <h3 align="left">Team Leaders</h3>
        <LeadGridList></LeadGridList>
      </div>

      <div className = 'CardGreenBackground1' >
        <h3 align="left">Team Members</h3>
        <TeamGridList></TeamGridList>
      </div>

   </div>


 );
}


// function LeaderList(props){

//   const leaderCards = props.list.map(leader => {
//     return(
//       <TeamLeaderCardLeft key={leader.name} name={leader.name} description = {leader.major} />
//     );
//     }
//   );
//   return(<div>{leaderCards}</div>);
// }

// function MemberList(props){

//   const memberCards = props.list.map(member => {
//     return(
//       <MemberCardLeft key={member.name} name={member.name} description = {member.major} />
//     );
//     }
//   );
//   return(<div>{memberCards}</div>);
// }

// function SupervisorList(props) {
//   const supervisorCards = props.list.map(supervisor =>
//     <SupervisorCard key={supervisor.name} name={supervisor.name} description={supervisor.profession} image={supervisor.image}/>
//   );
//   return <div>{supervisorCards}</div>;
// }

// function TeamLeaderCardLeft(props){
//   return(
//     <div align= "left" className="LeaderCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText"> {props.description} </h5>
//         </div>
//     </div>

//   );

// }

// function MemberCardLeft(props){
//   return(
//     <div align= "left" className="LeaderCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText"> {props.description} </h5>
//         </div>
//     </div>

//   );

// }

// function SupervisorCard(props){
//   return(
//     <div align= "left" className="SuperCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText">{props.description}</h5>
//         </div>
//     </div>
//   );
// }



export default Team;

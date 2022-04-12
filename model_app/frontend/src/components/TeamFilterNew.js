import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';

//These imports are for the default team page view
import TeamGridList from "../components/TeamGridList.js";
import SupGridList from "../components/SupGridList.js";
import LeadGridList from "../components/LeaderGridList.js";
import PastTeamGridList from "../components/PastTeamGridList.js";

//These imports are for when someone actually wants to filter
import FullStackGridList from "../components/FullStackGridList.js";
import SimGridList from "../components/SimGridList.js";
import MLGridList from "../components/MLGridList.js";
import InfoTeamGridList from "../components/InfoTeamGridList.js";

export default function TeamFilter() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body' }} >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TabList onChange={handleChange} aria-label="team-filter">
                        <Tab label="all" value="1" />
                        <Tab label="fullstack" value="2" />
                        <Tab label="simulation" value="3" />
                        <Tab label="machine learning" value="4" />
                        <Tab label="information support" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div >
                        <Typography variant="h7" component='h2' align="center" style={{ paddingTop: '20px' }}>
                            Principal Investigator
                        </Typography>
                        <br />
                        <SupGridList ></SupGridList >
                        <Typography variant="h7" component='h2' align="center">
                            Team Leaders
                        </Typography>
                        <br />
                        <LeadGridList></LeadGridList>
                        <Typography variant="h7" component='h2' align="center">
                            Team Members
                        </Typography>
                        <br />
                        <TeamGridList></TeamGridList>
                        <Typography variant="h7" component='h2' align="center">
                            Past Members
                        </Typography>
                        <br />
                        <PastTeamGridList></PastTeamGridList>
                    </div>
                </TabPanel>
                <TabPanel value="2" align='center'>
                    <Typography variant='body2' align="center">
                        Members of the fullstack team work throughout the stack. Our web
                        application is built using the MERN stack (MongoDB, Express,
                        ReactJS, NodeJS) and Unity Webgl. Members of this team also
                        manage and access our geolocation data.
                    </Typography>
                    <div>
                        <Typography variant="h7" component='h2' align="left">
                            Team Members
                        </Typography>
                        <br />
                        <FullStackGridList></FullStackGridList>
                    </div>
                </TabPanel>
                <TabPanel value="3" align='center'>
                    <Typography variant='body2' align="center">
                        The simulation team is responsible for the implementation of the
                        simulation that lies at the heart of the Delineo project. Team
                        members focus on programming the various modules, algorithms,
                        and statistical drivers that are utilized in our models.
                    </Typography>
                    <div>
                        <Typography variant="h7" component='h2' align="left">
                            Team Members
                        </Typography>
                        <br />
                        <SimGridList></SimGridList>
                    </div>
                </TabPanel>
                <TabPanel value="4" align='center'>
                    <Typography variant='body2'>
                        The machine learning group is tackling the challenge of learning
                        from the massive amounts of geolocation data the Delineo project
                        has access to. One of the main focuses is on developing machine
                        learning models that are capable of discerning and generating
                        population movement patterns within communities ranging from
                        rural towns to urban cities.
                    </Typography>
                    <div>
                        <Typography variant="h7" component='h2' align="left">
                            Team Members
                        </Typography>
                        <br />
                        <MLGridList></MLGridList>
                    </div>
                </TabPanel>
                <TabPanel value="5" align='center'>
                    <Typography variant="body2" align='center'>
                        The information support team is responsible for gathering,
                        summarizing, and disseminating research articles/papers that
                        prove helpful for informing the development of Delineo's model.
                    </Typography>
                    <div>
                        <Typography variant="h7" component='h2' align="left">
                            Team Members
                        </Typography>
                        <br />
                        <InfoTeamGridList></InfoTeamGridList>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
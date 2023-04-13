import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const GraphDescriptionTabs = ({ graphData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height:"100%", bgcolor: "rgba(0, 0, 0, 0)", borderRadius:"10px", }}>
      <Tabs 
         value={value} 
         onChange={handleChange} 
         centered 
         TabIndicatorProps={{title: graphData.title,
                             sx: {height: 0}}}
         sx={{"& button": {color: "white", borderRadius: 50}, 
              "& button.Mui-selected": {backgroundColor: "white"}}}>
        <Tab label="Description" />
        <Tab label="Terms" />
      </Tabs>
      <Box sx={{ p: 2, color: "white", fontSize: 26 }}>
         {/* Add more tabs here if needed */}
        {value === 0 && <div style={{ whiteSpace: "pre-line" }}>{graphData.description.replace(/\\n/g, "\n")}</div>}
        {value === 1 && <div style={{ whiteSpace: "pre-line", textAlign: "left"}}>{graphData.terms.replace(/\\n/g, "\n")}</div>
}
      </Box>
    </Box>
  );
};

GraphDescriptionTabs.propTypes = {
  graphData: PropTypes.shape({
    description: PropTypes.string,
    terms: PropTypes.string,
  }).isRequired,
};

export default GraphDescriptionTabs;

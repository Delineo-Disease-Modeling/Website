/**
 * ToolTip.js
 * Info icon that displays descriptions about user input when hovered.
 * Used in ConfigurationsPanel
 */

import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import PropTypes from "prop-types";

function ToolTip(props) {
    const { description } = props;
  return (
    <Tooltip title={description}>
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>

  );
}

ToolTip.propTypes = {
    description: PropTypes.string.isRequired,
  };
  
export default ToolTip;



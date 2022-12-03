/**
 * InputSlider.js
 * The slider component in Config Panel. Includes label, slider, text field, and ToolTip.
 * Used in ConfigurationsPanel
 */

import * as React from 'react';
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ToolTip from "./ToolTip";

const Input = styled(MuiInput)`
  width: 42px;
`;

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "rgba(49,53,56,255)",
  "& .MuiSlider-thumb": {
    backgroundColor: "rgb(102, 252, 241)",
    border: "2px solid currentColor",
  }
}));

export default function InputSlider(props) {
  const { label } = props;
  const [value, setValue] = React.useState(props.percentConfig);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    // Commented out write to percentConfig 
    // props.percentConfig = value;
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
    setValue(newValue);
    // props.percentConfig = value;
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
      // props.percentConfig = 0;
    } else if (value > 100) {
      setValue(100);
      // props.percentConfig = 100;
    }
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <Typography id="input-slider" style={{ textAlign: 'left', color: 'black' }} gutterBottom>
              {label}
            </Typography>
          </Grid>

          <Grid item xs>
            <StyledSlider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
          <Grid item>
            %
          </Grid>
          <Grid item xs={1} style={{padding:0}}>
            <ToolTip description={label} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

InputSlider.propTypes = {
  label: PropTypes.string.isRequired,
  percentConfig: PropTypes.number
}
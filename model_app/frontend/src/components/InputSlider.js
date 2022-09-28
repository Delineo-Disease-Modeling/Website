import * as React from 'react';
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

//Helper function to convert user inputs to be restricted between 0 and 100
//Returns -1 if input is not a number
function sanitizePercentInput(input) {
    if (isNaN(input) || typeof input !== "number") {
      //TODO: Test this logic
      return -1;
    }
    if (input > 100) {
      return 100;
    } else if (input < 0) {
      return 0;
    } else {
      return input;
    }
  }

const Input = styled(MuiInput)`
  width: 42px;
`;

const StyledSlider = styled(Slider) (({ theme }) => ({
    color: "rgba(49,53,56,255)",
    "& .MuiSlider-thumb": {
      backgroundColor: "rgb(102, 252, 241)",
      border: "2px solid currentColor",
    }
}));

export default function InputSlider(props) {
  const { label, percentConfig, icon } = props;
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    percentConfig = sanitizePercentInput(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
    setValue(newValue);
    percentConfig = sanitizePercentInput(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
    <Grid container direction="row" alignItems="center">
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {icon}
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
      </Grid>
    </Grid>
    </div>
  );
}

InputSlider.propTypes = {
    label: PropTypes.string.isRequired,
    percentConfig: PropTypes.number
}
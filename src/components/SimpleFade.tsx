import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function SimpleFade({childrenn}: {childrenn: React.ReactElement}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    console.log("hello1")
    setChecked((prev) => !prev);
    console.log("hello2")
  };

  return (
    <div>
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      {/* <Box sx={{ display: 'flex' }}> */}
        <Fade in={checked}>
            <div>
            {childrenn}
            </div>
        </Fade>
      {/* </Box> */}
    </Box>
    </div>
  );
}

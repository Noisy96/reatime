import React, { useState } from 'react';
import { Container, TextField, Box, Button, Slider, Typography } from '@material-ui/core';

const MainContainer = ({ openFunction }) => {

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const resetButtonFunction = () => {
    setText('');
  };

  const marks = [
    {
      value: 150,
      label: "150wpm",
    },
    {
      value: 200,
      label: "200wpm",
    },
    {
      value: 250,
      label: "250wpm",
    },
  ];

  function valueText(value) {
    return `${value}wpm`;
  };

  return (
    <Container maxWidth="sm">
        <Box mt={3}>
          <TextField id="text" value={text} onChange={handleChange} label="Text to analyse" variant="outlined" multiline fullWidth rows="15" size="small"/>
        </Box>
        <Box style={{float: "left"}}>
          <Typography id="discrete-slider-always" color={"secondary"}>
            Reading speed
          </Typography>
          <Slider
            defaultValue={200}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider-always"
            step={50}
            min={150}
            max={250}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={0.5}>
          <Box>
            <Button onClick={resetButtonFunction} variant="outlined" color="secondary">reset</Button>
          </Box>
          <Box ml={0.5}>
            <Button onClick={() => {openFunction(EstimateReadingTime(text))}} variant="outlined" color="primary">estimate</Button>
          </Box>
        </Box>
      </Container>
  );
};

const EstimateReadingTime = (text) => {

  if(text==='' || !text.match(/[\w\d]/)) {
    return {minutes: 0, seconds: 0, wordsCount: 0};
  }
  else {
    const wordsPerMinutes = 200;
    const wordsCount = text.split(/[ \n]+[^ \n]/g).length;
    const rate = wordsCount / wordsPerMinutes;
  
    let minutes = Math.floor(rate);
    let seconds = (rate - minutes).toPrecision(2) * 100;
    if(seconds >= 60) {
      seconds = seconds % 60;
      minutes += 1;
    }
    seconds = Math.ceil(seconds);
  
    return {
      minutes: minutes,
      seconds: seconds,
      wordsCount: wordsCount
    };
  }
};

export default MainContainer;
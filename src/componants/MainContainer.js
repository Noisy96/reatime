import React, { useState } from 'react';
import { Container, TextField, Box, Button } from '@material-ui/core';

const MainContainer = ({ openFunction }) => {

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const resetButtonFunction = () => {
    setText('');
  };

  return (
    <Container maxWidth="sm">
        <Box mt={3}>
          <TextField id="text" value={text} onChange={handleChange} label="Text to analyse" variant="outlined" multiline fullWidth rows="15" size="small"/>
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

  if(text==='') {
    return {minutes: 0, seconds: 0, wordsCount: 0};
  }
  else {
    const wordsPerMinutes = 200;
    const wordsCount = text.split(' ').length;
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
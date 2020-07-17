import React from 'react';
import { Container, TextField, Box, Button } from '@material-ui/core';
import CustomAppBar from './componants/CustomAppBar';

function App() {
  return (
    <div>
      <CustomAppBar />
      <Container maxWidth="sm">
        <Box mt={3}>
          <TextField id="text" label="Text to analyse" variant="outlined" multiline fullWidth rows="15" size="small"/>
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Box>
            <Button variant="outlined">reset</Button>
          </Box>
          <Box ml={0.2}>
            <Button variant="outlined" color="primary">estimate</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;

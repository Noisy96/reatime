import React from 'react';
import { Container, TextField, Box, Button } from '@material-ui/core';

const MainContainer = () => {
    return (
        <Container maxWidth="sm">
          <Box mt={3}>
            <TextField id="text" label="Text to analyse" variant="outlined" multiline fullWidth rows="15" size="small"/>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt={1}>
            <Box>
              <Button variant="outlined" color="secondary">reset</Button>
            </Box>
            <Box ml={0.2}>
              <Button variant="outlined" color="primary">estimate</Button>
            </Box>
          </Box>
        </Container>
    );
}

export default MainContainer;
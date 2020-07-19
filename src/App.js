import React from 'react';

// Material Design components
import { ThemeProvider } from '@material-ui/core/styles';

// Custom Components
import CustomAppBar from './componants/CustomAppBar';
import MainContainer from './componants/MainContainer';
import StickyFooter from './componants/StickyFooter';
import ResultDialog from './componants/ResultDialog';
import SuccessSnackBar from './componants/SuccessSnackBar';

// Custom theme
import MainTheme from './themes/MainTheme';

function App() {

  return (
    <ThemeProvider theme={MainTheme}>
      {/* The AppBar */}
      <CustomAppBar />

      {/* The main container with text input and buttons */}
      <MainContainer />

      {/* Footer created from scratch */}
      <StickyFooter />

      {/* A dialog for displaying the estimated reading time calculated */}
      <ResultDialog open={false} />

      {/* Feedback snackbar for announcing the success of the copying */}
      <SuccessSnackBar open={false} />
      
    </ThemeProvider>
  );
}

export default App;

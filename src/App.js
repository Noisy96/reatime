import React, { useState } from 'react';

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

  const [resultDialog, setResultDialog] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [result, setResult] = useState({minutes: 0, seconds: 0, wordsCount: 0});
  
  const openResultDialog = (result) => {
    setResult(result);
    setResultDialog(true);
  };

  const closeDialog = (copy) => {
    setResultDialog(false);
    if(copy) {
      setSuccessSnackbar(true);
    }
  };

  const closeSnackbar = () => {
    setSuccessSnackbar(false);
  };

  return (
    <ThemeProvider theme={MainTheme}>
      {/* The AppBar */}
      <CustomAppBar />

      {/* The main container with text input and buttons */}
      <MainContainer openFunction={openResultDialog} />

      {/* Footer created from scratch */}
      <StickyFooter />

      {/* A dialog for displaying the estimated reading time calculated */}
      <ResultDialog open={resultDialog} closeFunction={closeDialog} result={result}/>

      {/* Feedback snackbar for announcing the success of the copying */}
      <SuccessSnackBar open={successSnackbar} openFunction={closeDialog} closeFunction={closeSnackbar} />
      
    </ThemeProvider>
  );
}

export default App;

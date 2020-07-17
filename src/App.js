import React from 'react';
import CustomAppBar from './componants/CustomAppBar';
import MainContainer from './componants/MainContainer';
import StickyFooter from './componants/StickyFooter';

function App() {

  return (
    <div>
      {/* The AppBar */}
      <CustomAppBar />
      {/* The main container with text input and buttons */}
      <MainContainer />
      {/* Footer created from scratch */}
      <StickyFooter />
    </div>
  );
}

export default App;

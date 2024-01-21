import React from 'react';
import axios from 'axios';
import Feelings from '../Page/Page';
import { Container } from '@mui/material';
import './App.css';

function App() {

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Container>
        <Feelings />
      </Container>
    </>

  );
}

export default App;

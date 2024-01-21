import React from 'react';
import axios from 'axios';
import Page from '../Page/Page';
import { Container } from '@mui/material';
import { HashRouter as HR, Route } from 'react-router-dom/cjs/react-router-dom.min';
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
        <HR>
          <Route path='/' exact>
            <Page
              question={'How are you feeling today?'}
              inputType={'number'}
              inputLabel={'Feeling?'}
              path={'/understanding'}
            />
          </Route>
          <Route path='/understanding'>
            <Page
              question={'How well are you understanding the content?'}
              inputType={'number'}
              inputLabel={'Understanding?'}
              path={'/support'}
            />
          </Route>
          <Route path='/support'>
            <Page
              question={'How well are you being supported?'}
              inputType={'number'}
              inputLabel={'Support?'}
              path={'/comments'}
            />
          </Route>
          <Route path='/comments'>
            <Page
              question={'Any comments you want to leave?'}
              inputType={'text'}
              inputLabel={'Comments?'}
              path={'/submit'}
            />
          </Route>
        </HR>

      </Container>
    </>

  );
}

export default App;

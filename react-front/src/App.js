import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MainRouter from './MainRouter';

import './app.styles.scss';

function App() {
  return (
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  );
}

export default connect()(App);

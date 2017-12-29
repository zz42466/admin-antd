import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ZzRouter from './router/index';

import './App.css';

class App extends Component {
  render() {
    return <Router>
        <ZzRouter />
    </Router>
  }
}

export default App;
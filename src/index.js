import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItineraryBuilder from './components/ItineraryBuilder'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
    <ItineraryBuilder />
  </Router>,
  document.getElementById('root')
);


import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { store } from './store';
import Navbar from './Components/Navbar/Navbar';
import NavbarRouter from './router';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="AppContainer">
          <Navbar />
          <NavbarRouter />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

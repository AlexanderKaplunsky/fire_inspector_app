import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div className="AppContainer">
        <Navbar />
      </div>
    </Provider>
  );
};

export default App;

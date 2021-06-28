/* 
We'll need a Navbar in here to connect to the main Roboflow page, and other pages.
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS Styling
import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;

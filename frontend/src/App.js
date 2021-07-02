/* 
We'll need a Navbar in here to connect to the main Roboflow page, and other pages.
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS Styling
import './App.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Components
import Navbar from './components/Navbar/Navbar';
import All from './pages/All/All';
import Announcements from './pages/Announcements/Announcements';
import Ask from './pages/Ask/Ask';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/all' component={All} />
              <Route exact path='/announcements' component={Announcements} />
              <Route exact path='/ask' component={Ask} />
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;

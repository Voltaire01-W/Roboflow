import './Navbar.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
            <Fragment>
                <Button color="#FFF" component={Link} to='/'>
                    Home
                </Button>
                <Button color="#FFF" component={Link} to='/login'>
                    Login
                </Button>
                <Button color="#FFF" component={Link} to='/signup'>
                    Signup
                </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;
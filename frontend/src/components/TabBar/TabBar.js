import './TabBar.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function TabBar() {
    return (
      <AppBar>
        <Toolbar className="tab-container">
            <Fragment>
                <Button color="#FFF" component={Link} to='/all'>
                    all
                </Button>
                <Button color="#FFF" component={Link} to='/announcements'>
                    Announcements
                </Button>
                <Button color="#FFF" component={Link} to='/ask'>
                    Ask
                </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default TabBar;
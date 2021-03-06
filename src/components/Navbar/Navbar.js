import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.leftDiv}>

          <Button component={Link} to="/" className={classes.heading}>Home</Button> 

              {(user?.result)  && (
                <div>
                    {/* <Button component={Link} to="/user/profile" className={classes.heading}> Profile</Button>  */}
                    <Button component={Link} to="/chat" className={classes.heading}>Messenger</Button> 
                </div>
              )}
        </div>

        <div className={classes.rightDiv}>
            <Toolbar>
                {user?.result ? 
                (
                  <div className={classes.profile}>
                    <Avatar className={classes.avatar} alt={user?.result.firstname} src={user?.result.imageUrl}>{user?.result.firstname.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.firstname}</Typography>
                    <Button variant="contained" style={{ fontFamily: 'Segoe UI'}} color="secondary" onClick={logout}>Logout</Button>
                  </div>
                ) : 
                (
                  <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                
                )}
          </Toolbar>
        </div>
    </AppBar>         
    </>
  );
};

export default Navbar;

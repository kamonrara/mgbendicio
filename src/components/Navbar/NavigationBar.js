import React, { useEffect, useState } from 'react';
import { Container, Toolbar, Typography, Box, AppBar, IconButton, Drawer, Button, Avatar, Divider } from '@material-ui/core'; 
import MenuIcon   from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const useStyles = makeStyles((theme) => ({

  siteTitle: {
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  toolbar: {
    backgroundColor: '#6db4e3',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(10)
    },
    color: 'white'
  },
  menuIcon: {
    color: 'white',
    fontSize: '33px'
  },
  heading: {
      display: 'flex',
      fontFamily: 'Segoe UI',
      marginLeft: '33px',
  },
  profile: {
    display: 'flex',
  },
  userName: {
    display: 'flex',
    fontFamily: 'Segoe UI',
    alignItems: 'center',
    padding : '11px 11px 11px 11px'
  },
  avatar: {
    padding : '11px 11px 11px 11px',
    color: 'gray',
    backgroundColor: 'white',
  },
  leftDiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '33px'
  },
  rightDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '3em',
  },
  mobileBox: {
    display: 'flex'
  },
  mobileHeading: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Segoe UI',
  }
  
}));

export default function NavigationBar() {
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
  
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false
  });
  
  const { toggleMenu, toggleMenuOpen } = state;
  
  useEffect(() => {
    
    const setResponsiveness = () => {
      
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false}));
      
    };
    
    setResponsiveness();
    
    window.addEventListener("resize", () => setResponsiveness());
    
  }, []);

  //mobile
  const displayToggleMenu = () => {
    
    const handleToggleMenuOpen = ()  =>  setState((prevState) => ({ ...prevState,  toggleMenuOpen: true })); 
    const handleToggleMenuClose = () => setState((prevState) => ({ ...prevState, toggleMenuOpen: false }));
    
    return (
      <Toolbar style={{ backgroundColor: '#6db4e3'}}>
        <IconButton {...{ onClick: handleToggleMenuOpen }}>
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
      
        <Drawer {...{
            anchor: 'left',
            open: toggleMenuOpen,
            onClose: handleToggleMenuClose
          }}
        >

          <div>{ getToggleMenuOptions() }</div>
        </Drawer>
      
      </Toolbar>
    );
  }

  const getToggleMenuOptions = () => {
    return ( 
      <Box className={classes.mobileBox}>
            {user?.result ? (
               <div>
                  <Button component={Link} to="/" className={classes.mobileHeading}>Home</Button> 
                  <Button component={Link} to="/chat" className={classes.mobileHeading}>Messenger</Button> 
                   <Divider style={{ marginBottom: '11px'}}/>
                  <Typography className={classes.mobileHeading} variant="h6">{user?.result.firstname}</Typography>
                  <Button variant="contained" style={{ display: 'flex', fontFamily: 'Segoe UI'}} color="secondary" onClick={logout}>Logout</Button>
              </div>
            ):(
                <div>
                   <Button component={Link} to="/" className={classes.mobileHeading}>Home</Button> 
                   <Button component={Link} to="/auth" variant="contained" color="primary" style={{ fontFamily: 'Segoe UI'}}>Sign In</Button>
                </div>
            )}
      </Box>
    );
  }

  //desktop
  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolbar}>
           <Box className={classes.menuBox}>
            <AcUnitIcon style={{ fontSize: '33px'}}/>
            <Button component={Link} to="/" className={classes.heading}>Home</Button> 
            {(user?.result)  && (           
            <Button component={Link} to="/chat" className={classes.heading}>Messenger</Button> 
            )}
           </Box>

          <Box className={classes.menuBox}>
            <div className={classes.rightDiv}>
                {user?.result ? 
                 (
                  <div className={classes.profile}>
                    <Avatar className={classes.avatar} alt={user?.result.firstname} src={user?.result.imageUrl}>{user?.result.firstname.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.firstname}</Typography>
                    <Button variant="contained" style={{ fontFamily: 'Segoe UI'}} color="secondary" onClick={logout}>Logout</Button>
                  </div>
                    // <div>
                    //     <Button component={Link} to="/chat" className={classes.heading}>Messenger</Button> 
                    // </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary" style={{ fontFamily: 'Segoe UI'}}>Sign In</Button>
                )} 
            </div>
           
          </Box>
        </Toolbar>
    );
  }
  
  return (
    <Container>
      <AppBar> 
        { toggleMenu ? displayToggleMenu() : displayLargeMenu() }
      </AppBar>
    </Container>
  );
}
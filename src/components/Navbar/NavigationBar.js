import React, { useEffect, useState } from 'react';
import { Container, Toolbar, Typography, Box, AppBar, IconButton, MenuItem, Drawer, Button } from '@material-ui/core'; 
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
    fontFamily: 'Segoe UI',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
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
      fontFamily: 'Segoe UI'
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

  const headerData = [
    {
        tag: 'Home',
        link: '/'
    },
    {
        tag: 'Sign in',
        link: '/auth'
    },];

  const getToggleMenuOptions = () => {
    return ( 
      <Box>
        {headerData.map((data) => (
            <MenuItem> 
              {data.tag} 
            </MenuItem>
        ))}
      </Box>
    );
  }
  
  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolbar}>
          <Typography
            component='h1'
            variant='h6'
            className={classes.siteTitle}
          >
            <AcUnitIcon style={{ fontSize: '33px'}}/>
          </Typography>

          <Box className={classes.menuBox}>
            <>
                {headerData.map((data) => (
                    <Button component={Link} to={data.link} className={classes.heading}>
                        {data.tag}
                    </Button> 
                ))}

                {(user?.result)  && (
                    <div>
                        <Button component={Link} to="/chat" className={classes.heading}>Messengerrr</Button> 
                    </div>
                )} 
            </>
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
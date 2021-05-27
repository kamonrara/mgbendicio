import React, { useEffect, useState }      from 'react';
import { Toolbar, Box, Link, AppBar, IconButton, MenuItem, Drawer, Button } from '@material-ui/core'; 
import MenuIcon   from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    appBar: {
        borderRadius: 33,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

  siteTitle: {
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  toolbar: {
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
    color: 'black'
  },
  menuIcon: {
    color: 'black'
  }
  
}));

export default function NavigationBar() {

  const classes = useStyles();
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
      <Toolbar>
        <IconButton {...{ onClick: handleToggleMenuOpen }}>
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
      
        <Drawer {...{ anchor: 'left', open: toggleMenuOpen, onClose: handleToggleMenuClose }}>
          <div>{ getToggleMenuOptions() }</div>
        </Drawer>
      </Toolbar>
    );
  }

  const getToggleMenuOptions = () => {
    return ( 
      <Box>
        {['home', 'courses', 'sign up'].map((menuOption) => (
            <MenuItem> 
              {menuOption} 
            </MenuItem>
        ))}
      </Box>
    );
  }

  const metaData = [
    {
      menu: 'Home',
      to: '/'
    },
    {
      menu: 'Messenger',
      to: '/chat'
    }
  ]
  
  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolbar}>
          <Box className={classes.menuBox}>
              <Link component='button'
                    variant='body1' 
                    to='/'
                    className={classes.menuOption}
              >
                HOMEsss
              </Link>

              <Link component='button'
                    variant='body1' 
                    to='/chat'
                    className={classes.menuOption}
              >
                MESSENGER
              </Link>
          </Box>
        </Toolbar>
    );
  }
  
  return (
      <AppBar className={classes.appBar} position="static" color="inherit"> 
        {toggleMenu ? displayToggleMenu() : displayLargeMenu() }
      </AppBar>
  );
}
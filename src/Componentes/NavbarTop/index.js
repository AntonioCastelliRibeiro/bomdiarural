import React from 'react';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { AppBar, Toolbar, IconButton, Typography, InputBase,
  withWidth, Slide, useScrollTrigger, CssBaseline, Container, ThemeProvider} from '@material-ui/core';

import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  AppBar:{
    backgroundColor: "#257627"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:  "'Amaranth', sans-serif",
    fontSize: '20px',      
    '@media (min-width:600px)': {
      fontSize: '21px',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      textAlign: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  search: {
    paddingRight: 0,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#257627', 0.15),
    '&:hover': {
      backgroundColor: fade('#257627', 0.25),
    },
    marginLeft: 0,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function NavbarTop(AProps) {
  const history = useHistory();

  const classes = useStyles();
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


  function setarRouter(AQueryParams){
      history.push(AQueryParams);
      AProps.refresh();
      AProps.onClose(true);
  }

  function retornarTitulo(){
    return (
      <ThemeProvider  >
        <Typography 
          onClick={()=>setarRouter("/")} 
          className={classes.title} 
          variant="h6" 
          noWrap
        >
          Bom Dia Rural
        </Typography>
      </ThemeProvider>
    )
  }

  function retornarNav(props){
    return(
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
        <AppBar className={classes.AppBar}  >
          <Container maxWidth="md">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>AProps.onClickSwipeableLeft()}
              >
                <MenuIcon />
              </IconButton>
              {retornarTitulo()}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Buscar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
    }

    return(
      retornarNav()
    )
}

export default withWidth() (NavbarTop);
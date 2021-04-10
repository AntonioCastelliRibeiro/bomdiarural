import React, { useState } from 'react';
import './styles.scss';

import { withStyles } from '@material-ui/core/styles';

import { red, blue, green } from "@material-ui/core/colors";


import { Link, NavLink, useHistory } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SwipeableDrawer, Drawer, Slide, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@material-ui/core';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IconPhoto from '@material-ui/icons/Photo';
import IconNote from '@material-ui/icons/Note';
import IconGroup from '@material-ui/icons/Group';
import ContactSupport from '@material-ui/icons/ContactSupport';

import IconMovie from '@material-ui/icons/Movie';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  swipeable: {
    transitionDuration: {
      enter: theme.transitions.duration.enteringScreen
    },
    swipeAreaWidth: 20,
  }

}));

export default function SwipeableDrawerLeft(props) {
  const history = useHistory();
  const classes = useStyles();

  function setarRouter(AQueryParams){
    history.push(AQueryParams);
    onClose({state: false, page: AQueryParams});
    props.onSetarPageFoto(AQueryParams);
  }

  function retornarListItemLeft(){
    return (
      <div role="presentation">
        <div className={classes.toolbar}>
          <IconButton onClick={()=>setTimeout(() => { props.onClose() }, 100)}>
             <ChevronLeftIcon style={{ color: '#4caf50' }} />
          </IconButton>
        </div>
        {/* <Divider /> */}
        <List>
          {/* <ListItem onClick={()=>setarRouter("/conteudo")} button key="4">
              <ListItemIcon > <IconNote  style={{ color: '#4caf50' }} /> </ListItemIcon>
              <ListItemText primary="Matérias" />
          </ListItem>  */}
          <ListItem onClick={()=>setarRouter("/materias")} button key="2">
            <ListItemIcon > <IconMovie  style={{ color: '#4caf50' }} /> </ListItemIcon>
          <ListItemText primary="Matérias" />
          </ListItem> 
          <ListItem onClick={()=>setarRouter("/receitas")} button key="3">
            <ListItemIcon > <ImportContactsIcon  style={{ color: '#4caf50' }} /> </ListItemIcon>
            <ListItemText primary="Receitas" />
          </ListItem> 
          <ListItem onClick={()=>setarRouter("/fotos")} button key="1">
            <ListItemIcon > <IconPhoto  style={{ color: '#4caf50' }} /> </ListItemIcon>
            <ListItemText primary="Fotos" />
          </ListItem> 
        </List>
      {/* <Divider />
        <ListItem onClick={()=>setarRouter("/equipe")} button key="5">
            <ListItemIcon > <IconGroup /> </ListItemIcon>
            <ListItemText primary="Equipe" />
         </ListItem> 
         <ListItem onClick={()=>setarRouter("/contato")} button key="6">
            <ListItemIcon > <ContactSupport /> </ListItemIcon>
            <ListItemText primary="Contato" />
         </ListItem>  */}
      </div>
    )
  }

  function onClose(AObject){
    props.onClose(AObject);
  }

  function retornarSwipe(a){
    return(
      <>
          <SwipeableDrawer
            className={classes.swipeable}
            color={red[900]}
            // swipeAreaWidth={"1000px"}
            // disableSwipeToOpen
            anchor="left"
            open={props.open}
            onClose={()=>setTimeout(() => { props.onClose() }, 100)}
            // onOpen={()=>console.log('open')}
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
          >
            {retornarListItemLeft()}
          </SwipeableDrawer>
    </>
)
  }

    return(
      retornarSwipe()
    )
}
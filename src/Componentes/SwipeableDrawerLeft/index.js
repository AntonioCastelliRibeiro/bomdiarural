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
    props.onClose();
  }

  function retornarListItemLeft(){
    return (
      <div role="presentation">
        <div className={classes.toolbar}>
          <IconButton onClick={()=>onClose()}>
             <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem onClick={()=>setarRouter("/fotos")} button key="1">
                <ListItemIcon > <IconPhoto /> </ListItemIcon>
                <ListItemText primary="Fotos" />
            </ListItem> 
            <ListItem onClick={()=>setarRouter("/videos")} button key="2">
              <ListItemIcon > <IconMovie /> </ListItemIcon>
              <ListItemText primary="Vídeos" />
            </ListItem> 
            <ListItem onClick={()=>setarRouter("/receitas")} button key="3">
              <ListItemIcon > <ImportContactsIcon /> </ListItemIcon>
              <ListItemText primary="Receitas" />
            </ListItem>  
            <ListItem onClick={()=>setarRouter("/conteudo")} button key="4">
              <ListItemIcon > <IconNote /> </ListItemIcon>
              <ListItemText primary="Conteúdo" />
            </ListItem> 
        </List>
      <Divider />
        <ListItem onClick={()=>setarRouter("/equipe")} button key="5">
            <ListItemIcon > <IconGroup /> </ListItemIcon>
            <ListItemText primary="Equipe" />
         </ListItem> 
         <ListItem onClick={()=>setarRouter("/contato")} button key="6">
            <ListItemIcon > <ContactSupport /> </ListItemIcon>
            <ListItemText primary="Contato" />
         </ListItem> 
      </div>
    )
  }

  function onClose(){
    props.onClose();
  }

  function retornarSwipe(a){
    return(
      <>
          <SwipeableDrawer
            className={classes.swipeable}
            // swipeAreaWidth={"1000px"}
            // disableSwipeToOpen
            anchor="left"
            open={props.open}
            onClose={()=>onClose()}
            onOpen={()=>console.log('open')}
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
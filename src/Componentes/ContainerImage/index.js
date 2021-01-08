import React from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';

import {Hidden, Container, GridListTileBar, Grid, Paper,
GridListTile, IconButton, Zoom, CardMedia, GridList } from '@material-ui/core';

import IconClose from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 450,
  },
  gridListImg: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '90%',
    },
  },
  divArrowContainer: {
    bottom: '50%',
    left: 0,
    right: 0,
    height: '48px',
    position: 'absolute',
    background: '#fff0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
}));

export default function ContainerImage(props) {
  const [onLoadImg, setOnLoadImg] = React.useState(false);
  const classes = useStyles();

  function retornarArrowContainer(){
    return (
      <div className={classes.divArrowContainer}>
        <div>
          <IconButton onClick={()=>setOnLoadImg(false)} aria-label={`info about Antonio`}>
            <ArrowBackIosIcon style={{color: '#424242'}} />
          </IconButton>  
        </div>
        <div>
          <IconButton aria-label={`info about Antonio`}>
            <ArrowForwardIosIcon style={{color: '#424242'}} />
          </IconButton>
        </div>
      </div>

    )
  }

  function retornarConteudoImage(){
    return (
      <>
        <Hidden >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Zoom key="princi" in timeout={250} >
              <GridListTile key="test" style={{listStyleType: 'none'}} >
              {retornarImagem("450px", "100%")}
              {retornarArrowContainer()}
              <GridListTileBar
                titlePosition="bottom"
                title="Imagem Teste"
                style={{backgroundColor: '#fff0', borderRadius: 2}}
                subtitle={<span>by: Antonio</span>}
              />
              </GridListTile>
            </Zoom>            
          </Grid>
        </Grid>
      </Hidden>
    </>
    )
  }

  function retornarImageGridList(){
    const img = new Image();
    img.onload = () =>{setOnLoadImg(true)};
    img.src = "https://source.unsplash.com/random";
    return (
      <div >
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          <GridListTile key={1} cols={1}>
            <img src={img.src} alt="teste" />
          </GridListTile>
          <GridListTile key={1} cols={1}>
            <img src={img.src} alt="teste" />
          </GridListTile>
          <GridListTile key={1} cols={1}>
            <img src={img.src} alt="teste" />
          </GridListTile>
          <GridListTile key={1} cols={3}>
            <img src={img.src} alt="teste" />
          </GridListTile>
        </GridList>
    </div>
    )
  }

  function retornarContainer(){
    return (
      <div style={{ height: '100%', paddingTop: "10px", paddingBottom: "10px" }}>
          {retornarConteudoImage()}
          {/* {retornarImageGridList()} */}
      </div>
    )
  }

  function retornarImagem(AHeight, AWidth){
    const img = new Image();
    img.onload = () =>{setOnLoadImg(true)};
    img.src = "https://source.unsplash.com/random";
    
    const lvStyle = (AHeight && AWidth !== 0) ? ({height: AHeight, width: AWidth, borderRadius: 2}) : ({});
    if (onLoadImg){
      return (
        <>
          <CardMedia
            style={lvStyle}
            className={classes.gridListImg}
            image={img.src}
            title="Paella dish"
          />
      </>
      )
    } else {
     return (
      <Skeleton variant="rect" width="100%">
        <div style={lvStyle} />
      </Skeleton>
     )
    }
  }

  return(
    retornarContainer()
  )
}
import React from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import {Hidden, Container, GridListTileBar, Grid, Paper,
GridListTile, IconButton, Zoom, CardMedia, GridList } from '@material-ui/core';

import IconClose from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Imagem1 from '../../Image/Imagem4.jpg';
import Imagem2 from '../../Image/Imagem5.jpg';
import Imagem3 from '../../Image/Imagem6.jpg';

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

const styles = {
  slide: {
    height: 450,
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};


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
        <Grid  container spacing={3}>
          <Grid item xs={12}>
            <Zoom key="princi" in timeout={250} >
            {retornarSwipeableViews()}
            {/* {retornarArrowContainer()} */}
              {/* <GridListTile key="test" style={{listStyleType: 'none'}} >

              {/* {retornarImagem("450px", "100%")} */}
              {/* {retornarArrowContainer()}
              <GridListTileBar
                titlePosition="bottom"
                title="Imagem Teste"
                style={{backgroundColor: '#fff0', borderRadius: 2}}
                subtitle={<span>by: Antonio</span>}
              /> */}
              {/* </GridListTile> */} 
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

  function retornarSwipeableViews(){
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    return (
      <AutoPlaySwipeableViews enableMouseEvents style={{height: "450px"}}>
        {retornarImagem("450px", "100%", Imagem1)}
        {retornarImagem("450px", "100%", Imagem2)}
        {retornarImagem("450px", "100%", Imagem3)}
        {/* <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div> */}
      </AutoPlaySwipeableViews>
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

  function retornarImagem(AHeight, AWidth, ALink){
    const img = new Image();
    img.onload = () =>{setOnLoadImg(true)};
    img.src = ALink;
    
    const lvStyle = (AHeight && AWidth !== 0) ? ({height: AHeight, width: AWidth, borderRadius: 2}) : ({});
    if (onLoadImg){
      return (
        <>
          <CardMedia
            style={lvStyle}
            // className={classes.gridListImg}
            image={img.src}
            // title="Paella dish"
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
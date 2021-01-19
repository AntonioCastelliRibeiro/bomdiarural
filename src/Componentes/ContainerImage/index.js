import React from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';
import AutoPlaySwipeableViews from '../AutoPlaySwipeableViews';

import {Hidden, Container, GridListTileBar, Grid, Paper,
GridListTile, IconButton, Zoom, CardMedia, GridList } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  divSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
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

}));

export default function ContainerImage(props) {
  function retornarConteudoImage(){
    return (
      <>
        <Hidden >
        <Grid  container spacing={0}>
          <Grid item xs={12}>
            <Zoom key="princi" in timeout={250} >
            {retornarSwipeableViews()}
            </Zoom>            
          </Grid>
        </Grid>
      </Hidden>
    </>
    )
  }

  function retornarSwipeableViews(){
  // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    return (
      // <>
      <AutoPlaySwipeableViews open={props.open} />
/*       
      <AutoPlaySwipeableViews  index={setNumberSwipeable} enableMouseEvents onChangeIndex={(e)=>onSetNumberSwipeable(e)} style={{height: "450px"}}>
        {retornarImagem("450px", "100%", Imagem1)}
        {retornarImagem("450px", "100%", Imagem2)}
        {retornarImagem("450px", "100%", Imagem3)}

        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
      </AutoPlaySwipeableViews>
            <div className={classes.divSlider}>
              <Slider max={3} numberImage={()=>setNumberSwipeable} setarNumberImage={(e)=>console.log(e)} />
            </div>
            </> */
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

  // function retornarImagem(AHeight, AWidth, ALink){
  //   const img = new Image();
  //   img.onload = () =>{setOnLoadImg(true)};
  //   img.src = ALink;
    
  //   const lvStyle = (AHeight && AWidth !== 0) ? ({height: AHeight, width: AWidth, borderRadius: 2}) : ({});
  //   if (onLoadImg){
  //     return (
  //       <>
  //         <CardMedia
  //           style={lvStyle}
  //           // className={classes.gridListImg}
  //           image={img.src}
  //           // title="Paella dish"
  //         />
  //     </>
  //     )
  //   } else {
  //    return (
  //     <Skeleton variant="rect" width="100%">
  //       <div style={lvStyle} />
  //     </Skeleton>
  //    )
  //   }
  // }

  return(
    retornarContainer()
  )
}
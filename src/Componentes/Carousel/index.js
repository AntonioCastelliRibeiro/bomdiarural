import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";

import { makeStyles } from '@material-ui/core/styles';


import { IconButton } from "@material-ui/core";
import IconClose from '@material-ui/icons/Close';

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const useStyles = makeStyles((theme) => ({
  iconModal: {
    // opacity: '80%',
    color: 'white',
  },
  imgSlide: {
    height: '160%', 
    width: '100%'
  },
}));

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  const classes = useStyles();
  return (
    <div>
      <AutoRotatingCarousel
        label="Fechar"
        open={handleOpen}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >

        <Slide
          media={
            <img 
              alt="teste"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"/>
          }
          mediaBackgroundStyle={{ backgroundColor: green['A700'] }}
          style={{ backgroundColor: green[400], height: '137%' }}
          title="Fazenda São Roque"
          subtitle="Propriedade rural de Francisco Beltrão"
         />
        <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"/>
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%' }}
          title="Laticínio Boa Vista"
          subtitle="Coleta de Leite"
        />
        <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
         <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
         <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
         <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
         <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
         <Slide
          media={
            <img 
              alt="imagem"
              className={classes.imgSlide}
              src="https://source.unsplash.com/random"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[400], height: '137%'  }}
          title="Lago do Uruguai"
          subtitle="Uma das belezas naturais contida em meio a diversidade"
        />
        
      </AutoRotatingCarousel>
    </div>
  );
};

export default function App(props) {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={props.open}
        setHandleOpen={()=>props.onClose(false)}
      />
    </>
  );
}
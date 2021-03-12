import React from "react";
import { useSpring, animated } from "react-spring";
// import "./styles.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { CardActions } from '@material-ui/core';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiSvgIcon: {
      width: '100%',
    }
  }
});


const useStyles = makeStyles((theme) => ({
  cardDiv:{
    display: 'flex'
  },
  card: {
    width: '100%',
    display: 'flex',
    // height: '45ch',
    background: 'grey',
    // borderRadius: '5px',
    // backgroundImage:  theme,//'url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.5s',
    wilChange: 'transform',
    // border: '15px solid white',
  },
  playDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
}));

const styles = {
  root: {
    maxWidth: '550px',
  },
  media: {
    height: '300px',
  },
  mediaScroll: {
    height: '500px',
  }

};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 5,
  (x - window.innerWidth / 2) / 5,
  1.1
];
const trans = (x, y, s) => `perspective(300px) scale(${s})`;

export default function CardItemMedia(AProps) {
  const classes = useStyles();
  const image = AProps.image;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 380, friction: 54 }
  }));

  return (
    <animated.div className={classes.cardDiv} >
      <animated.img 
        height={350}
        className={classes.card}
        style={{ transform: props.xys.interpolate(trans) }}
        src={image}
      />
      <animated.div 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        className={classes.playDiv}
        >
        {AProps.gridMovie?<ThemeProvider theme={theme}><CardActions style={{height: '810px', width: '100%'}} disableSpacing={false}><PlayCircleOutlineIcon color="action" style={{height: 70, width: '100%'}}  /></CardActions></ThemeProvider> : false}
      </animated.div >
    </animated.div>
  );
}

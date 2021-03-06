import React from "react";
import { useSpring, animated } from "react-spring";
// import "./styles.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
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
}));

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
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}

      src={image}
      />
    </animated.div>
  );
}

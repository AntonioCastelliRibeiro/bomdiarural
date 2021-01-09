import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SliderComp from '@material-ui/core/Slider';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSlider: {
      // Name of the rule
      thumb: {
        width: 15,
        height: 15,
        marginTop: 0,
        marginLeft: 0,
        transition: "0.3s ease"
      },
      colorPrimary: {
        color: "white"
      },
      thumbColorPrimary: {
        "&$focusVisible,&:hover": {
          boxShadow: "none"
        }
      },

      "&$active": {
        boxShadow: "none"
      },
      track: {
        display: "block",
        position: "absolute",
        opacity: '80%',
        marginTop: 6,
        height: 3,
        borderRadius: 1,
        transition: "width 300ms",
        backgroundColor: "currentColor",
        "$vertical &": {
          width: 2
        }
      },
      trackFalse: {
        "& $track": {
          display: "none"
        }
      },
      rail: {
        display: "none",
        position: "absolute",
        width: "100%",
        height: 4,
        borderRadius: 1,
        backgroundColor: "currentColor",
        opacity: 0.38,
        "$vertical &": {
          height: "100%",
          width: 4
        }
      },
      mark: {
        position: "absolute",
        // border: 6,
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: "currentColor"
      }
    }
  }
});


const useStyles = makeStyles({
  root: {
    width: '200px',
  },
  rail: {
    display: 'none'
  }
});

export default function Slider(props) {
  const classes = useStyles();

  function setarNumberClick(AElement){
    const lvDataIndex = AElement.getAttribute('data-index');
    console.log(lvDataIndex);
    if (lvDataIndex  !== null){
      props.setarNumberImage(Number(lvDataIndex));
    }
  }
  console.log(props.numberImage);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <SliderComp
          track="normal"
          defaultValue={1}
          // getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          // valueLabelDisplay="true"
          value={props.numberImage}
          // step={1}
          marks
          min={0}
          max={props.max}
          onChange={(e)=>setarNumberClick(e.target)}
          // onChangeCommitted={(e)=>console.log(e.target)}
        />
      </ThemeProvider>
    </div>
  );
}

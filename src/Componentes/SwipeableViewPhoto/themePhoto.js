import { createMuiTheme } from '@material-ui/core/styles';

const themePhoto = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSlider: {
      // Name of the rule
      root: { // top do slider
        top: '-37px',// Altura que ele ficará no componente
        width: 185,
        height: '0px',
      },
      thumb: {
        width: 7,
        height: 7,
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
        marginTop: 2.401,
        height: 2,
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
        width: 7,
        height: 7,
        borderRadius: 7,
        backgroundColor: "currentColor"
      }
    }
  }
});

export default themePhoto;
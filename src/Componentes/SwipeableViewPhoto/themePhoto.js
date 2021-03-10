import { createMuiTheme } from '@material-ui/core/styles';

const themePhoto = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSlider: {
      // Name of the rule
      root: { // top do slider
        top: '-33px',// Altura que ele ficará no componente
        width: '32%',
        height: '0px',
        marginLeft: '33%',
        alignItems: 'center'
      },
      thumb: {
        width: 12,
        height: 12,
        marginTop: -1,
        marginLeft: -0.39,
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
        display: "none",
        position: "absolute",
        opacity: '80%',
        marginTop: 2.801,
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
        // marginLeft: 0.2,
        width: 10,
        height: 10,
        borderRadius: 7,
        backgroundColor: "currentColor"
      }
    }
  }
});

export default themePhoto;
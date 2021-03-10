import { createMuiTheme } from '@material-ui/core/styles';

const themeGridPhoto = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiGridList: {
      root: {
        height: 'inherit'
      },
    },
    
  }
});

export default themeGridPhoto;
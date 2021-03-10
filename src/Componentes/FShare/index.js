import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';

import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { green } from '@material-ui/core/colors';

import Card from '@material-ui/core/Card';

import { withStyles, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '300px'
  },
}));

const theme = createMuiTheme({

  palette: {
    primary: green,
  },
  
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FShare(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.onSetClose();
  };

  function retornarIcon(){
    return (
      <>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<InstagramIcon  />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<FacebookIcon  />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<TwitterIcon  />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<YouTubeIcon  />} />
      </div>
    </>
    )
  }

  function retornarObjectSnackBar(ASuccess){
    return {
      open: true,
      success: ASuccess,
      message: (ASuccess) ? ('Copiado') : ('Copie o Link Manualmente')
    }
  }

  function copiarTestoAreaTransferencia(){
    let textArea = document.querySelector('#input-link');
    textArea.select();
    try {
      var lvSuccessful = document.execCommand('copy');
      props.onSetSnackBar(retornarObjectSnackBar(lvSuccessful));
    } catch (err) {
    }
  };

  return (
    <div>
      <Dialog
        // style={{width: 250}}
        style={{zIndex: 9999}}
        maxWidth="xs"
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{display: "flex", justifyContent: 'space-between'}}>
          <DialogTitle id="alert-dialog-slide-title"><Typography variant="h6">Compartilhar</Typography></DialogTitle>
          <div style={{padding:  '5px'}}>
            {props.open ? (
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </div>
          </div>
          <div
            style={{display: 'flex', width: '100%', maxWidth: '255px', height: '100%', paddingRight: '0px'}}
          >
          <CardMedia
            style={{display: 'flex', width: '100%', height: '158px', paddingRight: '0px'}}
            
            image={props.image}//"https://picsum.photos/700/700"
            alt="Share"
          />
          </div>
          <DialogContent  style={{display: 'flex', padding: '10px 0px 0px 22px'}}>
            {retornarIcon()}
          </DialogContent>
          <DialogContent >
          <InputLabel htmlFor="filled-adornment-password">Link</InputLabel>
          <ThemeProvider theme={theme}>
            <Input
              id="input-link"
              type="text"
              value="https://bit.ly/2KIOYjW"
              multiline="true"
              color="black"
              fullWidth
              endAdornment={
                <InputAdornment 
                  position="end">
                <IconButton 
                  onClick={(e)=>copiarTestoAreaTransferencia()}
                  edge="end" 
                  size="small" 
                  children={
                    <FileCopyIcon />
                  } 
                />
                </InputAdornment>
              }
            />
            </ThemeProvider>
          </DialogContent>
      </Dialog>
    </div>
  );
}

export default React.memo(FShare);
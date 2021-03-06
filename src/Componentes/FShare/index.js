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

import copy from "copy-to-clipboard";  

import Green from '@material-ui/core/colors/green';

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
    primary: Green,
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
  const inputTxt = React.useRef(null);
  const classes = useStyles();
  const [txtValue, setTxtValue] = React.useState('https://bit.ly/2KIOYjW');

  const handleClose = () => {
    props.onSetClose();
  };

  function retornarIcon(){
    return (
      <>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<InstagramIcon style={{ color: '#dd2d76' }} />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<FacebookIcon style={{ color: '#3b5998' }} />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<TwitterIcon style={{ color: '#1DA1F2' }} />} />
      </div>
      <div style={{display: 'flex', paddingLeft: '2px'}}>
        <IconButton  size='medium' children={<YouTubeIcon style={{ color: '#FF0000' }} />} />
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

  function copiarTextoAreaTransferencia(){
    inputTxt.current.focus();
    copy(txtValue);
    // let textArea = document.querySelector("#input-link");
    // textArea.select();
    // try {
    //   var lvSuccessful = document.execCommand('copy');
      props.onSetSnackBar(retornarObjectSnackBar(true));
    // } catch (err) {
    //   props.onSetSnackBar(retornarObjectSnackBar(false));

    // }
  };

  return (
      <Dialog
        style={{ zIndex: 9999 }}
        maxWidth="xs"
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{display: "flex", justifyContent: 'space-between', backgroundColor: '#f1f3f1e0' }}>
          <DialogTitle id="alert-dialog-slide-title"><Typography variant="h6" style={{ flexGrow: 2, fontSize: '24px', fontFamily: '"Amaranth", sans-serif', fontWeight: 400, lineHeight: 1.5, paddingLeft: '0%' }}>Compartilhar</Typography></DialogTitle>
          <div style={{padding:  '5px' }}>
            {props.open ? (
              <IconButton style={{ marginTop: '16%' }} aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </div>
          </div>
          <div
            style={{ display: 'flex', width: '100%', maxWidth: '255px', height: '100%', paddingRight: '0px' }}
          >
          <CardMedia
            style={{ display: 'flex', width: '100%', height: '158px', paddingRight: '0px' }}
            image={props.image}//"https://picsum.photos/700/700"
            alt="Share"
          />
          </div>
          <DialogContent  style={{display: 'flex', padding: '10px 0px 0px 22px', backgroundColor: '#f1f3f1e0' }}>
            {retornarIcon()}
          </DialogContent>
          <DialogContent style={{ backgroundColor: '#f1f3f1e0', padding: 13 }} >
          <InputLabel htmlFor="filled-adornment-password" style={{ fontWeight: 'bold' }} >Link</InputLabel>
          <ThemeProvider theme={theme}>
            <Input
              ref={inputTxt}
              id="input-link"
              type="text"
              value={txtValue}
              multiline="true"
              color="black"
              fullWidth
              endAdornment={
                <InputAdornment 
                  position="end">
                <IconButton 
                  id=""
                  onClick={(e)=>copiarTextoAreaTransferencia()}
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
  );
}

export default React.memo(FShare);
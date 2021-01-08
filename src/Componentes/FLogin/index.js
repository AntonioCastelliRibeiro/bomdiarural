import React from 'react';
import './styles.scss';

import { Fab, Zoom, Tooltip, LinearProgress, Snackbar, 
              TextField, 
              Button, 
              Container, 
              Grid,
              Box,
              Typography,
              Input,
              InputAdornment, 
              IconButton
             } from '@material-ui/core/';

import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/styles';
 
import FDemonstration from '../FDemoResponsive';

class FLogin extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nome: "",
      login: false,
      open: false

    }
  }

  formulario(){
    const useStyles = makeStyles((theme) => ({
      button: {
        color: 'secondary',
        variant: 'contained',
      }
    }));

    // const classes = useStyles();

    return (
      <>
      <LinearProgress />
      <form noValidate autoComplete="off" style={{padding: "5%"}}>
        <Container maxWidth="sm" >
          <Box component="div" className="div-container"  style={{backgroundColor:"#1f85fb30"}} width={"60%"} marginTop={"30%"} border={"1px Solid rgb(107, 107, 107)"} borderRadius="5px">
            <Box component="div" padding="15px" >
              <Grid container wrap="nowrap" spacing={2} alignItems={"center"}>
              <Box component="div" width={"100%"} >
                <TextField variant="standard" id="standard-basic" value={this.state.nome} onChange={(e)=>this.setState({ login: (this.state.nome.length === 0 ? (true) : (false)),  nome: e.target.value} )} label="Email" error={this.state.login}  fullWidth />
                </Box>
              </Grid>
              <Grid container wrap="nowrap" spacing={2}>
                <Box component="div" width={"100%"} marginTop={2}>
                <TextField id="standard-basic" label="Senha" type="password" fullWidth />
                </Box>
              </Grid>
              <Grid container wrap="nowrap" spacing={2} >
                <Box component="div" width={"100%"} marginTop={4}>
                  <Button color="primary" onClick={()=>this.setState({open: (!this.state.open)?(true):(false), login: (this.state.nome.length === 0 ? (true) : (false))})} variant="contained" fullWidth >
                    Login
                  </Button>
                </Box>
              </Grid>
              </Box>
            </Box>
          </Container>
          <div className="editFloat">
          <Tooltip TransitionComponent={Zoom} title={((this.state.nome.length === 0) ? ("Editar") : ("Você quer editar "+ this.state.nome + "?"))}>
            <Fab color="primary" aria-label="edit" >
              <EditIcon />
            </Fab>
          </Tooltip>
          </div>
      </form>
      <Snackbar
        open={!this.state.login }
        TransitionComponent="TransitionLeft"
        message={(this.state.nome.length > 0) ? ('Olá : '+ this.state.nome) : ("Informe o nome de usuário")}
        key="daniel"
      />
      </>
    )
  }

  render(){
    return (
      this.formulario()
    );
  }
}

export default FLogin;
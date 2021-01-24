import React from 'react';
import AutoPlaySwipeableViews from '../AutoPlaySwipeableViews';
import {Hidden, Grid, Zoom} from '@material-ui/core';


class ContainerImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  retornarConteudoImage(){
    return (
      <>
        <Hidden >
        <Grid  container spacing={0}>
          <Grid item xs={12}>
            <Zoom key="princi" in timeout={250} >
            {this.retornarSwipeableViews()}
            </Zoom>            
          </Grid>
        </Grid>
      </Hidden>
    </>
    )
  }

  retornarSwipeableViews(){
    return <AutoPlaySwipeableViews open={this.props.open} autoPlay retornarDescricao/>
  }

  render() {
    return (
      <div style={{ height: '100%', paddingTop: "10px", paddingBottom: "10px" }}>
          {this.retornarConteudoImage()}
      </div>
    )
  }
}

export default ContainerImage;

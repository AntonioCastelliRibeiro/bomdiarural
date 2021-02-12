import React from 'react';
import AutoPlaySwipeableViews from '../AutoPlaySwipeableViews';
// import {Hidden, Grid, Fade} from '@material-ui/core';


class ContainerImage extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   // this.state = {date: new Date()};
  // }

  retornarConteudoImage(){
    return (
      <>
        {/* <Hidden > */}
          {/* <Fade key="princi" in timeout={250} > */}
            {/* <Grid  container spacing={0}>
              <Grid item xl={12} xs={12}> */}
                {this.retornarSwipeableViews()}
              {/* </Grid>
            </Grid> */}
          {/* </Fade>            */}
        {/* </Hidden> */}
    </>
    )
  }

  retornarSwipeableViews(){
    return <AutoPlaySwipeableViews open={true} autoPlay retornarDescricao/>
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%', paddingTop: "10px", paddingBottom: "10px" }}>
        <AutoPlaySwipeableViews open={true} autoPlay retornarDescricao/>
          {/* {this.retornarConteudoImage()} */}
      </div>
    )
  }
}

export default ContainerImage;

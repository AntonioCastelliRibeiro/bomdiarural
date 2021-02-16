import React from 'react';
import AutoPlaySwipeableViews from '../AutoPlaySwipeableViews';

import Container from '@material-ui/core/Container';

class ContainerImage extends React.PureComponent {
  
  render() {
    return (
      <Container maxWidth="lg" >
        <div style={{ height: '100%', width: '100%', paddingBottom: "10px" }}>
          <AutoPlaySwipeableViews open={true} autoPlay retornarDescricao/>
        </div>
      </Container>
    )
  }
}

export default ContainerImage;

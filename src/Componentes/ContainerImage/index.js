import React from 'react';
import AutoPlaySwipeableViews from '../AutoPlaySwipeableViews';

import { Container } from '@material-ui/core';

// class ContainerImage extends React.PureComponent {
  
  function ContainerImage(props) {
    return (
      <Container maxWidth="lg" style={{ padding: 0 }} >
        <div style={{ height: '100%', width: '100%', paddingBottom: "10px" }}>
          <AutoPlaySwipeableViews open={true} autoPlay retornarDescricao/>
        </div>
      </Container>
    )
  }
// }

export default ContainerImage;

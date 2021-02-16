import React from 'react';
import './styles.css';
import Imagem1 from '../../../Image/Imagem10.jpg';


import { Grid, Fade } from '@material-ui/core'; 
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core';

const styles = {
  root: {
    maxWidth: '550px',
  },
  media: {
    height: '300px',
  },
  mediaScroll: {
    height: '500px',
  }

};

class CardItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onScroll: "imageItem",
    };
  }

  componentDidMount(){
    window.onscroll = ()=> this.handleScroll();
  }

  handleScroll(){
    this.setState({ onScroll: (document.documentElement.scrollTop > 40) ? ("imageItemScroll") : ("imageItem") });
    console.log(document.documentElement.scrollTop);
  }

  render() {

    return (
      <Grid  item xs={12} sm={12} md={6} lg={6}>
      <Fade 
        key={this.props.key} 
        in  
        timeout={600}
      >
      <Card className={"root"}>
        <CardActionArea>
          <CardMedia
            // className={ () =>this.state.onScroll ? AClasses.mediaScroll : AClasses.media}
            className={"imageItem"}
            // style={{height: 350}}
            image={Imagem1}
            title="Paella dish"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Conteúdo Exclusivo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Compartilhar
          </Button>
          <Button size="small" color="primary">
            Saiba Mais
          </Button>
        </CardActions>
      </Card>
      </Fade>
    </Grid>
    )
  }
}

export default CardItem;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import Imagem1 from '../../../Image/Imagem1.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [onLoadImg, setOnLoadImg] = React.useState(false);
  const img = new Image();
  img.onload = () =>{setOnLoadImg(true)};
  img.src = Imagem1;

  function retornarCardMedia(){
    if (onLoadImg){
      return (
        <>
          <CardMedia
            className={classes.media}
            image={img.src}
            title="Paella dish"
          />
      </>
      )
    } else {
     return (
      <Skeleton variant="rect" className={classes.media} />
     )
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {retornarCardMedia()}
        {/* <CardMedia
          className={classes.media}
          image={Imagem1}
          title="Contemplative Reptile"
        /> */}
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
  );
}

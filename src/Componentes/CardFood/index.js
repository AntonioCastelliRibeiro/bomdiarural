import React, { useEffect, useState  } from 'react';

import ImageSkeleton from '../ImageSkeleton';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import Skeleton from '@material-ui/lab/Skeleton';

import Zoom from '@material-ui/core/Zoom';

import Grow from '@material-ui/core/Grow';

import BdrlLogo from '../../Image/BomdiaRuralLogo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor: 'rgb(129, 199, 132)',
  },
  media: {
    opacity: '97%',
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&:hover': {
      cursor: 'pointer',
      width: '100%',
      opacity: '100'
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardFood(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [figure, setFigure] = useState('https://picsum.photos/700/700'); 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
      <Card className={classes.root} >
        <CardHeader
          avatar={
            <Avatar src={BdrlLogo} aria-label="recipe" >
              
            </Avatar>
          }
          action={
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          }
          style={{ fontWeight: 800 }}
          
          title="Receita de Nova Prata"
          subheader="14 de Maio, 2021"
        />
        <div
          onClick={()=>setFigure('https://picsum.photos/700/700')}
        >
          <ImageSkeleton 
            figure={figure}
          />
        </div>
        <CardContent>
          <Typography style={{ fontWeight: 800 }} variant="body2" color="textSecondary" component="p">
          Esta impressionante paella é um prato de festa perfeito e uma refeição divertida para cozinhar junto com seus convidados. 
          Adicione 1 xícara de ervilhas congeladas junto com os músculos, se desejar.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Método:</Typography>
            <Typography paragraph>
              Aqueça 1/2 xícara do caldo em uma panela até ferver, acrescente o açafrão e reserve por 10 minutos.
            </Typography>
            <Typography paragraph>
              Aqueça o óleo em uma panela de paella (14 a 16 polegadas) ou uma frigideira grande e funda em fogo médio-alto. Adicione o frango, o camarão e o chouriço e cozinhe, mexendo ocasionalmente até dourar levemente, 6 a 8 minutos. Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na frigideira. Adicione pimentón, louro, alho, tomate, cebola, sal e pimenta e cozinhe, mexendo sempre até engrossar e cheirar, cerca de 10 minutos. Adicione o caldo de açafrão e as restantes 4 1/2 xícaras de caldo de galinha; leve para ferver.
            </Typography>
            <Typography paragraph>
              Adicione o arroz e mexa delicadamente para distribuir. Cubra com alcachofras e pimentões e cozinhe sem mexer, até a maior parte do líquido ser absorvida, 15 a 18 minutos. Reduza o fogo para médio-baixo, adicione os camarões reservados e os mexilhões, enfiando-os no arroz, e cozinhe novamente sem mexer, até os mexilhões abrirem e o arroz ficar macio, mais 5 a 7 minutos. (Descarte os mexilhões que não abrirem.)
            </Typography>
            <Typography>
              Retire do fogo e deixe descansar por 10 minutos e depois serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
  );
}

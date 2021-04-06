import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import GridPrincipal from '../GridPrincipal';
import Recipe from '../Recipe';

import Movie from '../MyMovie';
import Photo from '../Photo';

export default function ReactRouter(props) {
    return(
        <Switch >
            <Route path="/" exact component={()=><GridPrincipal />} />
            <Route path="/fotos" component={()=><Photo onSetarCarousel={(e)=>props.onSetarCarousel(e)} />} /> 
            <Route path="/videos"  component={()=><Movie />} />
            <Route path="/receitas" component={()=><Recipe onSetarFShare={()=>props.onSetarFShare()} />} />
            <Route path="/conteudo" component={()=><h1>Conteudo</h1>} />
            <Route path="/equipe" component={()=><h1>Equipe</h1>} />
            <Route path="/contato" component={()=><h1>Contato</h1>} />
        </Switch>
      )
}
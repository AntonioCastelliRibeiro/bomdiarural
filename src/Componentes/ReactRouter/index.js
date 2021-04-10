import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import GridPrincipal from '../GridPrincipal';
import Recipe from '../Recipe';

import Movie from '../MyMovie';
import Photo from '../Photo';
import Equipe from '../Equipe';

export default function ReactRouter(props) {
    return(
        <Switch >
            <Route path="/" exact component={()=><GridPrincipal />} />
            <Route path="/fotos" component={()=><Photo onSetarCarousel={(e)=>props.onSetarCarousel(e)} />} /> 
            <Route path="/materias"  component={()=><Recipe isMateria={true} onSetarFShare={()=>props.onSetarFShare()} />/*<Movie />*/} />
            <Route path="/receitas" component={()=><Recipe onSetarFShare={()=>props.onSetarFShare()} />} />
            <Route path="/conteudo" component={()=><h1>Conteudo</h1>} />
            <Route path="/equipe" component={()=><Equipe />} />
            <Route path="/contato" component={()=><h1>Contato</h1>} />
        </Switch>
      )
}
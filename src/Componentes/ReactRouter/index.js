import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import GridPrincipal from '../GridPrincipal';
import GridPhoto from '../GridPhoto';

export default function ReactRouter(props) {
    console.log('teste')
    return(
        <Switch>
            {/* <Route path="/" exact component={()=><GridPrincipal />} /> */}
            <Route path="/receitas" component={()=><h1>Receitas</h1>} />
            <Route path="/videos"  component={()=><h1>Videos</h1>} />
            <Route path="/conteudo" component={()=><h1>Conteudo</h1>} />
            <Route path="/equipe" component={()=><h1>Equipe</h1>} />
            <Route path="/contato" component={()=><h1>Contato</h1>} />
        </Switch>
      )
}
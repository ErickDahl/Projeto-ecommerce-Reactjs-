import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Categoria from '../pages/Listas/Categoria';
import CadastroCategoria from '../pages/Cadastros/Categoria';

import Funcionario from '../pages/Listas/Funcionario';
import CadastroFuncionario from '../pages/Cadastros/Funcionario';

import Produto from '../pages/Listas/Produto';
import CadastroProduto from '../pages/Cadastros/Produto';

import Cliente from '../pages/Cadastros/Cliente';

import Pedido from '../pages/Listas/Pedido';




const Routes = () => (
<Switch>
    <Route path="/" component={Cliente} exact/>

    <Route path="/categoria" component={Categoria} exact/>
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    
    <Route path="/funcionario" component={Funcionario} exact/>
    <Route path="/cadastro/funcionario" component={CadastroFuncionario} exact/>

    <Route path="/produto/:id" component={Produto} exact/>
    <Route path="/cadastro/produto" component={CadastroProduto} exact/>

    <Route path="/pedido" component={Pedido} exact/>
    
</Switch>
);

export default Routes;
import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import {Link} from "react-router-dom";

const SideBar = () => {
  const [categoria, setCategoria] = useState([]);
  const loadCategoria = async () => {
    try {
      const response = await api.get("categoria");
      // console.log('loadCategoria', response.data);

      setCategoria(response.data);
    } catch (error) {
      console.log("loadCategoria error", error);
    }
  };
  useEffect(() => {
    loadCategoria();
  }, []);

  return (
    <ProSidebar >
      <Menu style={{color:"#5ce1e6"}} iconShape="round">
        <MenuItem icon={<HomeRoundedIcon />}><Link to={`/`}/>Home</MenuItem>
        <MenuItem icon={<ShoppingBasketRoundedIcon />}><Link to={`/produto/1`}/>Produtos</MenuItem>
        <SubMenu title="Administração" icon={<WorkRoundedIcon />}>
          <MenuItem><Link to={`/cadastro/funcionario`}/>Cadastrar Funcionário</MenuItem>
          <MenuItem><Link to={`/cadastro/categoria`}/>Cadastrar Categoria</MenuItem>
          <MenuItem><Link to={`/cadastro/produto`}/>Cadastrar Produto</MenuItem>
        </SubMenu>
        <SubMenu title="Categorias" icon={<CategoryRoundedIcon />}>
          <div>
            {categoria.map((categoria) => (
              <MenuItem key={categoria.id}><Link to={`/produto/${categoria.id}`}/>{categoria.nome}</MenuItem>
            ))}
          </div>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;
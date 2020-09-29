import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "./styles";
import logo from "../../assets/logo3.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = ({ title }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">LOGOUT</Link>
          </li>
          <li>
            |
          </li> 
          <li>
          </li>
          <li>
            <Link to="/categoria">CATEGORIA</Link>
          </li>
          <li>
            |
          </li> 
          <li>
          </li>
          <ShoppingCartIcon fontSize='small' style={{ color: '#5ce1e6'}}></ShoppingCartIcon> 
          <li></li>
          <li>
            <Link to="/pedido">
              Meu carrinho
            </Link>
            
          </li> 
        </ul>
      </Container>
      <Title>{title}</Title>
    </>
  );
};

export default Header;


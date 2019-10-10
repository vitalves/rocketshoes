import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md'; /* material design */

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/" title="Página inicial">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart" title="Meu carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 ítens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

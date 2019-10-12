import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md'; /* material design */

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header({ cartSize }) {
  // console.log(cartSize);
  return (
    <Container>
      <Link to="/" title="Página inicial">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart" title="Meu carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} ítens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  // cart: state.cart,
  cartSize: state.cart.length,
}))(Header);

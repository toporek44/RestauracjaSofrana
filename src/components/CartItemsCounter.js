import React, {useContext, useState} from 'react';
import {CartContext} from "../view/Root";
import styled from "styled-components";
import {ReactComponent as ShoppingCart} from "../assets/svg/shoppingCart.svg";

const Wrapper = styled.div`
position:relative;
margin:0 auto;
`

export const StyledShoppingCart = styled(ShoppingCart)`
width:30px;
height:30px;

    &:hover{
    cursor: pointer;
      
      path{
      fill: #ff5200;
      }  
    }
    
    

    

`

export const Counter = styled.div`
    position: absolute;
    color:#fff;
    right:-10px;
    top:-5px;
    border-radius: 50%;
    background: #ff5200;
    z-index: 999;
    width:20px;
    height: 20px;
    text-align: center;
    line-height: 22px;
    display: ${({visible})=> visible? "none": "block"}
`

const CartItemsCounter = () => {
    const {cart} = useContext(CartContext)
    const {visible,setVisible} = useState(false)


    return (
        <Wrapper>
            <StyledShoppingCart/>
            <Counter visible={cart.length === 0? !visible : visible  }>{cart.length}</Counter>
        </Wrapper>
    );
};

export default CartItemsCounter;
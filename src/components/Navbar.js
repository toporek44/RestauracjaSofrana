import React from 'react';
import styled from "styled-components"
import {NavLink} from "react-router-dom";
import Hamburger from "./Hamburger";
import {device} from "../assets/device";

const Wrapper = styled.div`
display:flex;
justify-content:center ;
align-items: center;
padding: 1rem 0;
position: relative;
z-index: 999;

.active{
color:#ff5200;
}

 
`

const StyledNavLink = styled(NavLink)`
position:relative;
display: none;
font-weight: 300;
 font-size: 1.6rem;
 text-decoration: none;
 margin: 0 4rem 0 0  ;
 text-decoration: none;
 color:#000;
 
 @media ${device.tablet}{
display:flex;
}

&:hover{
color:#ff5200;
}
`




const Navbar = () => {

    return (

<Wrapper>
    <Hamburger/>

            <StyledNavLink
                to='/'
                exact
                activeClassName='active'
            >
                Strona Główna
            </StyledNavLink>

            <StyledNavLink
                to='/Menu'
                exact
                activeClassName='active'
            >
                Menu
            </StyledNavLink>

            <StyledNavLink
                to='/Hotel'
                exact
                activeClassName='active'
            >
                Hotel
            </StyledNavLink>

            <StyledNavLink
                to='/Imprezy'
                exact
                activeClassName='active'
            >
                Imprezy
            </StyledNavLink>
            {/*<StyledNavLink*/}
            {/*    to='/Galeria'*/}
            {/*    exact*/}
            {/*    activeClassName='active'*/}
            {/*>*/}
            {/*    Gallery*/}
            {/*</StyledNavLink>*/}
            <StyledNavLink
                to='/Kontakt'
                exact
                activeClassName='active'
            >
                Kontakt
            </StyledNavLink>

    {/*<StyledNavLink*/}
    {/*    to='/ShoppingCart'*/}
    {/*    exact*/}
    {/*    activeClassName='active'*/}
    {/*>*/}
    {/*    <CartItemsCounter/>*/}
    {/*</StyledNavLink>*/}



</Wrapper>

    );
};

export default Navbar;
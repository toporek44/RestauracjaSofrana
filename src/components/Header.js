import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import {device} from "../assets/device";
import triangle from "../assets/images/triangle_bg.png"
import {Link} from "react-router-dom";

const Wrapper = styled.div`
width:100%;
height: 70px;
box-shadow: 0px 2px 11px -10px #212121 ;
position: relative;
top:0;
left:0;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 0 1.5rem;
z-index: 900;

@media ${device.laptop}{
padding: 0 10rem;
height: 120px;

}

&::after{
content: "";
background: url(${triangle}) repeat-x;
background-size: 24px 10px;
position: absolute;
width:100%;
height: 20px;
bottom: -10px;
left:0;
z-index: 1;
transform: rotate(180deg);
}
`

const Logo = styled.div`
font-size: 4rem;
font-family: 'Playball', sans-serif;
text-decoration: none;
color: #000;
`

const Header = () => {
    return (
        <Wrapper>
            <Logo as={Link} to="/">Sovrana</Logo>
            <Navbar />
        </Wrapper>
    );
};

export default Header;
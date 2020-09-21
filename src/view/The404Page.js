import React from 'react';
import styled from 'styled-components'
import {ReactComponent as LeftArrow} from "../assets/svg/left-arrow.svg"
import {Link} from "react-router-dom";

const Wrapper = styled.div`
width:100%;
height: 100%;
position:absolute;
top:0;
left:0;
z-index: 1000;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:#ff5200;

    h1 {
        font-size: 30rem;
        text-shadow: 2px 2px 5px  #212121;
        margin: 0;
    }
    
    h2 {
        margin: 0;
        font-size: 3rem;
    }
`

const Button = styled.button`
background: transparent;
border:2px solid #ff5200;
width:200px;
height: 45px;
font-size: 2.2rem;
color:#ff5200;
margin-top: 3rem;
transition: .2s all ease-in-out;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;

    &:hover {
        cursor: pointer;
        background: #ff5200;
        color:#fff;
        transition: .2s all ease-in-out;

        path {
             fill:#fff;
             transition: .2s all ease-in-out;
        }
    }

    svg {  
    width: 50px;
    height: 30px;
    padding-right: 2rem;
    
        path {
            fill:#ff5200;
            transition: .2s all ease-in-out;
        }
    }
`

const The404Page = () => {
    return (
        <Wrapper>
        <h1>404 </h1>
            <h2>Sorry! The page you were looking for doesnt't exist!</h2>
            <Button as={Link} to="/"><LeftArrow /> Go Back</Button>
        </Wrapper>
    );
};

export default The404Page;
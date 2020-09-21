import React from 'react';
import styled, {css} from "styled-components";


export const StyledButton = styled.button`
display: ${({none})=> none? "none": "flex"};
background-color: transparent;
border:1px solid #fff;
height: 45px;
width: 150px;
color:#fff;
font-weight: 600;
font-size: 1.4rem; 
font-family:"Josefin Sans",sans-serif;
transition: .3s ease-in-out;
z-index: 120;
text-decoration: none;
align-items: center;
justify-content: center;

&:hover{
cursor: pointer;
border-color: #ff5200;
transition: .3s ease-in-out;
}

    ${({secondary})=> secondary && css`
    border:2px solid #fff;
    color:#fff;
    font-weight: 600;
    margin:2rem;
    border-radius: 3px;
    
        &:hover{
        cursor: pointer;
        border:2px solid #fff;
        transform:translateY(-5px);
        box-shadow: 0 30px 30px -20px #212121;
        transition: .3s ease-in-out;
        }
    `}
    
    
     ${({tertiary})=> tertiary && css`
    border:2px solid #ff5200;
    color:#ff5200;
    font-weight: 600;
    margin:2rem auto;
    border-radius: 3px;
    
        &:hover{
        cursor: pointer;
        border:2px solid #999999;
        transform:translateY(-5px);
        box-shadow: 0 30px 30px -20px #212121;
        transition: .3s ease-in-out;
        }
    `}
`


const Button = ({children, none, secondary, tertiary, ...props}) => {
    return (
        <StyledButton none={none} secondary={secondary} tertiary={tertiary} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
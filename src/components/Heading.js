import React from 'react';
import styled, {css} from "styled-components"
import triangle from "../assets/images/triangle_bg.png"
import {device} from "../assets/device";
import {Link} from "react-router-dom";
import Button from "./Button";



const Image = styled.div`
padding: 0 15%;
background: ${({img})=> `url(${img}) no-repeat`}  ;
background-attachment: scroll;
background-position: center;
background-size: cover;
width: 100%;
height: 85vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;


 @media ${device.tablet} {
     background-attachment: fixed;
     background-position: inherit;

    }
    
    span {
      font-family: 'Playball', sans-serif;
    }

    h1 {
        font-size: 4rem;
        color: #fff;
        text-shadow: 2px 2px #212121;
        position: relative;
        z-index: 120;
        text-align: center;
    
            @media ${device.tablet}{
                font-size: 6.4rem;
                max-width: 1150px;
            }
        
             @media ${device.laptop}{
                font-size: 8.5rem;
                max-width: 1150px;
            }
    }

    &::before {
        content: "";
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        background-color: rgba(0,0,0,0.59);
    }


    &::after {
        content: "";
        background: url(${triangle}) repeat-x;
        background-size: 24px 10px;
        position: absolute;
        width:100%;
        height: 20px;
        bottom:-11px;
        left:0;
        z-index: 2;
    }
    
    ${({secondary})=>
            (secondary && css`
        background-position: bottom;
            height: 250px;
            align-items: center;
            flex-wrap: nowrap;
            
          
            
              h1 {
                  font-size: 3.5rem;
                  text-transform: uppercase;
              }
              
              @media ${device.tablet} {
                height:350px;
                    
                     h1 {
                          font-size: 5rem;
                          text-transform: uppercase;
                      }
            }
        `)
    }


`




const Heading = ({title, img,none, secondary }) => {
    return (
            <Image img={img} secondary={secondary} >
                <h1>{title}</h1>
                <Button as={Link} to="/Menu" none={none}>Zobacz Oferte</Button>
            </Image>
    );
};

export default Heading;
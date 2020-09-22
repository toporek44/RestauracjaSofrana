import React, {useState} from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ReactComponent as BaptismIcon} from "../assets/svg/baptism.svg"
import {ReactComponent as WeddingIcon} from "../assets/svg/wedding_people.svg"
import {ReactComponent as CommunionIcon} from "../assets/svg/communion.svg"
import {ReactComponent as ConfettiIcon} from "../assets/svg/confetti.svg"
import {ReactComponent as TapIcon} from "../assets/svg/tap.svg"
import {ReactComponent as ChildrenIcon} from "../assets/svg/baby.svg"
import {ReactComponent as LedIcon} from "../assets/svg/led.svg"
import {ReactComponent as DanceRoomIcon} from "../assets/svg/dance-floor.svg"
import {ReactComponent as ClientIcon} from "../assets/svg/client.svg"
import Button from "../components/Button";
import {device} from "../assets/device";

const OfferWrapper = styled.div`
width:100%;
min-height: 700px;
display:grid;
background:#FF7241;
grid-template-columns: repeat(1, 1fr) ;
margin:0 auto;
overflow: hidden;


  @media ${device.laptop} {
      grid-template-columns: repeat(4, 1fr) ;
  }
`

const Rect = styled.div`
overflow: hidden;
position:relative;
top:0;
left:0;
height: 100%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:0;
font-size: 2rem;
padding:6rem 2rem;
text-align: center;
color:#FF7241;
z-index: 500;


    &:nth-child(2n + 1) {
       background: #FF7241;
       color: #fff;
 
    }
    
    //Upper Rect White
    .white {
       background: #fff;
       color: #FF7241;
       
          path {
              fill:#FF7241 ;
          }
     }

    
     
`

const StyledSvg = styled.div`

* {
width:${({big}) => !big ? "100px" : "50px"};
height: ${({big}) => !big ? "100px" : "50px"};
margin:2rem 0;

            path {
              fill: ${({secondary}) => secondary ? "#FF7241" : "#fff"}
            }
}            
`
const HoveredRect = styled.div`
position:absolute;
top:0;
left:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
height: 100%;
background: #FF7241;
margin:0;
transition: all 1.5s ease-in-out;
color:#fff;
z-index: 9999;

    &:hover {
        cursor: pointer;
        transform: translateY(-300%) ;
        transition: all 0.8s ease-in-out;
    }
`

const EventsOfferWrapper = styled.ul`
list-style: none;
margin:3rem 0;
min-height: 400px;
width:100%;
display: grid;
align-items: center;
justify-items: center;
padding:2rem 1rem;
grid-template-columns: repeat(1, 1fr) ;
grid-template-columns: repeat(1, 1fr) ;
box-shadow: 5px 0 20px -16px #212121;
text-align: center;
font-size: 2.9rem;


     @media ${device.laptop} {
         grid-template-columns: repeat(4, auto) ;
         grid-template-columns: repeat(2, 1fr) ;
         padding: 0 1rem;
         box-shadow:none;
         font-size: 3.2rem;

      }
`


const EventsOfferItem = styled.li`
margin:0;
padding: 0;
font-size: 3rem;
color: #ff5200;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    
    
    svg {
    width:60px;
    height: 60px;
    
      path  {
          fill: #ff5200;
        }
    }
    
    p {
        position:relative;
        line-break: auto;
        
        &::before {
            content: "";
            position:absolute;
            top:-10px;
            left:-24px;
            width:97%;
            height: 100%;
            z-index: -1;
            background: rgba(255,78,0,0.23);
            margin: 0 2rem;
        }
    }
`
const ContactUs = styled.div`
text-align: center;
height: 400px;
width:100%;
padding:0 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #FF7241;
color:#fff;
font-size: 3.2rem;
margin-top: 5rem;
`

const StyledTapIcon = styled(TapIcon)`
position:absolute;
bottom:50px;
width:40px;
height: 40px;
      
      &:hover{
      cursor: pointer;
      }
  
     @media ${device.laptop} {
          display: none;
      }
`
const Events = () => {


    return (
        <>
            <OfferWrapper>
                <Rect>
                    <StyledSvg big>
                        <WeddingIcon className="categorySvg"/>
                    </StyledSvg>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu non ante rhoncus egestas.
                    Vestibulum
                    mollis congue nulla dapibus dictum. Nulla molestie sed ligula in molestie. Aenean vitae molestie
                    augue,
                    et sollicitudin massa. Mauris ut justo a purus euismod egestas. Cras porttitor lectus ut lacus
                    luctus,
                    eget ornare felis bibendum. Cras ac eros quis lorem porta vehicula.
                    <HoveredRect >
                        Wesela
                        <StyledSvg>
                            <WeddingIcon className="categorySvg"/>
                        </StyledSvg>
                        <StyledTapIcon/>
                    </HoveredRect>
                </Rect>
                <Rect>
                    <StyledSvg big secondary>
                        <CommunionIcon className="categorySvg"/>
                    </StyledSvg>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu non ante rhoncus egestas.
                    Vestibulum
                    mollis congue nulla dapibus dictum. Nulla molestie sed ligula in molestie. Aenean vitae molestie
                    augue,
                    et sollicitudin massa. Mauris ut justo a purus euismod egestas. Cras porttitor lectus ut lacus
                    luctus,
                    eget ornare felis bibendum. Cras ac eros quis lorem porta vehicula.
                    <HoveredRect className="white" >
                        Komunie
                        <StyledSvg>
                            <CommunionIcon className="categorySvg"/>
                        </StyledSvg>
                        <StyledTapIcon/>
                    </HoveredRect>
                </Rect>
                <Rect>
                    <StyledSvg big>
                        <BaptismIcon className="categorySvg"/>
                    </StyledSvg>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu non ante rhoncus egestas.
                    Vestibulum
                    mollis congue nulla dapibus dictum. Nulla molestie sed ligula in molestie. Aenean vitae molestie
                    augue,
                    et sollicitudin massa. Mauris ut justo a purus euismod egestas. Cras porttitor lectus ut lacus
                    luctus,
                    eget ornare felis bibendum. Cras ac eros quis lorem porta vehicula.
                    <HoveredRect>
                        Chrzty
                        <StyledSvg>
                            <BaptismIcon className="categorySvg"/>
                        </StyledSvg>
                        <StyledTapIcon/>
                    </HoveredRect>
                </Rect>
                <Rect>
                    <StyledSvg big secondary>
                        <ConfettiIcon className="categorySvg"/>
                    </StyledSvg>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu non ante rhoncus egestas.
                    Vestibulum
                    mollis congue nulla dapibus dictum. Nulla molestie sed ligula in molestie. Aenean vitae molestie
                    augue,
                    et sollicitudin massa. Mauris ut justo a purus euismod egestas. Cras porttitor lectus ut lacus
                    luctus,
                    eget ornare felis bibendum. Cras ac eros quis lorem porta vehicula.
                    <HoveredRect className="white">
                        Inne
                        <StyledSvg>
                            <ConfettiIcon className="categorySvg"/>
                        </StyledSvg>
                        <StyledTapIcon/>
                    </HoveredRect>
                </Rect>
            </OfferWrapper>
            <EventsOfferWrapper>
                <EventsOfferItem>
                    <DanceRoomIcon/>
                    <p>
                        4 Sale
                    </p>
                </EventsOfferItem>
                <EventsOfferItem>
                    <ClientIcon/>
                    <p>
                        Indywidualne podejście
                    </p>
                </EventsOfferItem>
                <EventsOfferItem>
                    <LedIcon/>
                    <p>
                        Klimatyzacja i Oświetlenie LED
                    </p>
                </EventsOfferItem>
                <EventsOfferItem>
                    <ChildrenIcon/>
                    <p>
                        Dzieci do lat 5 Gratis, a do lat 10 – 50% ceny
                    </p>
                </EventsOfferItem>
            </EventsOfferWrapper>
            <ContactUs>
                <p>Zorganizuj z Nami Swoje Wydarzenie</p>
                <Button as={Link} to="/kontakt">Napisz do Nas</Button>
            </ContactUs>
        </>
    );
};

export default Events;
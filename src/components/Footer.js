import React from 'react';
import styled from "styled-components"
import triangle from "../assets/images/triangle_bg.png";
import {NavLink, Link} from "react-router-dom";
import {device} from "../assets/device";
import {ReactComponent as Fb} from "../assets/svg/facebook.svg";
import {ReactComponent as Yt} from "../assets/svg/youtube.svg";
import {ReactComponent as Address} from "../assets/svg/adress.svg";
import {ReactComponent as Phone} from "../assets/svg/phone.svg";
import {ReactComponent as Email} from "../assets/svg/mail.svg";
import {ReactComponent as GearIcon} from '../assets/svg/gear.svg'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
position:relative;
bottom: 0;
left: 0;
background-color: #fff;
z-index: 999;
padding: 3rem 0;

    &::before {
        content: "";
        background: url(${triangle}) repeat-x;
        background-size: 24px 10px;
        position: absolute;
        width:100%;
        height: 20px;
        top:-10px;
        z-index: 0;
    }

    h2 {
        font-size: 4rem;
        font-family: 'Playball', sans-serif;
    }
    
    h3 {
        font-size: 2.7rem;
    }
`

const FooterNav = styled.div`
display:flex;
justify-content:center ;
align-items: center;
padding: 1rem 0;
position: relative;
z-index: 999;
 flex-direction: column;

    .active {
      color:#ff5200;
    }


     @media ${device.tablet} {
       flex-direction:row;
    }

`

const StyledNavLink = styled(NavLink)`
display: flex;
font-weight: 300;
font-size: 2.2rem;
text-decoration: none;
margin: 1rem 0 0 0  ;
text-decoration: none;
color:#000;
 
     @media ${device.tablet} {
        display:flex;
        margin: 0 2rem;
    }

    &:hover {
        color:#ff5200;
    }
`

const Socials = styled.div`
display: flex;
justify-content: center;
align-items: center;

    a {
        display: block;
        height: 100%;
        width: 100%;
    }

    svg {
        width:50px;
        height: 50px;
        margin: 0 1rem;
        
        &:hover {
            cursor: pointer;
            fill: #212121;
        }
    }
`

const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 3rem 1rem 4rem 1rem;

    @media ${device.tablet} {
        flex-direction:row;
    }

    svg {
        height: 40px;
        width: 40px;
        margin: 0 1.3rem 0 0;
    }

    span {
        display: flex;
        align-items: center;
        margin-top: 1.5rem;
    
        @media ${device.tablet}{
            flex-direction:row;
            margin: 0 1rem;
        }
    
        a {
            text-decoration: none;
            color: #000000;
        }
    
        .numberContainer {
            display: flex;
            flex-direction: column;
        }
    }
`
const ManageWebsite = styled.div`
position:absolute;
bottom: 10px;
left: 10px;
display: flex;
justify-content: center;
align-items: center;
color:#212121;
text-decoration: none;

    svg {
        width:15px;
        height: 15px;
        margin-right: .7rem;
    
            path {
              fill: #212121;
            }
    }
    
    span {
        font-size: 1.2rem;
        font-weight: 300;
    }
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const PhoneNumber = styled.a`
text-decoration: none;
min-width: 100px;
color: #000000;
margin:.3rem 0;
`
const Footer = () => {
    return (
        <Wrapper>
            <h2>Sovrana</h2>
            <FooterNav>
                <StyledNavLink
                    to='/'
                    exact
                    activeClassName='active'
                >
                    Home
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
                    Events
                </StyledNavLink>

                <StyledNavLink
                    to='/Kontakt'
                    exact
                    activeClassName='active'
                >
                    Contact
                </StyledNavLink>


            </FooterNav>

            <h3>Nasze SocialMedia</h3>

            <Socials>
                <a href="https://www.facebook.com/sovrana.szczucin"><Fb/></a>
                <a href="https://www.youtube.com/channel/UClqNVcNueXGfNnNxWIADdFQ/videos"><Yt/></a>
            </Socials>

            <ContactWrapper>
                <span><Address/> Ul. Radomyślska 3, 33-230 Szczucin</span>
                <span>
                    <Phone/>
                    <div className="numberContainer">
                        <PhoneNumber href="tel:796 939 892">796 939 892,</PhoneNumber>
                        <PhoneNumber  href="tel:784 442 164">784 442 164,</PhoneNumber>
                        <PhoneNumber  href="tel:14 644 19 54">14 644 19 54</PhoneNumber>
                    </div>
                </span>
                <span>
                    <Email/>
                    <a href = "mailto: sovrana@restauracjasovrana.pl">sovrana@restauracjasovrana.pl</a>
                </span>
            </ContactWrapper>
            <span>All Rights Reserved ⓒ Sovrana 2020</span>
            <ManageWebsite as={Link} to="/Login"><GearIcon/><span>Manage Website</span></ManageWebsite>
        </Wrapper>
    );
};

export default Footer;
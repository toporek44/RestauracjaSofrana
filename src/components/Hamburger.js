import React, { useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {device} from '../assets/device';


const HambItem = () => `
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ff5200;
    height: 2px;
    width: 25px;
    z-index: 3000;

`;

const HamburgerWrapper = styled.div`
  .hamburgerWrapper {
    padding: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    display: inline-block;
    z-index: 3000;
    
    @media ${device.tablet}{
display:none;
}
    
    &:focus{
    outline: none;
    }
  }

//Middle Hamburger Item
  .hamburgerItem {
    ${HambItem};
    transition: all 0.3s 0.2s ease-in;

    &Active {
      ${HambItem};
      z-index: 2000;
      width: 0;

//Hamburger \ Item 
      ::before {
        ${HambItem};

        content: "";
        width: 30px;
        transform-origin: center;
        background-color: #ff5200;
        transform: translateY(-12px);
        transform: rotate(45deg);
        transition: transform 0.3s 0.2s ease-out;
      }

// Hamburger Item /
      ::after {
        ${HambItem};

        content: "";
        width: 30px;
        transform-origin: center;
        background-color: #ff5200;
        transform: translateY(8px);
        transform: rotate(-45deg);
        transition: transform 0.3s 0.2s ease-out;
      }
    }

//Upper Hamburger Item

    ::before {
      ${HambItem};

      content: "";
      width: 30px;
      transform: translate(0, -9px);
      transition: transform 0.3s 0.2s ease-in;
    }
//Lower Hamburger Item

    ::after {
      ${HambItem};

      content: "";
      width: 30px;
      transform: translate(0, 7px);
      transition: transform 0.3s 0.2s ease-in;
    }
  }
`;
const Sidebar = () => `
width: 250px;
height: 100vh;
background-color: #fff;
position: fixed;
top: 0;
right: 0;
transition: transform 0.3s 0.2s ease-in-out;
box-shadow: 0 0 16px -10px #000;
z-index: 2000;

`;
const SidebarStyles = styled.div`
  .sidebar {
    ${Sidebar};
    transform: translateX(250px);
  }
  .sidebarActive {
    ${Sidebar};
    transform: translateX(0px);
  }

  .sidebarList {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 10rem 0 0 0;
    padding: 0;
    
       .activeLink li {
        color:#ff5200;
}
  }

  .sidebarItem {
    display:flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    font-size: 1.3em;
    color: black;
    font-weight: 500;
    padding:1rem 2rem;
    position:relative;
    z-index: 2000;

  }
`;

const StyledNavlink = styled(NavLink)`
    position: relative;
    margin:0;
    color:#ff5200;
    height: 60px;
    width:100%;
    border:none;
    text-decoration: none;
    display: flex;
   align-items: center;
  

`


const Hamburger = () =>{
    const [hamburgerActive, setHamburgerState] = useState(false);
    const pageNames = ["Home","Menu","Hotel","Imprezy", "Kontakt"];
    return (
        <HamburgerWrapper>
            <button
                onClick={() => setHamburgerState(!hamburgerActive)}
                className="hamburgerWrapper"
            >
                <div
                    className={
                        hamburgerActive ? "hamburgerItemActive" : "hamburgerItem"
                    }
                />
            </button>
            <SidebarStyles>
                <div className={hamburgerActive ? "sidebarActive" : "sidebar"}>
                    <ul className="sidebarList">
                        {pageNames.map((name)=>
                            <li key={name}  className="sidebarItem">
                                <StyledNavlink
                                    key={name}
                                    to={name === "Home" ? ('/') : (`/${name}`)}
                                    activeClassName='activeLink'
                                    exact
                                    onClick={() => setHamburgerState(!hamburgerActive)}
                                >


                                    {name}

                                </StyledNavlink>
                            </li>
                        )}
                    </ul>
                </div>
            </SidebarStyles>
        </HamburgerWrapper>

    );
}

export default Hamburger;



import React, {useContext} from 'react';
import * as firebase from "firebase";
import styled from "styled-components"
import Heading from "../components/Heading";
import MenuList from "../components/MenuList";
import MenuForm from "../components/MenuForm";
import Button from "../components/Button";
import {AuthContext} from "../Firebase/Auth";
import {SectionTitle} from "../view/Home"
import menuBanner from "../assets/images/menuBanner.jpg"

const OpenHours = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 350px;
background: #ff5200;
color:#fff;
font-size: 2rem;
padding-bottom: 7rem;
`

const HourWrapper = styled.div`
display: flex;
justify-content: space-between;
width:280px;
margin:1rem 0;

    span {
      margin-right: 2rem;
    }
`
const Menu = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <>
            <Heading
                img={menuBanner}
                title="MENU"
                none
                secondary
            />

                {currentUser?(
                    <>
                        <MenuForm />
                        <Button tertiary onClick={() => firebase.auth().signOut()}>Wyloguj</Button>
                    </>

                    ) : null}

            <MenuList secondary/>

            <OpenHours>
                <SectionTitle white>Godziny Otwarcia</SectionTitle>
                <HourWrapper><span>Poniedziałek</span> Nieczynne</HourWrapper>
                <HourWrapper><span>Wtorek - Piątek</span> 12.00 - 23.00</HourWrapper>
                <HourWrapper><span>Sobota </span> 12.00 - 24.00</HourWrapper>
                <HourWrapper><span>Niedziela </span> 12.00 - 23.00</HourWrapper>
            </OpenHours>
        </>
    );
};

export default Menu;
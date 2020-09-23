import React, { useEffect, useState} from 'react';
import styled from "styled-components"
import MenuListItem from "./MenuListItem";
import {device} from "../assets/device";
import {addSnapshot} from "../Firebase/firebase";

const Wrapper = styled.div`
background-color:${({secondary})=> secondary? "#fff": "#212121" };
padding: 3rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
font-size: 5rem;
color:#fff;
}

@media ${device.tablet}{
  padding: 2rem 2rem 10rem 2rem;
}
`

const CategoryList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
margin:0 ;
padding: 0 0 2rem 0 ;
border-bottom: 1.2px solid ${({secondary})=> secondary? "#6c6c6c": "#fff" };
`

const CategoryListItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 1.5rem;
list-style: none;
height: 35px;
color:#ff5200;
border:1px solid #ff5200;
border-radius: 2px;
margin: .7rem .7rem 0 0 ;
cursor: pointer;
 transition: .3s ease-in-out;

&:hover{
  background-color: #ff5200;
  color:#fff;
  transition: .3s ease-in-out;
}
`


const FoodList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 80%;
align-items: center;
padding: 2rem 0;
margin:0;
display:flex;


`

const MenuList = ({secondary}) => {
    const menuCategories = ["Przystawki","Dania Główne", "Desery", "Drinki", "Sałatki"]
    const [menuItems, setMenuItems] = useState([])
    const [activeTab, setActiveTab] = useState("Przystawki");

    const handleCheckCategory = e => {
        const index = e.target.innerText
        if (index !== activeTab) {
            setActiveTab(index);
        }
    };

    useEffect(()=>{
        addSnapshot("Menu", setMenuItems)
    },[])


     return (

        <Wrapper secondary={secondary}>
            <h2>Menu</h2>
            <CategoryList secondary={secondary}>
                {
                    menuCategories.map((item, id,a )=>(


                        <CategoryListItem secondary={secondary} onClick={handleCheckCategory} key={a[id]}   id={id}>{menuCategories[id]}</CategoryListItem>


                    ))
                }
            </CategoryList>


                {
                        <FoodList>
                            {
                                    menuItems.map(( {img, name, desc, price, category, id}, a ) => {
                                    return   <MenuListItem
                                        img={img}
                                        name={name}
                                        desc={desc}
                                        price={price}
                                        key={id}
                                        id={id}
                                        activeTab={activeTab === category}
                                    />
                                    })
                            }

                        </FoodList>

                }

        </Wrapper>

    );
};

export default MenuList;
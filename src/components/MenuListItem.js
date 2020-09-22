import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {ReactComponent as CloseBtn} from "../assets/svg/close.svg";
import {ReactComponent as EditIcon} from "../assets/svg/edit.svg";
import foodImg from "../assets/images/foodImg.jpg"
import {device} from "../assets/device";
import firebase, {deleteDoc} from "../Firebase/firebase";
import {AuthContext} from "../Firebase/Auth";
import {CARD_TYPES} from "../constants";
import {FormContext} from "../contexts/FormContext";

const MenuItem = styled.li`
display: ${({ activeTab })=> activeTab? "flex" : "none"};
flex-direction: column;
align-items: center;
justify-content: center;
width:500px;
min-height: 140px;
border: 2.2px solid #949494;
border-radius: 5px;
padding: 1.4rem 1.4rem;
list-style: none;
color:#212121;
position: relative;
margin: 2rem 1rem;
transition: .2s ease-in-out;

&:hover{
cursor: pointer;
border-color: #ff5200;
transition: .2s ease-in-out;
}


    
    
    @media ${device.tablet}{
      flex-direction:row;
      align-items: start;

    }
`
const FoodImage = styled.img`
        max-width: 150px;
        width: auto;
        height: 120px;
        background-size: cover;
        margin-right: 2rem;
        border-radius: 5px;
`
const DescWrapper = styled.div`
display: flex;
min-width: 243px;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;

    h3{
        font-size: 1.8rem;
        margin-top: 1rem;
    }
    
    .description{
        margin:0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 200;
    }
    
    
    
    @media ${device.tablet}{
      align-items: start;
      
      
      .description{
        margin:0 1rem 0 0 ;
    }
    }
`
const Price = styled.div`
font-size: 1.8rem;
font-weight: 700;
`

const StyledCloseBtn = styled(CloseBtn)`
width: 17px;
height: 17px;
position: absolute;
bottom: 15px;
right: 15px;
transition: .3s ease-in-out;

    path{
      fill: #ff2600;
      transition: .2s ease-in-out;
    }
    &:hover{
    cursor: pointer;
    
        path {
            fill: #212121;
            transition: .2s ease-in-out;
        }
    }
`

const Warning = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -100%);
width:320px;
height: 150px;
background: #FF7241;
display: ${({warningActive}) => warningActive ? "flex" : "none"};
justify-content: center;
align-items: center;
z-index: 2000;
flex-direction: column;
font-size: 1.9rem;
box-shadow: 2px 4px 10px -9px #212121;
color:#fff;
border-radius: 2px;
`
const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 2rem;
`

const DecisionBtn = styled.button`
background: ${({red}) => red ? "#fff" : "#ff5221"};
width:90px;
height: 36px;
border:2px solid ${({red}) => red ? "#fff" : "#ff5221"};
border-radius: 5px;
color:${({red}) => red ? "#ff5221" : "#fff"};
font-size: 1.7rem;
transition: all .2s ease-in-out;

    &:hover {
        cursor: pointer;
        background: ${({red}) => red ? "#ff5221" : "#fff"};
        color:${({red}) => !red ? "#ff5221" : "#fff"};
    }
`


const StyledEditIcon = styled(EditIcon)`
position: absolute;
width: 17px;
height: 17px;
bottom: 15px;
right: 60px;

    &:hover {
     cursor: pointer;
     fill: #00a62b;
     transition: .2s ease-in-out;
    }
`
const MenuListItem = ( { img, name="PizzaMargarita", desc, price, activeTab , id,  ...props } ) => {
    const [warningActive, setWarningActive] = useState(false)
    const {currentUser} = useContext(AuthContext)
    const {setItemID, setUpdateActive, setNewValues} = useContext(FormContext)

        const handleUpdateItem =   () => {
            setUpdateActive(true)
            setItemID( id )
            // setNewValues({
            //     name: name,
            //     img: img,
            //     desc: desc,
            //     price: price,
            // })
        }

    return (
        <MenuItem {...props} activeTab={activeTab} >

            <Warning warningActive={warningActive}>
                Are you sure to delete?
                <ButtonsContainer>
                    <DecisionBtn onClick={(e) => {
                        e.stopPropagation()
                        deleteDoc("Menu", id)
                        setWarningActive(false)
                    }}>Yes</DecisionBtn>
                    <DecisionBtn red onClick={(e) => {
                        e.stopPropagation()
                        setWarningActive(false)
                    }}>No</DecisionBtn>
                </ButtonsContainer>
            </Warning>
            <FoodImage src={img ===""? foodImg : img} alt={name}/>
            <DescWrapper>
                <h3>{name}</h3>
                <div className="description">
                    {desc}
                </div>
            </DescWrapper>
            <Price> {price}PLN</Price>

            {currentUser? (
              <>
                  <StyledCloseBtn onClick={()=>{
                    setWarningActive(true)
                     }}
                  />
                  <StyledEditIcon onClick={handleUpdateItem}/>
            </>
            ) : null}


        </MenuItem>
    );
};

export default MenuListItem;

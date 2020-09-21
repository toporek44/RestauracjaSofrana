import React, {useContext} from 'react';
import styled from "styled-components";
import {ReactComponent as CloseBtn} from "../assets/svg/close.svg";
import foodImg from "../assets/images/foodImg.jpg"
import {device} from "../assets/device";
import {deleteDoc} from "../Firebase/firebase";
import {AuthContext} from "../Firebase/Auth";

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
    path{
    fill: #212121;
    transition: .2s ease-in-out;
    }
}
`

const MenuListItem = ({img, name="PizzaMargarita",desc,price,activeTab ,id ,  ...props}) => {

    const {currentUser} = useContext(AuthContext)

    return (
        <MenuItem {...props} activeTab={activeTab} >
            <FoodImage src={img===""? foodImg : img} alt={name}/>
            <DescWrapper>
                <h3>{name}</h3>
                <div className="description">{desc}
                </div>
            </DescWrapper>
            <Price> {price}PLN</Price>

            {currentUser? <StyledCloseBtn onClick={(e)=>{
                e.stopPropagation()
                deleteDoc("Menu", id)
            }}/>: null}


        </MenuItem>
    );
};

export default MenuListItem;

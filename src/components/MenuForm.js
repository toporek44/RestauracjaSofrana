import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import firebase from "../Firebase/firebase";
import styled from "styled-components"
import {device} from "../assets/device";
import { useFormik } from "formik";
import * as Yup from "yup"
import Button from "./Button";
import {ReactComponent as Arrow} from "../assets/svg/arrow.svg";
import {CARD_TYPES} from "../constants";
import {AuthContext} from "../Firebase/Auth";
import {FormContext} from "../contexts/FormContext";


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 300px;
height: 100%;
background: #fff;
position: fixed;
top:0;
left:0;
transform-origin: 50% 50%;
transform: ${({isModalOpen}) => isModalOpen ? "translateX(0) " : " translateX(-250px) "};
transition: .6s ease-in-out;
z-index: 2000;
margin-bottom: 5rem;
box-shadow: 4px 0 20px -12px #212121;
padding:2rem 0;

@media ${device.tablet}{
flex-direction:row;

}



`

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:350px;
height: 100%;
background-color: #fff;
padding: 4rem 2rem 2rem 2rem;
z-index: 1000;
position: relative;
color: #ff5200;
opacity:  ${({isModalOpen}) => isModalOpen ? 1 : 0};
transition: .4s all ease-in-out;

h3{
font-size: 2.5rem;
padding: 3rem 0;
}

label{
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
width:250px;
    
    select{
        margin:1.5rem 0 ;
        width:150px;
        background-color: transparent;
        height: 33px;
        border: 2px solid #ff5200;
        color: #ff5200;
        padding: 0 2rem;
        font-size: 1.3rem;
        
            &:hover{
            cursor: pointer;
            }
            
        option{
        background-color: #fff;        
        }
    }
    
    input{
    border:none;
    background: none;
    border-bottom: 2px solid #ff5200;
    margin:0.7rem 0 1rem 0;
    font-size: 1.5rem;
    color: #ff5200;
    width:100%;
    height: 30px;
    padding: 1.3rem;
    transition: .3s ease-in-out;
    transform-origin: 50%;
    margin: 1.5rem 0 ;
    
        &:focus{
        outline: none;
        transition: .3s ease-in-out;
        transform: scale(0.97);
        }
    }
    
    
}
`
const StyledArrow = styled(Arrow)`
width:30px;
height: 30px;
position:absolute;
top:15px;
right:10px;
fill: #ff5200;
transform:${({isModalOpen}) => isModalOpen? "rotate(0deg)" : "rotate(180deg) "};
transition: all .7s ease-in-out;
z-index: 2001;

&:hover{
cursor: pointer;
}

`


export const StyledErrorMessage = styled.div`
position:relative;
top:-8px;
color:#de6363;
background: #fff;
padding: .3rem;
font-size: 1.4rem;
text-align: center;
margin:0 auto;
z-index: 999;
`


const TextArea = styled.textarea`
min-height: 120px;
width: 100%;
border:none;
border-bottom:2px solid #ff5200;
background: transparent;
margin: 1.7rem 0;
font-size: 1.7rem;
color:#ff5200;
resize: none;

 &:focus{
        outline: none;
        transition: .3s ease-in-out;
        transform: scale(0.97);
        }
`

const MenuForm = () => {
    const [isModalOpen, setModalState] = useState(true)
    const select = useRef(null)
    const { isUpdateActive, itemID} = useContext(FormContext)


    const { handleSubmit, errors, touched, values, handleReset, getFieldProps, setValues } = useFormik({
        initialValues:
            {
                name: "",
                img: "",
                desc: "",
                price: "",
                category: CARD_TYPES.starters,

            },

        validationSchema: () =>
            !isUpdateActive?

                Yup.object({
            name: Yup.string().required("Required"),
            img: Yup.string().required("Required"),
            desc: Yup.string().required("Required"),
            price :Yup.string().required("Required"),
        })
         :
                 Yup.object({
            name: Yup.string().notRequired("Required"),
            img: Yup.string().notRequired("Required"),
            desc: Yup.string().notRequired("Required"),
            price :Yup.string().notRequired("Required"),
        }),

        onSubmit: (values,{ setSubmitting }) => {

            if(isUpdateActive) {
                firebase.firestore().collection("Menu").doc(itemID).update({
                    ...values
                })
                    .then(() => {
                        setValues({
                            ...values,
                            name: "",
                            img: "",
                            desc: "",
                            price: "",
                            category: CARD_TYPES.starters,

                        })

                    })
            } else {
                firebase.firestore().collection("Menu").add({
                    ...values
                })
                    .then(() => {
                        setValues({
                            ...values,
                            name: "",
                            img: "",
                            desc: "",
                            price: "",
                            category: CARD_TYPES.starters,

                        })

                    })
            }

            if(Object.keys(errors).length !== 0) return

            setTimeout(() => {
                setSubmitting(false);
            }, 400);
            select.current.value = CARD_TYPES.starters


        }

    })



    return (
        <>
            <Wrapper
                isModalOpen={isUpdateActive? isUpdateActive : isModalOpen}
            >
                <StyledArrow isModalOpen={isUpdateActive? isUpdateActive : isModalOpen}onClick={()=>{
                    setModalState(!isModalOpen)
                    handleReset(undefined)
                }}/>
                <StyledForm onSubmit={handleSubmit} isModalOpen={isUpdateActive? isUpdateActive : isModalOpen}>
                    <h3>{isUpdateActive? "Zaktualizuj Potrawe" : "Dodaj Potrawe"}</h3>


                    <label>
                        Wybierz rodzaj potrawy

                        <select
                            onChange={e => {
                                    setValues({
                                            ...values,
                                            category: e.currentTarget.selectedOptions[0].value
                                        }
                                    )
                                }
                            }

                            ref={select}
                        >
                            <option value={CARD_TYPES.starters}>Przystawki</option>
                            <option value={CARD_TYPES.mains}>Dania Główne</option>
                            <option value={CARD_TYPES.desserts}>Desery</option>
                            <option value={CARD_TYPES.drinks}>Drinki</option>
                            <option value={CARD_TYPES.salads}>Sałatki</option>
                        </select>
                    </label>
                    <label>
                        Nazwa potrawy
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            {...getFieldProps("name")}
                        />
                    </label>
                    {errors.name && touched.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}

                    <label>
                        Link do zdjęcia
                        <input
                            type="text"
                            name="img"
                            id="img"
                            autoComplete="off"
                            {...getFieldProps("img")}

                        />

                    </label>
                    {errors.img && touched.img && <StyledErrorMessage>{errors.img}</StyledErrorMessage>}
                    <label>
                        Opis jedzenia
                        <TextArea
                            type="text"
                            name="desc"
                            {...getFieldProps("desc")}

                        />
                    </label>
                    {errors.desc && touched.desc && <StyledErrorMessage>{errors.desc}</StyledErrorMessage>}

                    <label>
                        Cena
                        <input
                            type="text"
                            name="price"
                            {...getFieldProps("price")}

                            onFocus={(e) => e.target.select()}
                        />
                    </label>
                    {errors.price  && touched.price && <StyledErrorMessage>{errors.price}</StyledErrorMessage>}

                    <Button tertiary type="submit">{isUpdateActive? "Zaktualizuj Dane" : "Dodaj"}</Button>
                </StyledForm>



            </Wrapper>
        </>
    );
};



export default MenuForm;
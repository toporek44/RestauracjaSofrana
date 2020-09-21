import React, {useState} from 'react';
import axios from "axios"
import  Button from "../components/Button";
import styled from "styled-components"
import {device} from "../assets/device";
import {ReactComponent as Email} from "../assets/svg/send_mail.svg"
import {ReactComponent as Smile} from "../assets/svg/smile.svg"

const Map = styled.iframe`
width:100%;
height: 300px;
border:0;

    @media ${device.laptop} {
      width:40%;
      height: 100%;
    }
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:0 auto;
min-height: 800px;
height: 100%;
 
    @media ${device.laptop} {
        flex-direction:row;
        height: 800px;
    }
    
`
const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 400px;
background: rgba(255,80,0,0.83);


      h2 {
          margin:0;
          color: #fff;
          font-size: 3.5rem;
      }
  
    @media ${device.laptop}{
      width: 60%;
      height:100%;
      
        h2 {
            font-size: 7rem;
        }
    }
`
const Field = styled.input`
font-family:"Montserrat",sans-serif;
background: transparent;
width:300px;
height: 55px;
border:2px solid #fff;
margin-bottom: 1.5rem;
border-radius: 3px;
padding: 1rem ;
color: #fff;
transition: transform .2s ease-in-out;
font-size: 1.3rem;

    &::placeholder{
        color: #fff;
    }

    &:focus {
        outline:none;
        transform: scale(1.01);
        transition: all .2s ease-in-out;
    }


    @media ${device.tablet}{
      width: 500px;
    }



    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }
`

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 4rem;
padding:9rem 1rem 0 1rem;

    svg {
      width:50px;
      height: 50px;
      margin-left:1rem;  

           @media ${device.tablet} {
              margin-left:2rem;  
              width:70px;
              height:70px;
          }
    }
`
const StyledTextArea = styled.textarea`
font-family:"Montserrat",sans-serif;
width:300px;
height: 200px;
border:2px solid #fff;
background: transparent;
border-radius: 3px;
color: #fff;
padding: 1rem ;
resize: none;
transition: all .2s ease-in-out;
font-size: 1.3rem;

    &::placeholder{
      color: #fff;
    }

    &:focus {
        outline:none;
        transform: scale(1.01);
        transition: transform .2s ease-in-out;
    }

    ::-webkit-scrollbar {
      width: 5px;
      
          &-track {
            background: #f1f1f1;
          }
          
          &-thumb {
            background: #888;
            border-radius: 4px;
          }
      }
      
      @media ${device.tablet} {
           width: 500px;
      }
  
`

const MailSentNotification = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 3rem;
color:#fff;
text-align: center;

    svg{
        height: 60px;
        width: 60px;
        margin:1rem 1.5rem;
    }
`
const Contact = () => {
    const [formState, updateFormState] = useState({
        name: '',
        email: '',
        message: "",
        mailSent: false,
        error: null
    });



    const sendEmail = (e) => {
        e.preventDefault();
        axios
            .post(
                process.env.REACT_APP_EMAIL_SEND_ENDPOINT,
                { ...formState, time: Date.now() },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            )
            .then((res) => {
                updateFormState({ ...formState, mailSent: true});
            })
            .catch((error) => {
                updateFormState({ ...formState, error });
            });

    };

    return (
        <>

            <Wrapper>

                {formState.mailSent?
                    <StyledForm>
                    <MailSentNotification>Wiadomość została wysłana <Smile/> </MailSentNotification>
                    </StyledForm>
                    :
                    <StyledForm onSubmit={(e)=> sendEmail(e)} >



                        <Header>
                            <h2>Napisz do nas</h2>
                            <Email/>
                        </Header>

                        <Field
                            type="text"
                            placeholder="Imię"
                            onChange={(e) => {
                                updateFormState({ ...formState, name: e.target.value });
                            }}
                            value={formState.name}
                            name='name'
                        />
                        <Field
                            type="text"
                            placeholder="Email"
                            onChange={(e) => {
                                updateFormState({ ...formState, email: e.target.value });
                            }}
                            value={formState.email}
                            name='email'
                        />
                        <StyledTextArea
                            type="text"
                            placeholder="Wiadomość"
                            onChange={(e) => {
                                updateFormState({ ...formState, message: e.target.value });
                            }}
                            value={formState.message}
                            name='message'
                        />
                        <Button secondary type="submit">Wyślij</Button>
                    </StyledForm>
                }

                    <Map
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.157570929501!2d21.074225315726242!3d50.30765147945595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d63855d34cfa5%3A0x7628f63565e22281!2sRestauracja%20Sovrana!5e0!3m2!1spl!2spl!4v1599023850027!5m2!1spl!2spl"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    >
                    </Map>

            </Wrapper>

        </>
    );
};

export default Contact;
import React, {useCallback, useContext, useState} from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../Firebase/firebase";
import {AuthContext} from "../Firebase/Auth";
import styled from "styled-components"
import {device} from "../assets/device";
import Button from "../components/Button";


const Wrapper = styled.div`
position: relative;
margin:10rem auto;
width:80%;
max-width: 500px;
height: 50%;
min-height: 300px;
max-height: 400px;
border:3px solid #ff5200;
padding: 6rem 2rem ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 999;
color: #ff5200;

    h1{
       margin:1rem 0;
    }



    label {
        display: flex;
        justify-content: center;
        flex-direction: column;
    
            input {
                border:none;
                margin:0.7rem 0 1rem 0;
                font-size: 1.5rem;
                color: #ff5200;
                width:200px;
                height: 30px;
                padding: 1.3rem;
                transition:  outline-color .3s ease-in-out;
            
                    @media ${device.mobileL} {
                         width: 300px;
                    }
            }
        
            *:focus {
                outline:  2px solid #ff5200;
                transition: outline-color .3s ease-in-out;
            }
        }

`

const IncorrectLogin = styled.div`
color: #ff4843;
font-size: 1.2rem;
display: ${ ( {viewErrorMessage} ) => viewErrorMessage? "block" : "none" };
margin:0 0 1rem 0;
`

const ResetButton = styled.button`

    &&& {
        position: absolute;
        height: 20px;
        bottom:5px;
        right:2px;
        border:none;
        background:transparent;
        cursor: pointer;
        color: #212121;
        font-size: 1.2rem;
        width: 120px;
        left:initial;
        transform: initial;
    }
`


const Login = ({ history }) => {
    const [email, setEmail] = useState("")
    const [isResetModalOpen, setResetModalOpen] = useState(false)
    const [viewErrorMessage, setViewErrorMessage] = useState(false)

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword( email.value, password.value );
                history.push("/Menu");
            } catch ( error ) {
                setViewErrorMessage( !viewErrorMessage )
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if ( currentUser ) {
        return <Redirect to="/Menu" />;
    }




    const resetPassword = ()=>{
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(function() {
        setResetModalOpen( !isResetModalOpen )
        setViewErrorMessage( !viewErrorMessage )
    }).catch(function(error) {
        setViewErrorMessage( !viewErrorMessage )
    });




}
    return (

            <Wrapper>
                <form onSubmit={handleLogin}>
                   { !isResetModalOpen? (
                       <>
                           <h1>Log in</h1>
                           <IncorrectLogin viewErrorMessage={viewErrorMessage} > Incorrect Email or Password! </IncorrectLogin>
                           <label>
                               E-mail
                               <input name="email" type="email" placeholder="Email" required />
                           </label>

                           <label>
                               Password
                               <input name="password" type="password" placeholder="Password"  required/>
                           </label>

                           <Button  tertiary type="submit">Log in</Button>

                           <ResetButton href="#" onClick={ () => {
                               setResetModalOpen(true)
                               setViewErrorMessage(!viewErrorMessage)
                           }}>
                               Forgot password?
                           </ResetButton>
                       </>
                       )
                       :
                       (
                           <>
                               <h2>Reset Password</h2>
                               <IncorrectLogin viewErrorMessage={viewErrorMessage}>Invalid E-mail! </IncorrectLogin>
                               <label htmlFor="">E-mail
                                   <input name="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
                                   <Button tertiary onClick={resetPassword} > Reset</Button>
                               </label>
                           </>
                       )
                   }
                </form>
            </Wrapper>

);
};

export default withRouter(Login);
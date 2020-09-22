import React, {createContext, useState} from "react";
import {CARD_TYPES} from "../constants";

export const FormContext = createContext();

export const FormProvider = ({ children }) =>{
        const [newValues,setNewValues] = useState({})
        const [isUpdateActive, setUpdateActive] = useState(false)
        const [itemID, setItemID] = useState(null)


    return(
        <FormContext.Provider  value={{
            newValues,
            setNewValues,
            isUpdateActive,
            setUpdateActive,
            setItemID,
            itemID,
        }}>
            {children}
        </FormContext.Provider>
    )
}
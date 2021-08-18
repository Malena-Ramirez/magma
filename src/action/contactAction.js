import { types } from "../types/types";
import { db } from "../firebase/firebaseConfig";

export const sendMessageContact = (id, name, email, message)=>{
    return async(dispatch) =>{

        const newMessage = {
            id: id,
            name: name,
            email: email,
            message: message
        }

        await db.collection('/contact').add(newMessage)        
        dispatch(sendContact(id, name, email, message))
    }
}

export const sendContact = (id, name, email, message) => {
    return{
        type: types.contactSend,
        payload: {
            id,
            name,
            email,
            message
        }
    }
}
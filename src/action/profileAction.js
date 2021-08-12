import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadProfile } from "../helpers/loadProfile";

export const profileAction = (userProfile) => {
    return async (dispatch, getState)=>{

        const {name} = getState().login;
        const {id} = getState().login;
        // console.log(state)
        const date = new Date();
        const updateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const newProfile = {
            name,
            profession: '',
            city: '',
            aboutMe: '',
            education: '',
            certificates: '',
            interest: '',
            idUser: id,
            updateDate
        }

        const docRef = await db.collection(`/profile`).add(newProfile);
        // console.log(docRef)
        dispatch(activeProfile(id, newProfile))
    }
}

export const activeProfile = (id, userProfile) => {
    return{
        type: types.profileActive,
        payload:{
            id,
            ...userProfile
        }
    }
}

export const setProfile = (userProfile) =>{
    return{
        type: types.profileLoad,
        payload: userProfile
    }
}

export const startLoadingProfile = (uid) => {
    return async (dispatch) => {
        const userProfile = await loadProfile(uid)
        dispatch(setProfile(userProfile))

    }
}
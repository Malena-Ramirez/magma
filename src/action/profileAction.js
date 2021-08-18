import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadProfile } from "../helpers/loadProfile";

export const profileAction = (phoneNumber = '', profession = '', city = '', education = '', aboutMe = '') => {
    return async (dispatch, getState) => {

        const { name, id, email, photo } = getState().login;

        const newProfile = {
            name,
            userId: id,
            email,
            photo,
            phoneNumber,
            profession,
            city,
            education,
            aboutMe
        }

        await db.collection(`/users`).add(newProfile);
        const profile = await loadProfile(id);
        dispatch(setProfile(profile));
        dispatch(startLoadingProfile(id));
    }
}

export const setProfile = (userProfile) => {
    return {
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
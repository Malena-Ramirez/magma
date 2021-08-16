import { db } from "../firebase/firebaseConfig";

export const loadProfile = async (id) => {

    const profileStore = await db.collection(`/profile`).get()
    const userProfile = [];

    profileStore.forEach(element => {
        userProfile.push({
            id: element.id,
            ...element.data()
        })
    });

    return userProfile;
}
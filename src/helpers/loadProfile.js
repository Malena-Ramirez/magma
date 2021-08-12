import { db } from "../firebase/firebaseConfig";

export const loadProfile = async (id) => {
    
    const profileStore = await db.collection(`/profile`).get()
    const userProfile = [];
    // console.log(profileStore);

    profileStore.forEach(hijo => {
        userProfile.push({
            id:hijo.id,
            ...hijo.data()
        })        
    });

    console.log(userProfile);
    return userProfile;
}
import { db } from "../firebase/firebaseConfig";

export const loadProfile = async (id) => {

    const profileStore = await db.collection(`/users`).get();
    const userProfile = [];

    profileStore.forEach(element => {
        userProfile.push({
            id: element.id,
            ...element.data()
        })
    });

    const currentProfile = userProfile.find(user => user.userId === id)

    return currentProfile;
}
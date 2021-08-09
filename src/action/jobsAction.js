import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";


export const jobsAction = (jobs) => {
    return async (dispatch, getState)=>{
        const uid = getState().login.id

        const newJobs = {
            name: '',
            description: '',
            requirements: '',
            type: '',
            city: '',
            salary: '',
            workDay: '',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/job/newJobs`).add(newJobs);
        console.log(docRef);
        dispatch(activeJob(uid,newJobs))
    }
}

export const activeJob = (id, jobs) => {
    return {
        type: types.jobsActive,
        payload: {
            id,
            ...jobs
        }
    }
}
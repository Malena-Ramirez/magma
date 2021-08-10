import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadJobs } from "../helpers/loadJobs";

export const activeJob = (id, jobs) => {
    return {
        type: types.jobsActive,
        payload: {
            id,
            ...jobs
        }
    }
}

export const jobsAction = (jobs) => {
    return async (dispatch, getState)=>{
        const {name} = getState().login;
        const {id} = getState().login;

        const newJobs = {
            name: name,
            jobName: '',
            description: '',
            requirements: '',
            type: '',
            city: '',
            salary: '',
            workDay: '',
            idBusiness: id,
            date: new Date().getTime()
        }
        const docRef = await db.collection(`Job/newJobs/${id}`).add(newJobs);
        console.log(docRef);
        dispatch(activeJob(id,newJobs))
    }
}

export const setJobs = (jobs) => {
    return{
        type: types.jobsLoad,
        payload: jobs
    }
}

export const startLoadingJobs = (uid) => {
    return async (dispatch)=>{
        const jobs = await loadJobs(uid)
        dispatch(setJobs(jobs))
    }
}
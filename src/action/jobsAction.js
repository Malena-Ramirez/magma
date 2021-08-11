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

export const jobsAction = (jobName, description, requirements, type, city, salary, workDay) => {
    return async (dispatch, getState)=>{
        const {name} = getState().login;
        const {id} = getState().login;

        const date = new Date();
        const updateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
        const newJobs = {
            name,
            jobName: jobName,
            description: description,
            requirements: requirements,
            type: type,
            city: city,
            salary: salary,
            workDay: workDay,
            idBusiness: id,
            updateDate
        }
        const docRef = await db.collection(`/Job`).add(newJobs);
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
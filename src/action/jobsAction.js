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

const getUpdateDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export const jobsAction = (jobName, city, salary, description) => {
    return async (dispatch, getState) => {
        const { id, name } = getState().login;

        const updateDate = getUpdateDate();

        const newJobs = {

            jobName,
            city,
            salary,
            description,
            idBusiness: id,
            name,
            updateDate
        }
        await db.collection(`/Job`).add(newJobs);
    }
}

export const setJobs = (jobs) => {
    return {
        type: types.jobsLoad,
        payload: jobs
    }
}

export const startLoadingJobs = () => {
    return async (dispatch) => {
        const jobs = await loadJobs()
        dispatch(setJobs(jobs))
    }
}
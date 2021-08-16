import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { loadJobs } from "../helpers/loadJobs";
import Swal from "sweetalert2";
import { color } from "../components/GlobalStyles/color";

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

export const startSaveJobs = (job) => {
    return async (dispatch) => {
        const { id, ...jobToFirestore } = job;
        jobToFirestore.updateDate = getUpdateDate();

        await db.doc(`/Job/${id}`).update(jobToFirestore);

        const jobs = await loadJobs();
        dispatch(setJobs(jobs));
        dispatch(startLoadingJobs());
    }
}

export const deleteJob = (id) => ({
    type: types.jobsDelete,
    payload: id
})

export const startDeletingJob = (id) => {
    return async (dispatch) => {
        await Swal.fire({
            title: '¿Desea eliminar la vacante?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: color.main,
            cancelButtonColor: color.secondary,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminada',
                    text: 'La vacante ha sido eliminada exitosamente.',
                    icon: 'success',
                    confirmButtonColor: color.main,
                }
                );
                db.doc(`/Job/${id}`).delete();

                dispatch(deleteJob(id));
            }
        })
    }
}
import { db } from "../firebase/firebaseConfig";

export const loadJobs = async (id = 0) => {
    const jobsStore = await db.collection(`/Job`).get();
    const jobs = [];

    jobsStore.forEach(element => {
        jobs.push({
            id: element.id,
            ...element.data()
        })
    })

    return jobs

}

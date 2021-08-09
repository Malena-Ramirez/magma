import { db } from "../firebase/firebaseConfig";

export const loadJobs = async (uid) => {
    
    const jobsStore = await db.collection(`${uid}/job/newJobs`).get()
    const jobs = []

    console.log(jobsStore)

    return jobs

}
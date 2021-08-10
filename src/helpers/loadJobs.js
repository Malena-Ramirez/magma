import { db } from "../firebase/firebaseConfig";

export const loadJobs = async (uid) => {
    
    const jobsStore = await db.collection(`${uid}/job/newJobs`).get()
    const jobs = []

    jobsStore.forEach(hijo =>{
        jobs.push({
            id:hijo.id,
            ...hijo.data()
        })
    })

    console.log(jobs)
    return jobs

} 

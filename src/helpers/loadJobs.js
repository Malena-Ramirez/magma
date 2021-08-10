import { db } from "../firebase/firebaseConfig";

export const loadJobs = async (id) => {
    
    const jobsStore = await db.collection(`/Job`).get()
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

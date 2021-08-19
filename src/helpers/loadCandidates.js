import { db } from "../firebase/firebaseConfig";

export const loadCandidates = async (companyId) => {

  const candidatesStore = await db.collection(`/candidates`).get();
  const candidates = [];

  candidatesStore.forEach(element => {
    candidates.push({
      id: element.id,
      ...element.data()
    })
  });

  const companyCandidates = candidates.filter(user => user.companyId === companyId)

  return companyCandidates;
}
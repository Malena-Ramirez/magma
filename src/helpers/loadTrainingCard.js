import { db } from "../firebase/firebaseConfig";

export const loadTrainingCard = async (id = 0) => {

  const trainingInfoStore = await db.collection(`/trainings`).get();
  const trainingInfo = [];
  trainingInfoStore.forEach(element => {
    trainingInfo.push({
      id: element.id,
      ...element.data()
    })
  });
  return trainingInfo;

}

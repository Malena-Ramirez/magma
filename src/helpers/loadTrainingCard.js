import { db } from "../firebase/firebaseConfig";

export const loadTrainingCard = async (id) => {

  const trainingInfoStore = await db.collection(`${id}/trainings/cards`).get();
  const trainingInfo = [];

  console.log(trainingInfoStore);

  return trainingInfo;


}

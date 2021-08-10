import { db } from "../firebase/firebaseConfig";

export const loadTrainingCard = async (id = 0) => {

  const trainingInfoStore = await db.collection(`/trainings`).get();
  const trainingInfo = [];
  console.log(trainingInfoStore);
  trainingInfoStore.forEach(element => {
    trainingInfo.push({
      id: element.id,
      ...element.data()
    })
    console.log(element.data());
  });

  console.log(trainingInfo);
  return trainingInfo;

}

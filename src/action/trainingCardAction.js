import { db } from "../firebase/firebaseConfig";
import { loadTrainingCard } from "../helpers/loadTrainingCard";
import { types } from "../types/types";

export const activeTraining = (id, training) => {
  return {
    type: types.trainingCardActive,
    payload: {
      id,
      ...training
    }
  }
}

const getUpdateDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}


export const trainingCardAction = (title, urlVideo, category, description) => {
  return async (dispatch, getState) => {
    const { id, name } = getState().login;

    const updateDate = getUpdateDate();

    const randomIndexImage = Math.floor(Math.random() * 3);

    const newTraining = {
      title,
      urlVideo,
      category,
      description,
      author: name,
      idAuthor: id,
      updateDate,
      randomIndexImage
    }
    await db.collection(`/trainings`).add(newTraining);
  }
}

export const setTraining = (trainings) => {
  return {
    type: types.trainingCardLoad,
    payload: trainings
  }
}

export const startLoadingAllTrainings = () => {
  return async (dispatch) => {
    const trainings = await loadTrainingCard();
    dispatch(setTraining(trainings))
  }
}

export const startSaveTraining = (trainings) => {
  return async () => {
    const { id, ...trainingToFirestore } = trainings;
    trainingToFirestore.updateDate = getUpdateDate();
    await db.doc(`/trainings/${id}`).update(trainingToFirestore);
  }
}


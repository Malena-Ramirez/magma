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

export const trainingCardAction = (title, urlVideo, category, description) => {
  return async (dispatch, getState) => {
    const { id, name } = getState().login;

    const date = new Date();
    const updateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

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
    dispatch(activeTraining(id, newTraining))
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




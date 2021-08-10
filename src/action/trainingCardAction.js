import { db } from "../firebase/firebaseConfig";
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
    const updateDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const newTraining = {
      title,
      urlVideo,
      category,
      description,
      author: name,
      idAuthor: id,
      updateDate
    }
    const docRef = await db.collection(`/trainings`).add(newTraining);
    dispatch(activeTraining(id, newTraining))
    console.log(docRef);
  }
}

export const setTraining = (trainings) => {
  return {
    type: types.trainingCardLoad,
    payload: trainings
  }
}



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

export const trainingCardAction = (title, urlVideo, description) => {
  return async (dispatch, getState) => {
    const { id } = getState().login;
    const { name } = getState().login;
    // const state = getState();
    const newTraining = {
      title: title,
      urlVideo: urlVideo,
      description: description,
      author: name,
      updateDate: new Date().getTime()
    }
    const docRef = await db.collection(`${id}/trainings/cards`).add(newTraining);
    dispatch(activeTraining(id, newTraining))
    console.log(docRef);
    // console.log(id);
  }
}


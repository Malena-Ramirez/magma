import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadTrainingCard } from "../helpers/loadTrainingCard";
import { types } from "../types/types";
import { color } from "../components/GlobalStyles/color";

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
    const training = await loadTrainingCard();
    dispatch(setTraining(training));
    dispatch(startLoadingAllTrainings());
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
  return async (dispatch) => {
    const { id, ...trainingToFirestore } = trainings;
    trainingToFirestore.updateDate = getUpdateDate();

    await db.doc(`/trainings/${id}`).update(trainingToFirestore);

    const training = await loadTrainingCard();
    dispatch(setTraining(training));
    dispatch(startLoadingAllTrainings());
  }
}

export const deleteTraining = (id) => ({
  type: types.trainingCardDelete,
  payload: id
})

export const startDeleting = (id) => {
  return async (dispatch) => {
    await Swal.fire({
      title: '¿Desea eliminar la capacitación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: color.main,
      cancelButtonColor: color.secondary,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminada',
          text: 'La capacitación ha sido eliminada exitosamente.',
          icon: 'success',
          confirmButtonColor: color.main,
        }
        );
        db.doc(`/trainings/${id}`).delete();

        dispatch(deleteTraining(id));
      }
    })
  }
}

import { db } from "../firebase/firebaseConfig";
import { loadCandidates } from "../helpers/loadCandidates";
import { types } from "../types/types";

const getUpdateDate = () => {
  const date = new Date();
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();
  const hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

  return `${day}/${month}/${year} - ${hour}:${minutes}`;
}

export const CandidateAction = (jobId, companyId) => {
  return async (dispatch, getState) => {
    const { profile } = getState().profile;
    delete profile.id;
    delete profile.userId;

    const { id } = getState().login;
    const createDate = getUpdateDate();

    const newCandidate = {
      jobId,
      profile,
      companyId,
      createDate
    }

    await db.collection(`/candidates`).add(newCandidate);
    const candidates = await loadCandidates(id)
    dispatch(setCandidates(candidates));
    dispatch(startLoadingCandidates(id));
  }
}

export const setCandidates = (userProfile) => {
  return {
    type: types.candidateLoad,
    payload: userProfile
  }
}

export const startLoadingCandidates = (uid) => {
  return async (dispatch) => {
    const candidates = await loadCandidates(uid)
    dispatch(setCandidates(candidates))
  }
}
import { db } from "../firebase/firebaseConfig";
import { loadCandidates } from "../helpers/loadCandidates";
import { types } from "../types/types";

export const CandidateAction = (jobId, companyId) => {
  return async (dispatch, getState) => {
    const { profile } = getState().profile;
    delete profile.id;
    delete profile.userId;

    const { id } = getState().login;

    const newCandidate = {
      jobId,
      profile,
      companyId
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
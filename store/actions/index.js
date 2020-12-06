import * as types from '../constants/ActionType';

export const toggleExercises = (value) => ({
  type: types.TOGGLE_EXERCISES,
  value,
});
export const deleteExercises = () => ({
  type: types.DELETE_EXERCISES,
});
export const toggleConfigChallenge = (value) => ({
  type: types.TOGGLE_CONFIG_CHALLENGE,
  value,
});

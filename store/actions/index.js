import * as types from '../constants/ActionType';

export const toggleExercises = (value) => ({
  type: types.TOGGLE_EXERCISES,
  value,
});
export const toggleConfigChallenge = (value) => ({
  type: types.TOGGLE_CONFIG_CHALLENGE,
  value,
});

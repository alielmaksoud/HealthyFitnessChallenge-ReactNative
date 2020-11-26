import {TOGGLE_EXERCISES} from '../constants/ActionType';
const initialState = {challengeExo: []};

function toggleChallenge(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case TOGGLE_EXERCISES:
      const challengeIndex = state.challengeExo.findIndex(
        (item) => item.id === action.value.id,
      );
      if (challengeIndex !== -1) {
        // L'exo est deja dans le tableau challenge on le supprime
        nextState = {
          ...state,
          challengeExo: state.challengeExo.filter(
            (item, index) => index !== challengeIndex,
          ),
        };
      } else {
        // L'exo n'est pas dans le tableau challenge on l'ajoute
        nextState = {
          ...state,
          challengeExo: [...state.challengeExo, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleChallenge;

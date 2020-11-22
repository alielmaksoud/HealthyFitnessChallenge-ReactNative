const initialState = {configChallenge: []};

function toggleConfigChallenge(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_CONFIG_CHALLENGE':
      nextState = {
        ...state,
        configChallenge: [...state.configChallenge, 'action.value'],
      };
      return nextState || state;
    default:
      return state;
  }
}

export default toggleConfigChallenge;

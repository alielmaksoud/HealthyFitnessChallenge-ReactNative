import {combineReducers, createStore} from 'redux';
import toggleChallenge from './reducers/challengeReducer';
import toggleConfigChallenge from './reducers/configChallengeReducer';

export default createStore(
  combineReducers({toggleChallenge, toggleConfigChallenge}),
);

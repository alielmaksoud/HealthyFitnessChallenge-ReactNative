import {createStore} from 'redux';
import toggleChallenge from './reducers/challengeReducer';

export default createStore(toggleChallenge);

import {reducer as network, NetworkState} from 'react-native-offline'
import { combineReducers } from 'redux';

export interface AppState {
  network: NetworkState
}
const rootReducer = combineReducers<AppState, any>({
  network
});
export default rootReducer;

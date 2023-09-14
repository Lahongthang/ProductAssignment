import { combineReducers } from 'redux';
import apiService from './api/services/apiService';

const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
});

export default rootReducer;

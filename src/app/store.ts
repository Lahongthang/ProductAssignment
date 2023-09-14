import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import apiService from './api/services/apiService';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([apiService.middleware]),
});

export default store;

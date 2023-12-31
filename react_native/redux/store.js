import { configureStore } from '@reduxjs/toolkit';
import { recordingsReducer } from '../features/recordings/recordingsSlice';
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
};

export const store = configureStore({
    reducer: persistCombineReducers(config, {
        recordings: recordingsReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            },
            immutableCheck: {
                ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
            },
        })
});

export const persistor = persistStore(store);

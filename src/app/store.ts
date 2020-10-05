import { configureStore } from '@reduxjs/toolkit';
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';

import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createStateSyncMiddleware())
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default;
        store.replaceReducer(newRootReducer);
    });
}

initStateWithPrevTab(store);

export default store;

import { combineReducers } from '@reduxjs/toolkit';
import { withReduxStateSync } from 'redux-state-sync';
import peopleReducer from '../features/people/redux/peopleSlice';

const rootReducer = combineReducers({
    people: peopleReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default withReduxStateSync(rootReducer);

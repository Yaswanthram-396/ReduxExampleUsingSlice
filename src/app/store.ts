import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Import correctly
import postsReducer from '@/features/posts/postsSlice';
import authReducer from '@/login/reducer';

// Combine reducers
const rootReducer = combineReducers({
  posts: postsReducer, // Correctly add reducers
  auth: authReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the store and utility types
export default store;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

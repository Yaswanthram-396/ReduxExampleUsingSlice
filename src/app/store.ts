import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk'
import postsReducer from '@/features/posts/postsSlice'
import authReducer from '@/login/reducer'

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.


const rootReducer = combineReducers({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {    
    posts:postsReducer,
    auth: authReducer,
  }
})
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
export type AppStore= typeof store
export type AppDispatch= typeof store.dispatch
export type RootState= ReturnType<typeof store.getState>



import { configureStore } from '@reduxjs/toolkit'
// import type { Action } from '@reduxjs/toolkit'

import postsReducer from '@/features/posts/postsSlice'

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.


const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {    
    posts:postsReducer
  }
})
export default store
export type AppStore= typeof store
export type AppDispatch= typeof store.dispatch
export type RootState= ReturnType<typeof store.getState>



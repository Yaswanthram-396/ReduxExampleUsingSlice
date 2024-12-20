import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a TS type for the data we'll be using
export interface Post {
  id: string
  title: string
  content: string
}

// Create an initial state value for the reducer, with that type
const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]


// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<Post>) {
      // "Mutate" the existing state array, which is
      // safe to do here because `createSlice` uses Immer inside.
      state.push(action.payload)
    },
    postDelete(state, action: PayloadAction<string>) {
     return state.filter(post => post.id !== action.payload)
// Filter method returns a new array
     
    }
    
  }
})
export const { postAdded,postDelete } = postsSlice.actions
// Export the generated reducer function
export default postsSlice.reducer
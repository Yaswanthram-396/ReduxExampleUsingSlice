import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

// TypeScript type for a Post
export interface Post {
  id: string;
  title: string;
  content: string;
}

// Initial state for posts
const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

// Slice definition
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Add a new post
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: { id: nanoid(), title, content },
        };
      },
    },
    // Delete a post by ID
    postDelete(state, action: PayloadAction<string>) {
      return state.filter((post) => post.id !== action.payload);
    },
    // Update an existing post
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

// Export actions and reducer
export const { postAdded, postDelete, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;

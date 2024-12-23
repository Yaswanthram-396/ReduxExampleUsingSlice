import React from 'react';
import { useAppDispatch } from '@/app/hooks';
import { postAdded } from './postsSlice';

// TypeScript types for the form fields and elements
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}

interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault(); // Prevent default form submission

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value.trim();
    const content = elements.postContent.value.trim();

    if (title && content) {
      dispatch(postAdded(title, content)); // Dispatch action to add post
      console.log('Post Added:', { title, content });
      e.currentTarget.reset(); // Reset the form after submission
    } else {
      console.log('Both title and content are required.');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Enter post title"
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          placeholder="Enter post content"
          required
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { postDelete } from "./postsSlice";
import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
}

export const PostsList = () => {
  const dispatch = useAppDispatch();

  const posts: Post[] = useAppSelector((state: any) => state.posts || []);


  const handleDelete = (postId: string) => {
    dispatch(postDelete(postId));
  };

  const renderedPosts = posts.map((post: Post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>  
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <button className="button" onClick={() => handleDelete(post.id)}>
        Delete
      </button>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

import { useAppSelector } from '../../app/hooks'
import { useAppDispatch } from '../../app/hooks'
import {  postDelete } from './postsSlice'

export const PostsList = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts)
  const handleDelete = (postId: string) => () => {
    dispatch(postDelete(postId))
    // console.log(posts)
  }
  // Select the `state.posts` value from the store into the component

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <button className="button" onClick={handleDelete(post.id)}>Delete</button>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
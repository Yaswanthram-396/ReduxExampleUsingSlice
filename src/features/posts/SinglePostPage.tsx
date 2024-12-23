// import { useAppSelector } from '@/app/hooks'
import { RootState } from '@/app/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const SinglePostPage = () => {
  const { postId } = useParams()

  // const post = useAppSelector(state =>
  //   state.posts.find(post => post.id === postId)
  // )
  const post = useAppSelector((state: RootState) => // Specify the type of the state
  state.posts.find(post => post.id === postId)
)

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
import PostCard from "./Cards/PostCard"

interface PostType {
  id: number
  title: string
  text: string
}

interface Props {
  posts: PostType[]
}

export const PostsList = ({ posts }: Props) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.
  return (
    <div className="mx-auto grid grid-cols-3">
      {posts.map((post) => (
        <PostCard>
          <h1 key={post.id}>{post.title}</h1>
          <article>
            <p>{post.text}</p>
          </article>
        </PostCard>
      ))}
    </div>
  )
}

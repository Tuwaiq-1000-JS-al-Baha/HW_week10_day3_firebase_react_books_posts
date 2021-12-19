import { useContext,  } from "react"
import PostsContext from "../utils/PostsContext"
import { Row } from "react-bootstrap"
import PostItem from "../components/PostItem"

function Posts() {
  const { posts } = useContext(PostsContext)

  return (
    <>
      <h1>Posts</h1>
      <Row cols={4}>
        {posts.map(post => (
          <PostItem post={post} key={post.id} />
        ))}
      </Row>
    </>
  )
}

export default Posts

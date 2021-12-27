import { useContext } from "react"
import PostsContext from "../utils/PostsContext"
import { Row } from "react-bootstrap"
import BookItem from "../components/BookItem"

function Book() {
  const { books } = useContext(PostsContext)

  if (!books) return <h1>Loodaing...</h1>
  return (
    <>
      <h1>Books</h1>
      <Row cols={4}>
        {books.map(book => (
          <BookItem book={book} key={book.id} />
        ))}
      </Row>
    </>
  )
}

export default Book

import { useContext } from "react"
import PostsContext from "../utils/PostsContext"
import { Row } from "react-bootstrap"

import BookItem from "../components/BookItem"

function Books() {
  const { books } = useContext(PostsContext);
  return (
    <>
      <h1>BOOKs</h1>
      <Row cols={4}>
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </Row>
    </>
  );
}
export default Books;
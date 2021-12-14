import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import BookEditModal from "../components/BookEditModal"
import PostsContext from "../utils/PostsContext"

function Books() {
  const { books, deleteBook } = useContext(PostsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Books</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>NumberOfCopies: {book.numberOfCopies}</Card.Text>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" className="me-2" onClick={() => setShow(true)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deleteBook(book.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
            <BookEditModal show={show} setShow={setShow} book={book} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Books

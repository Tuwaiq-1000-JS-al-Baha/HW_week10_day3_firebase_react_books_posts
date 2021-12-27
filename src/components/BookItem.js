import { useContext, useState } from "react"
import BookEditModal from "./BookEditModal"
import { Button, Card, Col } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function BookItem(props) {
  const { deleteBook } = useContext(PostsContext)
  const [show, setShow] = useState(false)
  const { book } = props
  return (
    <>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title>{book.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text> {book.owner}</Card.Text>
            <Card.Img src={book.image} style={{ width: 200 }} />
            <Card.Text>{book.body}</Card.Text>
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
    </>
  )
}

export default BookItem

import { useContext, useState } from "react"
import { Button, Col, Card } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"
import BookEditModel from "./BookEditModel"

function BookItem(props) {
  const { book } = props

  const { deleteBook } = useContext(PostsContext)
  const [show, setShow] = useState(false)

  return (
    <Col>
      <Card>
        <Card.Header>
          <Card.Title>{book.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>author: {book.author}</Card.Text>
          <Card.Img src={book.image} style={{ width: 200 }} />
          <Card.Text>{book.description}</Card.Text>
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
      <BookEditModel show={show} setShow={setShow} book={book} />
    </Col>
  )
}
export default BookItem

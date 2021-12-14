import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import BookEditModal from "../component/BookEditModal"
import PostContext from "../utils/PostContext"

function Book() {
  const { books, deletBook } = useContext(PostContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1> Books</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card style={{ width: 300 }}>
              <Card.Title>Title :{book.title}</Card.Title>
              <Card.Body>
                <Card.Text>author:{book.author}</Card.Text>
                <Card.Img src={book.image} style={{ height: 150, width: 150 }} />
                <Card.Text>{book.descrption}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" className="me-2" onClick={() => setShow(true)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deletBook(book.id)}>
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

export default Book

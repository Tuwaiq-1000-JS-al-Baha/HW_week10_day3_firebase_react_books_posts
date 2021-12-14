import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
import PostEditModal from "../components/PostEditModal"

function Books() {
  const { books } = useContext(PostsContext)
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
                <Card.Text>author: {book.author}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Books
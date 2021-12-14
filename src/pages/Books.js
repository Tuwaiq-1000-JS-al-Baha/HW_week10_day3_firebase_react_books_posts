import { useContext, useState } from "react";
import PostsContext from "../utils/PostsContext";
import { Button, Card, Col, Row } from "react-bootstrap";
import BookEditModel from "../components/BookEditModel";

function Posts() {
  const { books, deleteBook } = useContext(PostsContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>BOOKS</h1>
      <Row cols={4}>
        {books.map((book) => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Owner: {book.owner}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>{book.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => setShow(true)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deleteBook(book.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
            <BookEditModel show={show} setShow={setShow} book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Posts;

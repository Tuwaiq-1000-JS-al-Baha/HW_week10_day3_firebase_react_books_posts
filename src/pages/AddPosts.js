import { useContext } from "react";
import {Form , Col , Row , Button} from "react-bootstrap"
import PostsContext from "../utils/PostsContext";

function AddPost() {
    const {addPost} = useContext(PostsContext)
    return (  <Form className="mt-5"  onSubmit={addPost}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Enter email" />
         
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>image</Form.Label>
          <Form.Control name="image" type="url" placeholder="body" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control name="body" type="text" placeholder="body" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Onwer</Form.Label>
          <Form.Control name="owner" type="text" placeholder="body" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>);
}

export default AddPost;
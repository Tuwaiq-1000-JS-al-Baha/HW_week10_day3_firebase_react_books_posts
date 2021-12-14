import { Toast } from "bootstrap"
import { useEffect, useState } from "react"
import { Card, Row, Col, ToastContainer } from "react-bootstrap"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import firebase from "./utils/firebase"
import { toast } from "react-toastify"
import PostsContext from "./utils/PostsContext"
import Posts from "./pages/Posts"
import AddPost from "./pages/AddPosts"
import NavbarItem from "./components/NavbarItem"
import AddBook from "./pages/AddBook"
import Books from "./pages/Books"
function App() {
  const [posts, setPosts] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const getBooks = async () => {
    const booksRef = await firebase.database().ref("books").once("value")
    const books = booksRef.val()
    const booksArray = []
    for (const key in books) {
      booksArray.push({ ...books[key], id: key })
    }

    setBooks(booksArray)
  }

  const getPost = async () => {
    const posterRef = await firebase.database().ref("posts").once("value")
    const posts = posterRef.val()
    const postsArray = []
    for (const key in posts) {
      postsArray.push({ ...posts[key], id: key })
    }

    setPosts(postsArray)

    console.log(posts)
  }
  useEffect(() => {
    getPost()
    getBooks()
  }, [])

  const addPost = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
        owner: form.elements.owner.value,
      }
      await firebase.database().ref("/posts").push(postBody)
      toast.success("post added")
      getPost()
      navigate("/")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }

      await firebase.database().ref("/books").push(bookBody)
      toast.success("book added")
      getBooks()
      navigate("/book")
    } catch (error) {
      toast.error(error.code)
    }
}

  const deletePost = async postId => {
    try {
      await firebase.database().ref(`posts/${postId}`).remove()
      toast.success("post is removed")
      getPost()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const editPost = async (e, postId) => {
    e.preventDefault()
    try {
      const form = e.target
      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
        owner: form.elements.owner.value,
      }
      console.log(postBody)
      await firebase.database().ref(`posts/${postId}`).update(postBody)
      toast.success("post is updated")
      getPost()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const store = { posts, addPost, deletePost , editPost ,books, addBook}

  return (
    <PostsContext.Provider value={store}>
      <NavbarItem />
      <ToastContainer />
      <Routes>
        <Route path="/post" element={<Posts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/book" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </PostsContext.Provider>
  )
}

export default App

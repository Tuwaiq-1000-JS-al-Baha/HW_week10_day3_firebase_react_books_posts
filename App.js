
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import firebase from "./utils/firebase"
import { toast, ToastContainer } from "react-toastify"
import PostsContext from "./utils/PostsContext"
import AddPost from "./pages/AddPost"
import Posts from "./pages/Posts"
import Navbar from "./components/Navbar"
import AddBook from "./pages/AddBook"
import Books from "./pages/Books"


function App() {
  const [posts, setPosts] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const getPosts = async () => {
    const postsRef = await firebase.database().ref("posts").once("value")
    ///نحول الاوبجكت الى سترنق
    const posts = postsRef.val()
    const postArray = []
    for (const key in posts) {
      postArray.push({ ...posts[key], id: key })
    }
    setPosts(postArray)
  }
  
  const getBooks = async () => {
    const booksRef = await firebase.database().ref("books").once("value")

    const books = booksRef.val()
    const booksArray = []
    for (const key in books) {
      booksArray.push({...books[key], id: key })
    }

    setBooks(booksArray)
  }

  useEffect(() => {
    getPosts()
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
      toast.success("posts added")
      getPosts()
      navigate("/")
    } catch (error) {
      toast.error(error.message)
    }
  }
  const deletePost = async postId => {
    try {
      await firebase.database().ref(`posts/${postId}`).remove()
      toast.success("post deleted")
      getPosts()
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
      getPosts()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        image: form.elements.image.value,
        description: form.description.body.value,
        auther: form.elements.auther.value,
      }
      await firebase.database().ref("/books").push(bookBody)
      toast.success("Book added")
      getBooks()
      navigate("/books")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const editBook = async (e, bookId) => {
    e.preventDefault()
    try {
     
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        image: form.elements.image.value,
        description: form.description.body.value,
        auther: form.elements.auther.value,
      }
     
      await firebase.database().ref(`books/${bookId}`).update(bookBody)
      toast.success("Book is updated")
      getBooks()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const deleteBook = async bookId => {
    try {
      await firebase.database().ref(`books/${bookId}`).remove()
      toast.success("Book deleted")
      getBooks()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const store = {
    posts,
    books,
    addPost,
    deletePost, 
    editPost,
     getBooks,
    addBook,
    editBook, 
    deleteBook
  }

  return (
    <PostsContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/books" element={<Books />} />
        <Route path="add-book" element={<AddBook />} />
      </Routes>
    </PostsContext.Provider>
  )
}

export default App

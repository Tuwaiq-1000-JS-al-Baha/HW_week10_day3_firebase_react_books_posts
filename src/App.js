import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddPost from "./pages/AddPost"
import Posts from "./pages/Posts"
import firebase from "./utils/firebase"
import PostsContext from "./utils/PostsContext"
import Book from "./pages/Book"
import AddBook from "./pages/AddBook"

function App() {
  const [posts, setPosts] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const getPosts = async () => {
    const postsRef = await firebase.database().ref("posts").once("value")
    const posts = postsRef.val()
    const postsArray = []
    for (const key in posts) {
      postsArray.push({ ...posts[key], id: key })
    }

    setPosts(postsArray)
  }

  const getBooks = async () => {
    const booksRef = await firebase.database().ref("books").once("value")
    const books = booksRef.val()
    const booksArray = []
    for (const key in books) {
      booksArray.push({ ...books[key], id: key })
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
      toast.success("post added")
      getPosts()
      navigate("/")
    } catch (error) {
      toast.error(error.code)
    }
  }
  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const image = form.elements.image.files[0]
      const imageRef = firebase.storage().ref("images").child(`${image.lastModified}-${image.name}`)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()
      const bookBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: imageUrl,
        owner: form.elements.owner.value,
      }

      await firebase.database().ref("books").push(bookBody)
      console.log(bookBody)
      toast.success("book added")
      getBooks()
      navigate("/book")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const editBook = async (e, book) => {
    e.preventDefault()

    try {
      const form = e.target
      const image = form.elements.image.files[0]
      let imageUrl
      if (image) {
        const imageRef = firebase.storage().ref("images").child(`${image.lastModified}-${image.name}`)

        await imageRef.put(image)
        imageUrl = await imageRef.getDownloadURL()
      } else {
        imageUrl = book.image
      }

      const bookBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: imageUrl,
        owner: form.elements.owner.value,
      }
      console.log(bookBody)
      await firebase.database().ref(`books/${book.id}`).update(bookBody)
      toast.success("book is updated")
      getBooks()
    } catch (error) {
      toast.error(error.code)
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

  const deleteBook = async bookId => {
    try {
      await firebase.database().ref(`books/${bookId}`).remove()
      toast.success("book deleted")
      getBooks()
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

  const store = { posts, addPost, deletePost, editPost, books, addBook, editBook, deleteBook }

  return (
    <PostsContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/book" element={<Book />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </PostsContext.Provider>
  )
}

export default App

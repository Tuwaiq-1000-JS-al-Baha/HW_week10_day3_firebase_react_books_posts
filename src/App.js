import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import NavbarItem from "./component/Navbar"
import AddPost from "./Pages/AddPost"
import Posts from "./Pages/Posts"
import firebase from "./utils/firebase"
import PostContext from "./utils/PostContext"
import Book from "./Pages/Books"
import AddBook from "./Pages/AddBook"

function App() {
  const [posts, setPosts] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()
  const getPosts = async () => {
    const postRef = await firebase.database().ref("posts").once("value") //في الرف طلبت البوست بس
    const posts = postRef.val() //اذا ابغى الدالة نفسها اقول فال
    const postArray = []
    for (const key in posts) {
      postArray.push({ ...posts[key], id: key })
    }
    setPosts(postArray)
  }
  const getBooks = async () => {
    const bookRef = await firebase.database().ref("books").once("value") //في الرف طلبت البوست بس
    const books = bookRef.val() //اذا ابغى الدالة نفسها اقول فال
    const bookArray = []
    for (const key in books) {
      bookArray.push({ ...books[key], id: key })
    }
    setBooks(bookArray)
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
      toast.success("post success")
      getPosts()
      navigate("/")
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const deletPost = async postId => {
    try {
      await firebase.database().ref(`posts/${postId}`).remove()
      toast.success("post delete success")
      getPosts()
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const editpost = async (e, postId) => {
    e.preventDefault()
    try {
      const form = e.target
      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
        owner: form.elements.owner.value,
      }
      await firebase.database().ref(`posts/${postId}`).update(postBody)
      toast.success("post success")
      getPosts()
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        descrption: form.elements.descrption.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await firebase.database().ref("/books").push(bookBody)
      toast.success("book success")
      getBooks()
      navigate("/book")
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const deletBook = async bookId => {
    try {
      await firebase.database().ref(`books/${bookId}`).remove()
      toast.success("book delete success")
      getBooks()
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const editbook = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        descrption: form.elements.descrption.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await firebase.database().ref(`books/${bookId}`).update(bookBody)
      toast.success("book success")
      getBooks()
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  const store = {
    posts,
    addPost,
    deletPost,
    editpost,
    addBook,
    deletBook,
    editbook,
    books,
  }
  return (
    <>
      <PostContext.Provider value={store}>
        <ToastContainer />
        <NavbarItem />
        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/book" element={<Book />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </PostContext.Provider>
    </>
  )
}

export default App

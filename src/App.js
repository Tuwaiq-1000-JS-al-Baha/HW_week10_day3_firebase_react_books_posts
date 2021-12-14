import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddBook from "./pages/AddBook"
import Books from "./pages/Books"
import firebase from "./utils/firebase"
import BooksContext from "./utils/BooksContext"

function App() {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const getBooks = async () => {
    const booksRef = await firebase.database().ref("books").once("value")
    const books = postsRef.val()
    constbooksArray = []
    for (const key in books) {
     booksArray.push({ ...books[key], id: key })
    }

    setBooks(booksArray)
  }

  useEffect(() => {
    getBooks()
  }, [])

  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const booksBody= {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
        owner: form.elements.owner.value,
      }

      await firebase.database().ref("/books").push(booksBody)
      toast.success("book added")
      getBooks()
      navigate("/")
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

  const editBook = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
      const booksBody= {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
        owner: form.elements.owner.value,
      }
      console.log(booksBody)
      await firebase.database().ref(`books/${bookId}`).update(booksBody)
      toast.success("book is updated")
      getBooks()
    } catch (error) {
      toast.error(error.code)
    }
  }

  const store = { books, addBook, deleteBook, editBook }

  return (
    <BooksContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

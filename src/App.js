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
    const books = booksRef.val()
    const booksArray = []
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
      const bookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        author: form.elements.author.value,
        image: form.elements.image.value,
      }

      await firebase.database().ref("/books").push(bookBody)
      toast.success("book added")
     getBooks()
      navigate("/")
    } catch (error) {
      toast.error(error.code)
    }
  }

 
  const store = { books, addBook }

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

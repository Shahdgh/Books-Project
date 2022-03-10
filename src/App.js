import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import { Route, useNavigate, Routes } from "react-router-dom"
import "./App.css"
import NavbarItem from "./componets/Navbar"
import Login from "./pages/Login"
import BooksContext from "./utils/BooksContext"
import firebase from "./utils/firebase"
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Author from "./pages/Author"
import OneAuthor from "./pages/OneAuthor"
import Books from "./pages/Books"
import Profile from "./pages/Profile"
import AddBook from "./pages/AddBook"
// import firebase from "firebase"
function App() {
  const [profiles, setProfiles] = useState({})
  const [authors, setAutors] = useState([])
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const getAuthors = async () => {
    try {
      const response = await axios.get(`https://api-books-project.herokuapp.com/getAuthor`)
      setAutors(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const res = async () => {
    await axios.get(`https://api-books-project.herokuapp.com/getBook`).then(result => {
      setBooks(result.data)
      console.log(result.data)
    })
  }

  useEffect(() => {
    getProfiles()
    res()
    getAuthors()
  }, [])
  ///Sign Up user
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      ///firbase
      const avatar = form.elements.avatar.files[0]
      let imageUrl
      if (avatar) {
        const imageRef = firebase.storage().ref("images").child(`${avatar.lastModified}-${avatar.name}-${avatar.size}`)
        imageRef.put(avatar)
        imageUrl = await imageRef.getDownloadURL()
      }

      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: imageUrl || undefined,
      }

      await axios.post("https://api-books-project.herokuapp.com/api/users/signup", userBody)
      toast.success("sign up success")

      getProfiles()
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`https://api-books-project.herokuapp.com/api/users/login`, userBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      localStorage.token = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //////Get Profile
  const getProfiles = async () => {
    try {
      const response = await axios.get(`https://api-books-project.herokuapp.com/api/users/profile`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfiles(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  /////////////Add book
  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target

      ///firbase
      const image = form.elements.image.files[0]
      let imageeUrl
      if (image) {
        const imageRef = firebase.storage().ref("imagBook").child(`${image.lastModified}-${image.name}-${image.size}`)
        imageRef.put(image)
        imageeUrl = await imageRef.getDownloadURL()
      }
      const bookBody = {
        title: form.elements.title.value,
        image: imageeUrl,
        pages: form.elements.pages.value,
        price: form.elements.price.value,
      }
      const response = await axios.post("https://api-books-project.herokuapp.com/newBook", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      res()
      navigate("/")

      toast.success("add Book success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("token")

    navigate("/")
  }
  const store = {
    signup,
    login,
    profiles,
    books,
    addBook,
    logout,
    authors,
  }
  return (
    <BooksContext.Provider value={store}>
      <ToastContainer />
      <NavbarItem />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/authors/:authorId" element={<OneAuthor />} />

        <Route path="/books" element={<Books />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

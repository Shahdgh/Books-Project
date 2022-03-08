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
// import firebase from "firebase"
function App() {
  const [profiles, setProfiles] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    getProfiles()
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

      await axios.post("http://localhost:5000/api/users/signup", userBody)
      toast.success("sign up success")

      getProfiles()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/users/login`, userBody, {
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
      const response = await axios.get(`http://localhost:5000/api/users/profile`, {
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
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("token")

    navigate("/")
  }
  const store = {
    signup,
    login,
    profiles,
    logout,
  }
  return (
    <BooksContext.Provider value={store}>
      <ToastContainer />
      <NavbarItem />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

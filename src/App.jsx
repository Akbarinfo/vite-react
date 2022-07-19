import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/style.scss'
import Home from './components/Home'
import Books from './components/Books'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Private from './private/Private'
import Control from './components/Control'
import Login from './components/Login'
import Api from "./api/API"
import books from './api/API'
import { v4 as uuidv4 } from 'uuid';
import EditBooks from './components/Books/EditBooks'


function App() {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const getData=async()=> {
  //     fetch("http://localhost:5000/booklist")
  //     .then((data)=> data.json())
  //     .then((result)=> setData(result))
  //     .catch((error)=> {
  //       return console.log(error);
  //     })
  //   }
  //   getData()
  // },[])

  // useEffect(()=> {
  //   const getData=async()=> {
  //     const response=await axios.get("http://localhost:5000/booklist");
  //     setData(response.data)
  //   }
  //   getData()
  // },[])


  // useEffect(() => {
  //   books.getBooks().then(res => setData(res))
  // },[])

  // console.log(data)


  // const obj = {
  //   id: uuidv4(),
  //   name: "O'tgan Kunlar",
  //   author: "Abdulla Qodiriy",
  //   price: "555"
  // }

  // const sendData = () => {
  //   books.sendBooks(obj)
  // }


  // let id = "3a079aed-fc46-4945-b718-5475e0798960"
  // let uz = {
  //   id: uuidv4(),
  //   name: "Qorqmas",
  //   author: "Abdulla Qodiriy",
  //   price: "scsacsa"
  // }

  // const updateData = () => {

  //   books.updateBooks(id, uz)
  // }
  // const deleteData = () => {
  //   books.deleteBooks(id)
  // }


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Private />}>
              <Route path='/' element={<Home />}/>
              <Route path='/books' element={<Books />}/>
              <Route path='/control' element={<Control />}/>
              <Route path='/editbooks/:id' element={<EditBooks />}/>
            </Route>

            <Route path='/login' element={<Login />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

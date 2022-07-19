import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import Store from "../../Store";

export default function Home() {

  let [name, setName] = useState('')
  let [author, setAuthor] = useState('')
  let [price, setPrice] = useState('')

  let addItem = Store(state => state.addBook)

  const check ={
    one: name.trim().length === 0,
    two: author.trim().length === 0,
    three: price.trim().length === 0
  }

  let addBooks = () => {

    if(check.one || check.two || check.three) {
      toast.error("Maydonlarni to'ldring")
    } else{
      let produce = {
        id: uuidv4(),
        name: name,
        author: author,
        price: price
      }

      addItem(produce)
      toast.success("Qo'shildi")
      setName('')
      setAuthor('')
      setPrice('')
    }
  }

  return (
    <div className="card w-50 mx-auto mt-5 p-3">
      <h2 className="text-center text-primary">Admin Dashborad</h2>
      <div className="form-group">
        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-2 p-3" placeholder="Enter book name" value={name} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setAuthor(e.target.value)} type="text" className="form-control mt-2 p-3" placeholder="Enter Author name" value={author} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control mt-2 p-3" placeholder="Enter book price" value={price} />
      </div>
      <button onClick={addBooks} type="button" className="btn btn-primary mt-3">Send</button>

      <ToastContainer />
    </div>
  )
}
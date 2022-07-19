import React, {useEffect, useState } from "react";
import Store from "../../Store";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function EditBooks() {

  let edit = Store(state=> state.editBook)
  let {id, name, author, price} = Store(state=> state.data)

  let [isname, setName] = useState(name)
  let [isauthor, setAuthor] = useState(author)
  let [isprice, setPrice] = useState(price)

  const check ={
    one: isname.trim().length === 0,
    two: isauthor.trim().length === 0,
    three: isprice.trim().length === 0
  }

  let editBooks = (e) => {

    if(check.one || check.two || check.three) {
      toast.error("Maydonlarni to'ldring")
    } else{
      let produce = {
        id: uuidv4(),
        name: isname,
        author: isauthor,
        price: isprice
      }
      
      edit(e, produce)
      toast.success("Muffaqaiyatli o'zgartirildi")

    }
  }


  return (
    <div className="card w-50 mx-auto mt-5 p-3">
      <h2 className="text-center text-primary">Edit Books</h2>
      <div className="form-group">
        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-2 p-3" placeholder="Enter book name" defaultValue={name} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setAuthor(e.target.value)} type="text" className="form-control mt-2 p-3" placeholder="Enter Author name" defaultValue={author} />
      </div>
      <div className="form-group">
        <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control mt-2 p-3" placeholder="Enter book price" defaultValue={price} />
      </div>
      <Link to="/books">
        <button onClick={()=> editBooks(id)} type="button" className="btn btn-primary mt-3">Send</button>
      </Link>

      <ToastContainer />
  </div>
  )
}
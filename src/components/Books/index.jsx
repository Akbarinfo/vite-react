import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import books from "../../api/API";
import Store from "../../Store";

export default function Books() {

  let delBooks = Store(state => state.deleteBook)
  let olish = Store(state=> state.olish)
  let [data, setData] = useState([])
  let [loading, setLoading] = useState(false)

  const fetchData = async()=> {
    const response = await books.getBooks();
    setData(response)
    setLoading(true)
  }

  useEffect(() => {
    fetchData()
  },[])

  if(!loading) {
    return <h1>Loading</h1>
  }

  return(
    <>
      <table className="tabel tabel-striped w-75 mx-auto mt-5">
        <thead>
          <tr>
            <th>
              id
            </th>
            <th>
              name
            </th>
            <th>
              author
            </th>
            <th>
            price
            </th>
            <th>
              Control
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return(
                <tr key={item.id}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.author}
                  </td>
                  <td>
                    {item.price}$
                  </td>
                  <td>
                    <button onClick={() => delBooks(item.id)} className="btn btn-danger ms-1">delete</button>
                    <Link to={`/editbooks/${item.id}`}>
                      <button onClick={()=> olish(item)} className="btn btn-primary ms-2">edit</button>
                    </Link>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
        <ToastContainer />
    </>
  )
}
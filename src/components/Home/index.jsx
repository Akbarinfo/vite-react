import React from "react";

export default function Home() {
  return (
    <div className="card w-50 mx-auto mt-5 p-3">
      <h2 className="text-center text-primary">Admin Dashborad</h2>
      <div className="form-group">
        <input type="text" className="form-control mt-2 p-3" placeholder="Enter book name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control mt-2 p-3" placeholder="Enter Author name" />
      </div>
      <div className="form-group">
        <input type="number" className="form-control mt-2 p-3" placeholder="Enter book price" />
      </div>
      <button type="button" className="btn btn-primary mt-3">Send</button>
    </div>
  )
}
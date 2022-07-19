import create from "zustand";
import produce from "immer";
import books from "../api/API";


const Store = create((set) => ({
  data: {},

  addBook: (item) =>
    set(
      produce((state) => {
        books.sendBooks(item)
      })
   ),

   editBook: (id, params)=>
    set(
      produce((state) => {
        books.updateBooks(id, params)
      })
    ),

  deleteBook: (id)=>
    set(
      produce((state) => {
        books.deleteBooks(id)
        toast.success("Muffaqaiyatli o'chirildi")
      })
  ),

  olish: (item) =>
    set({data: item})
  }
))

export default Store;
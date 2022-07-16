import axios from "axios"

const URL = "http://localhost:5000/booklist";

const books = {
  getBooks: async () => {
    const data = await axios.get(URL)
    return data.data
  },

  sendBooks: async (params) => {
    return axios.post(URL, params)
  },

  updateBooks: async (ID, params) => {
    return axios.put(`${URL}/${ID}`, params)
  },

  deleteBooks: async (ID) => {
    return axios.delete(`${URL}/${ID}`, {})
  },

}

export default books;
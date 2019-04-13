import Axios from "axios";

const key = "AIzaSyCblg6h-Py2NGfqAFiYT4PM-Uc1iXrfACA"

export default {
  searchTitle(title) {
    console.log(title.split(" ").join("+"));
     return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`)
  }
}
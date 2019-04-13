import Axios from "axios";

const key = "AIzaSyCblg6h-Py2NGfqAFiYT4PM-Uc1iXrfACA"
const titleLimit= "10";
const authorLimit= "40";

export default {
  searchTitle(title) {
    console.log(title.split(" ").join("+"));
    const plusTitle = title.split(" ").join("+");
     return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${plusTitle}&maxResults=${titleLimit}&key=${key}`)
  },

  searchAuthor(author) {
    console.log(author.split(" ").join("+"));
    const plusAuthor = author.split(" ").join("+");

    return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${plusAuthor}&maxResults=${authorLimit}&key=${key}`)
  }
}
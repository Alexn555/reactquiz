import axios from "axios";

export const client = axios.create({
  baseURL: "https://printful.com/test-quiz.php",
  headers: {
    "Content-Type": "application/json"
  }
})

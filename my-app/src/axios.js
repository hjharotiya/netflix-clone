import axios from "axios";
// using base url from making request to the database

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	
});

export default instance;
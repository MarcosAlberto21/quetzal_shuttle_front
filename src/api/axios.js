import axios from "axios";

const BaseURL = process.env.REACT_APP_URL;
export const axiosInstance = axios.create({
	baseURL: BaseURL,
	headers: {
		"Content-Type": "application/json",
	},
});


import { axiosInstance } from "../api/axios";
import { useState, useEffect } from "react";


const useAxiosInstance = () => {

		return axiosInstance;

}


export default useAxiosInstance;
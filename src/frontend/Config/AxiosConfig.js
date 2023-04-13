import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
});

export const signUp = async(data) =>
  instance.post("/api/user/create", data);

export const login =async(data)=>{
    const res =await instance.post("/api/user/login" ,data) ;
}

export default instance;



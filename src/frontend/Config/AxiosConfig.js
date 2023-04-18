import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
});

export const signUp = (data) =>
  instance.post("/api/user/create", data);


export const login =(data)=>
  instance.post("/api/user/login" ,data) ;


export const ShowAll =()=>
  instance.get("/api/user/show");

export const deleteUser =(username)=>
  instance.get(`/api/user/delete/${username}`);

export default instance;



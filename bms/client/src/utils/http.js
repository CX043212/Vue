import axios from "axios";


const http = axios.create({
    timeout:5000
})





http.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})


http.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(err)
})


export default (method,url,data=null)=>{
    if(method == "post"){
        return http.post(url,data);
    }else if(method == "get"){
        return http.get(url,{params:data});
    }else{
        return;
    }
}
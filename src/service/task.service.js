import axios from "axios"

export const getTasks = ({success,error})=>{
    axios.get("http://10.30.1.35:8083/")
    .then((res)=>{
        success && success(res)
    })
    .catch((err)=>{
        error && error(err)
    })
}



import axios from "axios"

export const getTraining = ({success,error})=>{
    axios.get("http://10.30.1.35:8083/")
    .then((res)=>{
        success && success(res)
    })
    .catch((err)=>{
        error && error(err)
    })
}

export const setTraining = ({success,error,trainingdata})=>{
    axios.post("http://10.30.1.35:8083/training",trainingdata)
    .then((res)=>{
        success && success(res)
    })
    .catch((err)=>{
        error && error(err)
    })
}


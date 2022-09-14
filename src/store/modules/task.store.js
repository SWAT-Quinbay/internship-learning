import { getTasks } from "@/service/task.service";


export default {
    state: {  
        task:[]
    },
    getters:{
        getTask(state)
        {
            return state.task;
        },
        
    },
    mutations:{
        setTask(state,value){
            state.task=value
        },
    },
    actions:{
        // SET_TASK({commit},value){
        //     commit("setTask",value)
        // },
        GET_TASK({commit}){
            getTasks({
                success:(res)=>{
                    commit("setTask",res.data)
                },
                error:(err)=>{
                    console.log(err)
                }
            })
        }
    }

}
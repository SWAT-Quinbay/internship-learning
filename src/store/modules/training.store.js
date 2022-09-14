import {getTraining,setTraining} from "@/service/training.service"
export default {
    state:{
        trainingList:[]
    },
    getters:{
        getTrainingList(state){
            return state.trainingList
        }
    },
    mutations:{
        setTrainingList(state,value){
            state.trainingList=value
        }
    },
    actions:{
        SET_TRAINING_LIST(state,trainingdata){
            setTraining({
                success: (res)=>{
                    console.log("training updated",res)
                    this.$store.dispatch("GET_TRAINING_LIST")
                },
                error:(err)=>{
                    console.log(err)
                },
                trainingdata
            })
        },
        GET_TRAINING_LIST({commit}){
            getTraining({
                success: (res)=>{
                    commit('setTrainingList',res.data)
                },
                error:(err)=>{
                    console.log(err)
                }
            })
        }
    }
}
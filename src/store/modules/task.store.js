

export default {
    state: {  
        daycount:1,
        task: [{
            day:"1",
            taskname: "Complete doc verification", 
            inputtype: "yes/no",
            }, 
            { 
            day:"2",
            taskname: "Create a simple portfolio", 
            inputtype: "file",}]
    },
    getters:{
        getTask(state)
        {
            return state.task;
        },
        getDayCount(state){
            return state.daycount;
        }
    },
    mutations:{
        setTask(state,value){
            state.task.push(value)
            
        },
        setDayCount(state)
        {
            let temp=state.daycount+1;
            state.daycount=temp;
        }
    },
    actions:{
        SET_TASK({commit},value){
            commit("setTask",value)
        },
        SET_DAY_COUNT({commit})
        {
            commit("setDayCount")
        }
    }

}
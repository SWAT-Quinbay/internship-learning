<template>
    <div class="container-fluid">
        <div class="head">
            <div class="button">
            <ButtonComponent 
            label="+ Add Task"
            class="btn--primary--outline"
            @onClick="show"/></div>
            <input type="search"/>
        </div>
        <div class="container">
             <div class="card" v-for="(task,index) in tasklist" :key="index">
      <div class="card-title">{{ task.taskname }}
      </div>
    </div>
  </div>
  <TaskActionModal  v-if="showModal"/>
        </div>
   
</template>

<script>
import { mapGetters } from "vuex";
// import TaskComponent from "../components/TaskComponent.vue";
// import BadgeComponent from "../components/BadgeComponent.vue"
import ButtonComponent from "../components/ButtonComponent.vue";
import TaskActionModal from "../components/TaskActionModal.vue"
export default {
  data() {
    return {
      newtask: {
        taskname: "",
        inputtype: "",
      },
      showModal:false
    };
  },
  name: "TaskList",
  components: {
    ButtonComponent,
    // BadgeComponent,
    TaskActionModal
  },
methods:{
    show(){
        this.showModal=true
    }
},
  computed: {
    ...mapGetters({
      tasklist: "getTask",
    }),
  },
};
</script>

<style scoped>

.badge{
    margin-left:2px;
}
.card-title{
    border-radius:7px;
    background-color: rgb(248, 248, 248);
    padding:2vh;
}
.circle{
    margin-left:-10px;
    width:20px;
    height:20px;
    border-radius: 50%;
}
.card {
  margin: 1vh 1vh 1vh 1vh;
  padding: 1vh 2vh 1vh 2vh;
  border:none;
  
  box-shadow:rgba(0, 0, 0, 0.2) 0px 3px 5px;
}
.card .icon {
  margin-left: 2vw;
  display: inline;
}

.head {
  width: 100%;
  padding: 1vh 1vh 1vh 1vh;
  display: flex;
  justify-content: space-between;
}
.head input {
  border: none;
  border-bottom: 1px solid black;
}
.head input:focus,
:hover {
  outline: none;
}
.button {
  width: max-content;
}
</style>

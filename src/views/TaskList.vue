<template>
  <div class="container">
    <div class="head">
      <div class="head--text">Tasks</div>
      <div class="right">
         <ButtonComponent label="+ Add Task" class="btn--primary--mc" @onClick="show" />
        <div class="search">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <input type="search" placeholder="search here" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card" v-for="(task, index) in tasklist" :key="index">
      <div class="d-flex gap-1">
        <div class="p-2 w-100">{{ task.taskname }}</div>
        <div class="p-2 flex-shrink-1"><ButtonComponent label="Edit" class="btn--primary--mc" @onClick="show(index)"/></div>
        <div class="p-2 flex-shrink-1"><ButtonComponent label="Delete" class="btn--primary--mc" /></div>
      </div>
      </div>
    </div>
    <TaskActionModal v-if="showModal" 
    @close="close"
    :taskdata="taskdata"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonComponent from "../components/ButtonComponent.vue";
import TaskActionModal from "../components/TaskActionModal.vue";
export default {
  data() {
    return {
     taskdata:{},
      showModal: false,
    };
  },
  name: "TaskList",
  components: {
    ButtonComponent,
    TaskActionModal,
  },
  methods: {
    show(index) {
      this.showModal = true;
      this.taskdata=this.tasklist[index]
    },
    close(){
      this.showModal = false;
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
.action--input--label {
  display: flex;
  float: left;
  font-size: 13px;
  font-weight: 500;
}

.action--input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.action--form--controller {
  margin-bottom: 33px;
}
.head {
  padding: 10px 10px 5px 10px;
  border: none;
  border-bottom: 1px solid #c6cad5;
  display: flex;
  justify-content: space-between;
}
.head .search {
  width: max-content;
  /* display:inline; */
  display: inline-block;
  margin-left: 10px;
  border-bottom: 1px solid #c6cad5;
}


.head .right {
  padding: 5px;
}
.head input {
  margin-left: 7px;
  border: none;
}
.head input:active,
:focus {
  outline: none;
}
.head--text {
  padding: 5px;
  font-weight: bold;
  font-size: 25px;
}

.card {
  margin: 1vh 1vh 1vh 1vh;
  padding: 1vh 2vh 1vh 2vh;
  border: none;
  border-left:3px solid #7a73ff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
 border-radius:0px;
}


</style>

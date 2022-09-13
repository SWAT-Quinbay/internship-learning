<template>
  <div class="modal--bg">
    <div class="modal--body">
      <div
        class="modal--header d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="modal--header--text">Task List</h5>
        </div>
        <div>
          <span class="close" @click="closeModal">&times;</span>
        </div>
      </div>

      <div class="modal--content">
        <TaskComponent
          v-for="(task, index) in tasklist"
          :key="index"
          :task="task"
        />

        <div class="card">
          <input type="text" v-model="newtask.taskname" placeholder="Enter Task"/>
          <select v-model="newtask.inputtype" >
            <option value="yes or no">Yes or No</option>
            <option value="link">link</option>
          </select>
          <ButtonComponent
            label="Add"
            buttonStyle="btn--primary--outline"
            id="button"
            @onClick="addtask()"
          />
        </div>
      </div>

      <div class="modal--footer">
        <div class="d-flex justify-content-end gap-1">
          <div class="col-3">
            <ButtonComponent
              label="Close"
              buttonStyle="btn--primary--outline"
              @onClick="closeModal()"
              type="button"
            />
          </div>
          <div class="col-auto">
            <ButtonComponent
              label="Update"
              buttonStyle="btn--primary"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskComponent from "./TaskComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
export default {
  data() {
    return {
      newtask: {
       taskname: "",
        inputtype: "",
      },
    };
  },
  name: "TaskModal",
  components: {
    TaskComponent,
    ButtonComponent,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    addtask() {
        let temp={... this.newtask};
      this.$store.dispatch("SET_TASK", temp);
    },
  },
  computed: {
    ...mapGetters({
      tasklist: "getTask",
    }),
  },
};
</script>

<style scoped>
.card {
  margin: 1vh 1vh 1vh 1vh;
  padding: 1vh 2vh 2vh 2vh;
  border:none;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 3px 5px;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 6px;
  border:none;
  border-bottom: 1px solid #ccc;
  resize: vertical;
}
input:focus,:active{
  border:none;
}

.action--form--controller {
  margin-bottom: 20px;
  border:1px solid rgb(175, 175, 175);
  border-radius:17px;
}
.modal--bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.481);
}
.modal--body {
  width: 45%;
  margin: 5% auto;
  background-color:white;
  border-radius: 1vh;
}
.modal--content {
  padding: 1vh 2vh 1vh 2vh;
  max-height: 70vh;
  overflow: scroll;
}
.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  float: right;
  display: inline;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal--header--text {
  margin: 0;
}

.modal--header {
  border-bottom: 1px solid rgb(202, 202, 202);
  padding: 5px 20px;
}
#button {
  width: 80px;
   margin-top:10px;

  margin-left:5%;
}
.modal--footer {
  border-top: 1px solid rgb(202, 202, 202);
  padding: 10px 20px;
}
.card input,select {
  margin-top:10px;
  width:90%;
  margin-left:5%;

}
</style>

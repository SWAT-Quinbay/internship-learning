<template>
  <div class="modal--bg">
    <div class="modal--body">
      <div
        class="modal--header d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="modal--header--text">Edit Task</h5>
        </div>
        <div>
          <span class="close" @click="closeModal">&times;</span>
        </div>
      </div>
      <!-- {{task}} -->
      <div class="modal--content">
        <div class="action--form--controller">
          <label class="action--input--label">Task Name:</label>
          <input
            type="text"
            class="action--input"
            min="20"
            max="500"
            v-model="task.name"
          />
        </div>
        <div class="action--form--controller">
          <label class="action--input--label">Task Description:</label>
          <textarea
            type="text"
            class="action--input"
            min="20"
            rows="7"
            v-model="task.description"
          >
          </textarea>
        </div>

        <label for="link" class="action--input--label mt-0"
          >Choose Submission type:</label
        ><br />
        <div class="d-flex gap-2 ml-4 action--input--label mt-2">
          <input
            type="radio"
            name="taskType"
            v-model="task.type"
            value="Submit"
          />Submit
          <input
            type="radio"
            name="taskType"
            v-model="task.type"
            value="Link"
          />Link
        </div>
      </div>

      <div class="modal--footer">
        <div class="d-flex justify-content-end gap-1">
          <div class="col-2">
            <ButtonComponent
              label="Close"
              class="btn--primary--outline--ps"
              @onClick="closeModal()"
              type="button"
            />
          </div>
          <div class="col-auto">
            <ButtonComponent
              label="Save"
              class="btn--primary--ps"
              @onClick="edittask()"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { editTaskById } from "../service/training.service";
export default {
  name: "TaskActionModal",
  data() {
    return {
      task: {
        ...this.taskdata,
      },
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    edittask() {
      editTaskById({
        payload: {
          ...this.task,
          dayName: this.dayid,
          trainingId: this.trainingid,
        },
        success: (res) => {
          console.log(res);
          this.$emit("close");
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
  },
  props: {
    taskdata: {
      type: Object,
    },
    dayid: {
      type: String,
    },
    trainingid: {
      type: String,
    },
  },
  created() {
    this.task.name = this.taskdata.name;
    this.task.description = this.taskdata.description;
    this.task.type = this.taskdata.type;
  },
};
</script>

<style scoped>
.action--input--label {
  display: flex;
  float: left;
  font-size: 14px;
}

.action--input {
  width: 100%;
  height: 40px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  margin-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.action--form--controller {
  margin-bottom: 20px;
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
  width: 43%;
  margin: 5% auto;
  background-color: white;
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
  font-size: 18px;
}

.modal--header {
  border-bottom: 1px solid rgb(202, 202, 202);
  padding: 5px 20px;
}
#button {
  width: 80px;
  margin-top: 10px;

  margin-left: 5%;
}
.modal--footer {
  border-top: 1px solid rgb(202, 202, 202);
  padding: 10px 20px;
}
.card input,
select {
  margin-top: 10px;
  width: 90%;
  margin-left: 5%;
}
</style>

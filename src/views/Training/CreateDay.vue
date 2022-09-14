<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-4">
        <div class="row task--timeline">
          <div class="col-12">
            <img
              src="@/assets/flag.svg"
              alt=""
              srcset=""
              width="40"
              class="mb-3"
            />
            <h4 class="training--title">Create Task for a day</h4>
          </div>
          <div class="col-12">
            <h6 class="training--subtitle">
              Assign tasks for a day by creating Day.
            </h6>
          </div>
          <div class="col-12">
            <SelectInputComponent
              label="Training Day"
              class="my-3"
              placeholder="Enter the training name"
              :options="NoOfDays"
              v-model="trainingdata.name"
            />
            <ButtonComponent
              label="Add New Task +"
              class="btn--secondary--outline--sm"
              @onClick="addTask()"
            />
          </div>
          <div class="col-12 my-4 small">
            <ol>
              <li>Create atleast one task to add the day to training.</li>
              <li>You can add multiple tasks to a day.</li>
              <li>You can add multiple days to a training.</li>
            </ol>
            <ButtonComponent
              label="Create Training"
              class="btn--primary--sm--outline p-2"
              @onClick="createDayWithTasks()"
            />
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-12" v-for="(data, index) in tasks" :key="index">
            <TextInputComponent
              label="Task Name"
              class="my-3"
              placeholder="Enter the training name"
              v-model="tasks[index].name"
            />
            <TextInputComponent
              label="Task Description"
              class="my-3"
              placeholder="Enter the training description"
              v-model="tasks[index].description"
            />
            <div>
              <label for="link" class="action--input--label"
                >Choose Submission type:</label
              ><br />

              <div class="d-flex gap-2 ml-4 action--input--label mt-2">
                <input
                  type="radio"
                  :name="'taskType' + index"
                  value="Link"
                  v-model="tasks[index].type"
                />Submit
                <input
                  type="radio"
                  :name="'taskType' + index"
                  value="Submit"
                  v-model="tasks[index].type"
                />Link
              </div>
            </div>
            <ButtonComponent
              label="Remove Task"
              class="btn--danger--sm--outline my-3"
              @onClick="removeTask(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextInputComponent from "@/components/TextInputComponent.vue";
import SelectInputComponent from "@/components/SelectInputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import NoOfDays from "@/utils/NoOfDays";
export default {
  name: "CreateDay",
  data() {
    return {
      NoOfDays: NoOfDays,
      trainingdata: {
        trainingId: this.$route.params.trainingId,
        name: "",
      },
      tasks: [],
    };
  },
  components: {
    TextInputComponent,
    ButtonComponent,
    SelectInputComponent,
  },
  methods: {
    createDayWithTasks() {
      const payload = {
        trainingId: this.trainingdata.trainingId,
        name: this.trainingdata.name,
        tasks: this.tasks,
      };

      this.$store.dispatch("ADD_TASK_TO_DAY", {
        payload,
        successCallBack: (res) => {
          console.log(res);
        },
        errorCallback: (err) => {
          console.log(err);
        },
      });
    },
    addTask() {
      this.tasks.push({
        name: "",
        description: "",
        type: "",
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.training--title {
  font-weight: 600;
}
.training--subtitle {
  font-weight: 400;
}
.hr--training--page {
  border: 0.5px solid #8e8e8e;
}
.action--input--label {
  font-size: 15px;
  font-weight: 500;
}
.task--timeline {
  position: sticky;
  top: 10%;
}
</style>

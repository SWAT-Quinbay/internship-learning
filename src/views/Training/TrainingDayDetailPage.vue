<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <img src="@/assets/flag.svg" alt="" srcset="" width="40" class="mb-3" />
        <h4 class="training--title">{{ trainingName }} - Day {{ dayId }}</h4>
      </div>
      <div class="col-12">
        <h6 class="training--subtitle">{{ trainingDescription }}</h6>
      </div>
      <hr class="hr--training--page my-4" />
      <div class="col-12">
        <div class="row">
          <div class="col-md-8">
            <TrainingTaskList
              v-for="(data, index) in dayTasklist"
              :key="index"
              :dayTask="data"
              :index="index"
              :lastIndex="dayTasklist.length"
              @show="show"
              @showDelete="showdelete"
            />
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>

    <div>
      <TaskActionModal
        v-if="showModal"
        @close="close"
        :taskdata="temp"
        :dayid="dayId"
        :trainingid="trainingId"
      />
      <DeleteModal
        v-if="showDeleteModal"
        @closeModal="closedelete"
        :taskdata="task_to_be_deleted"
        :dayid="dayId"
        :trainingid="trainingId"
      />
    </div>
  </div>
</template>
<script>
import TrainingTaskList from "@/components/TrainingTaskList.vue";
import DeleteModal from "@/components/DeleteModal.vue";

import TaskActionModal from "@/components/TaskActionModal.vue";
import { mapGetters } from "vuex";
export default {
  name: "TrainingDayDetailPage",
  data() {
    return {
      trainingId: this.$route.params.trainingId,
      dayId: this.$route.params.dayId,
      trainingName: "",
      trainingDescription: "",
      dayTasklist: [],
      showModal: false,
      showDeleteModal: false,
      temp: {},
      task_to_be_deleted: {},
    };
  },
  components: {
    TrainingTaskList,
    TaskActionModal,
    DeleteModal,
  },
  methods: {
    show(taskdata) {
      console.log(taskdata);
      this.temp = { ...taskdata };
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    closedelete() {
      this.showDeleteModal = false;
    },
    showdelete(dayTask) {
      this.showDeleteModal = true;
      this.task_to_be_deleted = { ...dayTask };
    },
  },
  computed: {
    ...mapGetters({
      dayTasklist: "getTrainingDayTaskList",
    }),
  },
  created() {
    this.$store.dispatch("GET_TASK_BY_DAY_AND_TRAINING_ID", {
      trainingId: this.trainingId,
      dayId: this.dayId,
      successCallback: (res) => {
        this.trainingName = res.data.name;
        this.trainingDescription = res.data.description;
        this.dayTasklist = res.data.tasks;
      },
      errorCallback: (err) => {
        console.log(err);
      },
    });
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

.enrolled--people--card {
  position: sticky;
  top: 10%;
  background-color: #ffffff;
  border: 0.5px solid #c4c4c4;
  border-radius: 10px;
  padding: 15px;
}

.people--name {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
}

.people--list {
  max-height: 400px;
  overflow-y: scroll;
  border-radius: 10px;
  border: 0.5px solid #c4c4c4;
}

.people--card {
  border-bottom: 0.5px solid #c4c4c4;
  padding: 10px 15px;
}
</style>

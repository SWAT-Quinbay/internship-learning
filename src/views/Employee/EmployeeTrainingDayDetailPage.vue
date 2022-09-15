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
            <EmployeeTrainingTaskList
              v-for="(data, index) in dayTasklist"
              :key="index"
              :dayTask="data"
              :index="index"
              :lastIndex="dayTasklist.length"
              @show="show"
            />
          </div>
          <div class="col-md-4">
            <!-- <div class="enrolled--people--card">
              <div class="people--card--body">
                <div class="card--header">
                  <h6 class="card--title">
                    Training assigned for
                    <BadgeComponent
                      :label="25 + ' People'"
                      class="badge--basic--neon badge--neon--success--outline"
                    />
                  </h6>
                </div>
                <div class="search--bar mb-2">
                  <div class="row align-items-center">
                    <div class="col-8 pe-0">
                      <TextInputComponent
                        class="my-3"
                        placeholder="Enter the user name"
                      />
                    </div>
                    <div class="col-4">
                      <ButtonComponent
                        label="Search"
                        class="btn--primary--sm--100"
                      />
                    </div>
                  </div>
                </div>
                <div class="people--list">
                  <div
                    class="people--card"
                    v-for="(data, index) in 25"
                    :key="index"
                  >
                    <div class="row align-items-center justify-content-between">
                      <div class="col-9">
                        <p class="people--name">John Doe</p>
                      </div>
                      <div class="col-3">
                        <ButtonComponent
                          label="Remove"
                          class="btn--danger--sm--fx"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div>
      <TaskActionModal v-if="showModal" @close="close" :taskdata="temp" />
    </div>
  </div>
</template>
<script>
import EmployeeTrainingTaskList from "@/components/EmployeeTrainingTaskList.vue";
// import ButtonComponent from "@/components/ButtonComponent.vue";
// import TextInputComponent from "@/components/TextInputComponent.vue";
// import BadgeComponent from "@/components/BadgeComponent.vue";
import TaskActionModal from "@/components/TaskActionModal.vue";
// import { mapGetters } from "vuex";
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
      temp: {
        id: 0,
        name: "",
        description: "",
      },
    };
  },
  components: {
    EmployeeTrainingTaskList,
    // ButtonComponent,
    // TextInputComponent,
    // BadgeComponent,
    TaskActionModal,
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
  },
  // computed: {
  //   ...mapGetters({
  //     dayTasklist: "getTrainingDayTaskList",
  //   }),
  // },
  created() {
    this.$store.dispatch("GET_TASK_BY_DAY_AND_TRAINING_ID", {
      trainingId: this.trainingId,
      dayId: this.dayId,
      successCallback: (res) => {
        this.trainingName = res.data.name;
        this.trainingDescription = res.data.description;
        this.dayTasklist = res.data.tasks;
        // this.$store.dispatch("SET_TRAINING_LIST", res.data);
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

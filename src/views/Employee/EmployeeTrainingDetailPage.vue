<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-8">
        <img src="@/assets/flag.svg" alt="" srcset="" width="40" class="mb-3" />
        <h4 class="training--title">{{ trainingName }}</h4>
        <h6 class="training--subtitle">{{ trainingDescription }}</h6>
        <hr class="hr--training--page my-4" />
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <p
                  class="text-center mt-5 text-muted small"
                  v-if="trainingDayList.length === 0"
                >
                  No Trainging Day found!
                </p>
                <div v-else>
                  <TrainingDaylist
                    v-for="(data, index) in trainingDayList"
                    :key="index"
                    :index="index"
                    :trainingDay="data"
                    :lastIndex="trainingDayList.length"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="enrolled--people--card">
          <div class="people--card--body">
            <div class="card--header">
              <h6 class="card--title">Training Progress</h6>
            </div>
            <div class="search--bar mb-2">
              <div class="row align-items-center">
                <div class="col-8 pe-0">
                  <!-- <TrainingProgressBar :percent="25" /> -->
                  <p class="task--header">Task Completed:</p>
                  <p class="task--header">Task Pending:</p>
                </div>
              </div>
            </div>
            <!-- <div class="people--list">
              <div
                class="people--card"
                v-for="(data, index) in employeeList"
                :key="index"
              >
                <div class="row align-items-center justify-content-between">
                  <div class="col-9">
                    <p class="people--name">{{ data.name }}</p>
                    <p class="m-0 small text-muted">{{ data.email }}</p>
                  </div>
                  <div class="col-3">
                    <ButtonComponent
                      label="Remove"
                      class="btn--danger--sm--fx"
                    />
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TrainingDaylist from "@/components/TrainingDayList.vue";
// import ButtonComponent from "@/components/ButtonComponent.vue";
// import TextInputComponent from "@/components/TextInputComponent.vue";
// import BadgeComponent from "@/components/BadgeComponent.vue";
// import TrainingProgressBar from "@/components/TrainingProgressBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "EmployeeTrainingDetailPage",
  data() {
    return {
      trainingId: this.$route.params.trainingId,
      trainingName: "",
      trainingDescription: "",
      trainingDayList: [],
    };
  },
  components: {
    TrainingDaylist,
    // ButtonComponent,
    // TextInputComponent,
    // TrainingProgressBar,
    // BadgeComponent,
  },
  computed: {
    ...mapGetters({
      // trainingDayList: "getTrainingDayList",
      employeeList: "getEmployeeList",
    }),
  },
  methods: {
    navigate() {
      this.$router.push({ name: "CreateDay" });
    },
  },
  created() {
    this.$store.dispatch("GET_TRAINING_BY_ID", {
      trainingId: this.trainingId,
      successCallback: (res) => {
        this.trainingName = res.data.name;
        this.trainingDescription = res.data.description;
        this.trainingDayList = res.data.days;
        // this.$store.dispatch("SET_TRAINING_LIST", res.data.days);
      },
      errorCallback: (err) => {
        console.log(err);
      },
    });
    this.$store.dispatch("GET_EMPLOYEE_LIST");
  },
};
</script>
<style scoped>
.card--title {
  font-size: 1.2rem;
  font-weight: 600;
}

.task--header {
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
}

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
  font-size: 14px;
}

.people--list {
  max-height: 600px;
  overflow-y: scroll;
  border-radius: 10px;
  border: 0.5px solid #c4c4c4;
}

.people--card {
  border-bottom: 0.5px solid #c4c4c4;
  padding: 10px 15px;
}
</style>

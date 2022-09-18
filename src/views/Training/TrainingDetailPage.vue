<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-8">
        <!-- <img src="@/assets/flag.svg" alt="" srcset="" width="40" class="mb-3" /> -->
        <h4 class="training--title">{{ trainingName }}</h4>
        <h6 class="training--subtitle">{{ trainingDescription }}</h6>
        <hr class="hr--training--page my-4" />
        <div class="mb-2">
          <ButtonComponent
            label="Add Day & Task"
            class="btn--secondary--outline--sm"
            @onClick="navigate"
          />
        </div>
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
              <h6 class="card--title">
                Training assigned for
                <BadgeComponent
                  :label="usersEnrolled.length"
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
                      v-if="!checkTrainingEnrolled(data.id)"
                      label="Add"
                      class="btn--black--sm--fx"
                      @onClick="assignTraining(data.id)"
                    />
                    <ButtonComponent
                      v-else
                      label="Remove"
                      class="btn--danger--sm--fx"
                      @onClick="revokeTraining(data.id)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TrainingDaylist from "@/components/TrainingDayList.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import TextInputComponent from "@/components/TextInputComponent.vue";
import BadgeComponent from "@/components/BadgeComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "TrainingDetailPage",
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
    ButtonComponent,
    TextInputComponent,
    BadgeComponent,
  },
  computed: {
    ...mapGetters({
      // trainingDayList: "getTrainingDayList",
      employeeList: "getEmployeeList",
      usersEnrolled: "getUsersIdByTrainingId",
    }),
  },
  methods: {
    checkTrainingEnrolled(id) {
      // console.log(this.usersEnrolled, id);
      return this.usersEnrolled.includes(id);
    },
    navigate() {
      this.$router.push({ name: "CreateDay" });
    },
    assignTraining(id) {
      this.$store.dispatch("ASSIGN_TRAINING_TO_EMPLOYEE", {
        trainingId: this.trainingId,
        employeeId: id,
      });
    },
    revokeTraining(id) {
      this.$store.dispatch("REVOKE_TRAINING_FROM_EMPLOYEE", {
        trainingId: this.trainingId,
        employeeId: id,
      });
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
    this.$store.dispatch("GET_USERS_ID_BY_TRAINING_ID", this.trainingId);
    // this.$store.dispatch("GET_EMPLOYEE_LIST");
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

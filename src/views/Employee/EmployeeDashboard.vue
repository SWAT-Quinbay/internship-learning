<template>
  <div class="container pt-5">
    <div class="d-flex gap-3 align-items-center">
      <div class="p-2 w-100">
        <TextInputComponent class="my-3" placeholder="Search for training" />
      </div>
      <div class="p-2 w-25">
        <ButtonComponent label="Search" class="btn--primary--sm--100" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-3"
        v-for="trainingdata in myTrainingList"
        :key="trainingdata.id"
      >
        <TrainingCard :training="trainingdata" />
      </div>
    </div>
  </div>
</template>
<script>
import TrainingCard from "@/components/TrainingCard.vue";
// import TrainginMockData from "@/utils/training.mock";
import TextInputComponent from "@/components/TextInputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { mapGetters } from "vuex";
import { getTokenRole, getTokenUserId } from "@/utils/storage.js";
export default {
  name: "EmployeeDashboard",
  data() {
    return {
      // trainingList: TrainginMockData,
      //  trainingList: this.traininglist,
    };
  },
  methods: {
    navigate() {
      this.$router.push({ name: "CreateTraining" });
    },
  },
  components: {
    TrainingCard,
    ButtonComponent,
    TextInputComponent,
  },
  computed: {
    ...mapGetters({
      myTrainingList: "getMyTrainingList",
    }),
  },
  mounted() {
    this.$store.dispatch("GET_TRAININGS_BY_EMPLOYEE_ID", getTokenUserId());
  },
  created() {
    console.log(getTokenRole());
  },
};
</script>
<style scoped>
.action--input {
  width: 100%;
  height: 40px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #d4d4d4;

  padding-left: 10px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.d-flex {
  margin-bottom: 27px;
}
</style>

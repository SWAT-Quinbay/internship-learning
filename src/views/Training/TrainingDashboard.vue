<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-3" v-for="training in trainingList" :key="training.id">
        <TrainingCard :training="training" />
      </div>
    </div>
  </div>
</template>
<script>
import TrainingCard from "@/components/TrainingCard.vue";
import TrainginMockData from "@/utils/training.mock";
export default {
  name: "TrainingDashboard",
  data() {
    return {
      trainingList: TrainginMockData,
    };
  },
  components: {
    TrainingCard,
  },
};
</script>
<style scoped></style>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <img src="@/assets/flag.svg" alt="" srcset="" width="40" class="mb-3" />
        <h4 class="training--title">Frontend Training</h4>
      </div>
      <div class="col-12">
        <h6 class="training--subtitle">Basic - Vue & UI</h6>
      </div>
      <hr class="hr--training--page my-4" />

      <div class="mb-2"><ButtonComponent 
      label="Add Day & Task"
      class="btn--secondary--outline--sm"/></div>

      <div class="col-12">
        <div class="row">
          <div class="col-md-8">
            <TrainingDaylist
              v-for="(data, index) in 1"
              :key="index"
              :index="index"
              :lastIndex="1"
            />
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TrainingDaylist from "@/components/TrainingDayList.vue";
import ButtonComponent from "@/components/ButtonComponent"
export default {
  name: "TrainingDetailPage",
  data() {
    return {
      trainingId: this.$route.params.trainingId,
    };
  },
  components: {
    TrainingDaylist,
    ButtonComponent
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
</style>

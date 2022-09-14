<template>
  <div class="container pt-5">

    <div class="d-flex gap-3 align-items-center">
      <div class="p-2 w-100">
         <div class="action--form--controller">
            <input
              type="text"
              class="action--input"
              required
            />
          </div>
      </div>
      <div class="p-2 w-25 ">
        <ButtonComponent 
        label="Search"
        class="btn--primary"
        />
      </div>
      <div class="p-2 w-25 ">
        <ButtonComponent 
        label="Add Training"
        class="btn--primary--outline"
        />
      </div>
    </div>

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
import ButtonComponent from "@/components/ButtonComponent.vue"
export default {
  name: "TrainingDashboard",
  data() {
    return {
      trainingList: TrainginMockData,
    };
  },
  components: {
    TrainingCard,
    ButtonComponent
  },
};
</script>
<style scoped>

.action--input {
  width: 100%;
  height: 40px;
 font-weight:500;
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
}</style>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <img src="@/assets/flag.svg" alt="" srcset="" width="40" class="mb-3" />
        <h4 class="training--title">Create Training</h4>
      </div>
      <div class="col-12">
        <h6 class="training--subtitle">
          Assign tasks for a day by creating Training.
        </h6>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-8">
            <TextInputComponent
              label="Training Name"
              class="my-3"
              placeholder="Enter the training name"
              v-model="trainingdata.name"
            />
            <TextInputComponent
              label="Training Description"
              class="my-3"
              placeholder="Enter the training description"
              v-model="trainingdata.description"
            />
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
      <div style="max-width: 20%; margin-top: 10px">
        <ButtonComponent
          label="Create Training"
          class="btn--primary--outline p-2"
          @onClick="addTraining()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TextInputComponent from "@/components/TextInputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "CreateTraining",
  data() {
    return {
      trainingdata: {
        adminId: 3,
        name: "",
        description: "",
      },
    };
  },
  components: {
    TextInputComponent,
    ButtonComponent,
  },
  methods: {
    addTraining() {
      console.log(this.trainingdata);
      let trainingdata = { ...this.trainingdata };

      this.$store.dispatch("CREATE_TRAINING", {
        trainingdata,
        successCallback: (res) => {
          console.log(res);
          this.$store.dispatch("GET_TRAINING_LIST");
        },
        errorCallback: (err) => {
          console.log(err);
        },
      });
      this.trainingdata.name = "";
      this.trainingdata.description = "";
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
</style>

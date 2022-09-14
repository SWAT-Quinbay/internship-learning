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
            />
            <TextInputComponent
              label="Training Description"
              class="my-3"
              placeholder="Enter the training description"
            />
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextInputComponent from "@/components/TextInputComponent.vue";
export default {
  name: "CreateTraining",
  components: {
    TextInputComponent,
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

<template>
  <div class="card--outer mb-3" @click="showTrainingPage(training.id)">
    <div class="card--body">
      <img src="@/assets/flag.svg" alt="" srcset="" width="30" />
      <div>
        <p class="card--title">{{ training.name }}</p>
      </div>
      <div>
        <p class="card--description">{{ training.description }}</p>
      </div>
      <div class="d-flex gap-2 mt-3">
        <BadgeComponent
          :label="training.noOfDays + ' Days'"
          class="badge--basic--neon badge--neon--success--outline"
        />
        <BadgeComponent
          :label="training.noOfTasks + ' Tasks'"
          class="badge--basic--neon badge--warning--outline"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BadgeComponent from "@/components/BadgeComponent.vue";
import { getTokenRole } from "@/utils/storage.js";
import { mapGetters } from "vuex";
export default {
  name: "TrainingCard",
  props: {
    training: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    BadgeComponent,
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  methods: {
    showTrainingPage(id) {
      if (getTokenRole()) {
        if (getTokenRole() == "ADMIN") {
          this.$router.push({
            name: "TrainingDetailPage",
            params: { trainingId: id },
          });
        } else {
          this.$router.push({
            name: "EmployeeTrainingDetailPage",
            params: { trainingId: id },
          });
        }
      }
    },
  },
};
</script>
<style scoped>
.card--outer {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 10px;
  padding: 15px;
}

.card--outer:hover {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 8px 0px;
  cursor: pointer;
}

.card--title {
  font-size: 17px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 3px;
  color: #000000;
  font-weight: 500;
}

.card--description {
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
}

.card--sub--title {
  font-size: 13px;
  margin: 0;
  color: #606060;
  margin-bottom: 5px;
}
</style>

<template>
  <div
    :class="
      lastIndex === 1
        ? 'card--list--once'
        : index === 0
        ? 'card--list--outer--first'
        : index === lastIndex - 1
        ? 'card--list--outer--last'
        : 'card--list--outer--inner'
    "
  >
    <div class="card--list">
      <div class="row align-items-center justify-content-between">
        <div class="col-8">
          <div class="row">
            <div class="col-auto">
              <img
                src="@/assets/check.png"
                alt="checkbox"
                width="25"
                :class="
                  dayTask.status
                    ? 'check--logo--completed'
                    : 'check--logo--incompleted'
                "
              />
            </div>
            <div class="col-auto">
              <p class="day--title">{{ dayTask.name }}</p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <ButtonComponent
            label="View Details"
            class="btn--secondary--outline--sm"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapseExample' + index"
          />
        </div>
      </div>
    </div>

    <div class="collapse" :id="'collapseExample' + index">
      <div class="p-3">
        <div class="card card-body">
          <div class="row align-items-center my-1">
            <div class="col-12">
              <p class="task--title">Task Description:</p>
              <p class="task--description">
                {{ dayTask.description }}
              </p>
            </div>
            <div class="col-12 mt-4">
              <p class="task--title mb-2">Task Submission:</p>
              <div class="row align-items-center">
                <div class="col-12" v-if="dayTask.type == 'Link'">
                  <TextInputComponent
                    placeholder="Paste the assignment link here"
                    v-model="taskLink"
                  />
                  <ButtonComponent
                    label="Submit"
                    class="btn--primary--sm mt-2"
                  />
                </div>
                <div class="col-12" v-else>
                  <ButtonComponent
                    label="Set as complete"
                    class="btn--primary--sm mt-2"
                  />
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
import ButtonComponent from "@/components/ButtonComponent.vue";
// import BadgeComponent from "@/components/BadgeComponent.vue";
import TextInputComponent from "@/components/TextInputComponent.vue";
// import {mapGetters} from "vuex"
export default {
  name: "EmployeeTrainingTaskList",
  data() {
    return {
      taskLink: "",
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    dayTask: {
      type: Object,
      required: true,
    },
    lastIndex: {
      type: Number,
      required: true,
    },
  },
  components: {
    ButtonComponent,
    // BadgeComponent,
    TextInputComponent,
  },
  methods: {
    showTaskPage(id) {
      this.$router.push({
        name: "TrainingDayDetailPage",
        params: { dayId: id },
      });
    },
    show() {
      this.$emit("show", { id: 2, name: "task1", description: "sdfghj" });
    },
  },
};
</script>
<style scoped>
.card--list--once {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 10px;
}

.card--list--outer--first {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 10px 10px 0px 0px;
  border-bottom: none;
}

.card--list--outer--inner {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 0px;
  border-bottom: none;
}

.card--list--outer--last {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 0px 0px 10px 10px;
}

.icon--arrow--right {
  cursor: pointer;
}

.task--title {
  font-weight: 600;
  font-size: 14px;
  margin: 0px;
  margin-bottom: 5px;
}

.task--description {
  font-size: 14px;
}

.card--list {
  /* background-color: #f1f1f1; */
  /* border: 1px solid rgb(229, 229, 229); */
  padding: 12px;
}

.day--title {
  font-weight: 500;
  margin: 0px;
}

.check--logo--completed {
  filter: grayscale(0%);
  opacity: 100%;
}

.check--logo--incompleted {
  filter: grayscale(100%);
  opacity: 30%;
}

.card--collapse--bottom {
  border-bottom: 0.5px solid #b8b8b8;
}
</style>

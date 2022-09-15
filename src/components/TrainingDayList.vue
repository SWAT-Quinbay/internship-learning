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
                  (index + 1) % 2 == 0
                    ? 'check--logo--completed'
                    : 'check--logo--incompleted'
                "
              />
            </div>
            <div class="col-auto">
              <p class="day--title">Day {{ trainingDay.name }}</p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <ButtonComponent
            label="View Task Details"
            class="btn--secondary--outline--sm"
            @onClick="showTaskPage(trainingDay.name)"
          />
          <span class="mx-2 ms-3">
            <font-awesome-icon
              class="icon--arrow--right"
              icon="fa-solid fa-chevron-down"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapseExample' + index"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="collapse" :id="'collapseExample' + index">
      <div class="p-3">
        <div class="card card-body">
          <div
            class="row align-items-center my-1"
            v-for="(data, index) in trainingDay.tasks"
            :key="index"
          >
            <div class="col-auto">
              <img
                src="@/assets/check.png"
                alt="checkbox"
                width="18"
                :class="
                  data.status
                    ? 'check--logo--completed'
                    : 'check--logo--incompleted'
                "
              />
            </div>
            <div class="col-10 px-0">
              <p class="task--title">{{ data.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "TrainingDaylist",
  props: {
    trainingDay: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
    },
    lastIndex: {
      type: Number,
      required: true,
    },
  },
  components: {
    ButtonComponent,
  },
  methods: {
    showTaskPage(id) {
      this.$router.push({
        name: "TrainingDayDetailPage",
        params: { dayId: id },
      });
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

.card--list {
  /* background-color: #f1f1f1; */
  /* border: 1px solid rgb(229, 229, 229); */
  padding: 12px;
}

.task--title {
  margin: 0px;
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

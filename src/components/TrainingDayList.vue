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
              <p class="day--title">Day {{ index + 1 }}</p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <ButtonComponent
            label="View Tasks"
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
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
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

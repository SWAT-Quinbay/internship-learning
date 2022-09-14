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
              <p class="day--title">Create Simple Portfolio</p>
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
              <p>Task Description:</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <div class="d-flex gap-2">
                  <ButtonComponent 
                  label="Edit"
                  class="btn--secondary--outline--sm"
                  @onClick="show"/>
                   <ButtonComponent 
                  label="Delete"
                  class="btn--secondary--outline--sm"/>
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
// import {mapGetters} from "vuex"
export default {
  name: "TrainingTaskList",
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
  methods: {
    showTaskPage(id) {
      this.$router.push({
        name: "TrainingDayDetailPage",
        params: { dayId: id },
      });
    },
    show(){
      this.$emit("show",{id:2,name:"task1",description:"sdfghj"})
    }
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

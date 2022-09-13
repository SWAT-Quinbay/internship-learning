<template>
  <div>
    <div class="container">
        <div v-for="n in `${noofday}`" :key="n">
      <div class="card" style="width: 18rem"  >
        Day : {{n}}
        <div class="card-body">
          <div class="card-title"></div>
          <ButtonComponent label="View Tasks" @onClick="openModal()" />
        </div>
      </div>
        </div>

      <div class="card" style="width: 18rem; border-style: dotted" @click="addday">
        <font-awesome-icon
          icon="fa-solid fa-circle-plus fa-beat"
          class="icon"
        />
      </div>
    </div>
    <TaskModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import TaskModal from "../components/taskmodal.vue";

import { mapGetters } from "vuex";
export default {
  name: "TaskPage",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addday(){
        console.log(this.noofday)
        this.$store.dispatch("SET_DAY_COUNT")
    }
  },
  components: {
    ButtonComponent,
    TaskModal,
  },
  computed: {
    ...mapGetters({
      tasklist: "getTask",
      noofday:"getDayCount",
    }),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 30px;
}
.card {
  margin-left: 20px;
}
.card:hover {
  box-shadow: 0px 0px 5px 1px rgb(198, 198, 198);
  transition: 0.3s all;
}
.card .icon {
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
}
</style>

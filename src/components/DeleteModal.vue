<template>
  <div class="modal--bg">
    <div class="container1">
      <div class="cookiesContent" id="cookiesPopup">
        <button class="close mt-2" @click="closemodal()">✖</button>
        <!-- <img src="@/assets/wrong.jpeg" alt="cookies-img" /> -->
        <!-- {{taskdata}} -->
        <p>Are you sure?</p>
        <p>Do you really want to proceed further?</p>
        <!-- <button class="accept" @click="deleteAccept">Yes</button> -->
        <ButtonComponent
          label="Delete"
          @onClick="deleteAccept"
          class="btn--primary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { deleteTaskById } from "../service/training.service";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  name: "DeleteModal",
  methods: {
    closemodal() {
      this.$emit("closeModal");
    },
    deleteAccept() {
      //delete task call
      deleteTaskById({
        payload: {
          taskId: this.taskdata.id,
          dayName: this.dayid,
          trainingId: this.trainingid,
        },
        success: (res) => {
          console.log(res);
          this.$emit("closeModal");
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
  },
  components: {
    ButtonComponent,
  },
  props: {
    taskdata: {
      type: Object,
    },
    dayid: {
      type: String,
    },
    trainingid: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modal--bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.481);
}
.container1 {
  z-index: 100;
  top: 40%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  /* box-shadow: #f5f5f5; */
  /* box-shadow: 0px 0px 20px 2px rgb(191, 191, 191); */
}
.cookiesContent {
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 20px;
  padding: 0px 30px 20px;
}
button.close {
  width: 30px;
  font-size: 20px;
  color: #c0c5cb;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
}
img {
  width: 82px;
  margin-bottom: 15px;
}
p {
  /* margin-bottom: 40px; */
  font-size: 18px;
}
button.accept {
  background-color: #ed6755;
  border: none;
  border-radius: 5px;
  width: 200px;
  padding: 14px;
  font-size: 16px;
  color: white;
  box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
}
</style>

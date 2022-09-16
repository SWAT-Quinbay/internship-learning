<template>
  <div>
    <div class="container col-7">
      <div class="d-flex gap-3 profile--card">
        <div class="profile--img">
          <img src="@/assets/user.png" />
        </div>

        <div class="flex-fill py-5 px-3">
          <!-- <p class="username--text mb-0">{{ employeeDetail[0].name }}</p>
          <p class="text-muted">{{ employeeDetail[0].designation }}</p> -->
        </div>
      </div>
    </div>
    <div class="container col-7">
      <div class="d-flex gap-4 p-3 pb-0 mb-0">
        <p class="heading--text">Trainings Assigned</p>
      </div>
      <div class="row d-flex p-3 pt-0 align-items-center">
        <div class="card col-3 m-2">Training 1</div>
        <div class="card col-3 m-2">Training 1</div>
        <div class="card col-3 m-2">Training 1</div>
        <div class="card col-3 m-2">Training 1</div>
        <!-- <div class="card col-3 m-2">
          Training 1
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  data() {
    return {
      employeeId: 2,
    };
  },
  mounted() {
    // console.log(this.employeeId)
    this.$store.dispatch("GET_EMPLOYEE_DETAIL_BY_ID", this.employeeId);
  },
};
</script>
<style scoped>
.heading--text {
  font-size: 17px;
  font-weight: 500;
}
.username--text {
  font-size: 19px;
  font-weight: 500;
}
.container {
  border-radius: 12px;
  border: 1px solid rgb(223, 223, 223);
  background: #ffffff;
  margin-top: 30px;
}
.container--task {
  background: #ffffff;
  margin-top: 30px;
}
.container:hover {
  box-shadow: 0px 0px 8px #ececec, -20px -20px 20px #ffffff;
}
/* .profile--content {
  padding: 30px 10px;
  border:1px solid black;
} */
/* .profile--img{
     background: #ffffff;
} */
.profile--img img {
  /* border:1px solid black; */
  padding: 30px;
  border-radius: 50%;
  height: 250px;
  width: 250px;
}
</style>

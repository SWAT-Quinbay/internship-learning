<template>
  <div>
    <div class="container">
      <div class="d-flex gap-3 profile--card">
        <div class="profile--img">
          <img src="../../assets/user.png" />
        </div>
        <div class="flex-fill profile--content">
          <h3>John Dasyfagh</h3>
          <p class="text-muted">Developer</p>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="d-flex gap-4 p-3 pb-0 mb-0"><h4>Trainings Assigned</h4>
        </div>
        <hr>
     

      
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeProfile",
};
</script>
<style scoped>

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
.profile--content {
  padding: 30px 10px;
  /* border:1px solid black; */
}
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

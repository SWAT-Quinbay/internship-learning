<template>

  <div class="container">
    <router-view/>
    <div class="d-flex gap-2 card--">
      <div class="w-50">Name</div>
      <div class="w-50">Email</div>
      <div class="w-50">Designation</div>
      <div class="w-50">Verified</div>
      <div class="w-50">Task Status</div>
    </div>


       <div class="d-flex gap-2 card--content">
      <div class="w-50">Monisha</div>
      <div class="w-50">monisha@gmail.com</div>
      <div class="w-50">Developer</div>
      <div class="w-50">Yes</div>
      <div class="w-50">view</div>
    </div>

 <div class="d-flex gap-2 card--content">
      <div class="w-50">Monisha</div>
      <div class="w-50">monisha@gmail.com</div>
      <div class="w-50">Developer</div>
      <div class="w-50">Yes</div>
      <div class="w-50" @click="navigate">view</div>
    </div>
    
    <!-- <table class="table ">
 <thead>
  <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
      <th scope="col">Verified</th>
       <th scope="col">Tasks Completed</th>
    </tr>
 </thead>
 <tbody>
  <tr>
    <td>Monisha</td>
    <td>monisha.a@Quinbay.com</td>
    <td>SDET</td>
    <td>yes</td>
    <td>view</td>
  </tr>
  <tr>
    <td>Monisha</td>
    <td>monisha.a@Quinbay.com</td>
    <td>SDET</td>
    <td>yes</td>
    <td>view</td>
  </tr>
 </tbody>
    </table> -->
  </div>
</template>
<script>
export default {
  name: "TrainingRouterPage",
  data(){
    return{
      id:2
    }
  },
  methods:{
    navigate(){
      this.$router.push({
        name:"EmployeeProfile",
        params:{employeeId : this.id}})
    }
  }
};
</script>
<style scoped>
.container{
  margin-top: 20px;
  border-radius: 17px;
}
.card--{
  padding:18px 5px 18px 5px;
  background-color: #f2f5f8;
  font-weight: 600;
  text-align: center;
}
.card--content{
  padding:15px 5px 15px 5px;
  text-align: center;
  font-size:14px;
  border:none;
  border-bottom:1px solid rgb(221, 221, 221);
  color:#7a7a7a;
}
.card--content:hover{
  cursor: pointer;
  color:#32373e;
}
/* table{
  border-radius: 17px;
}
thead{
  background-color: #f2f5f8;
  color:#55687d;
}
tr{
  padding:10px;
}
td{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:rgb(90, 90, 90);
  font-size: 15px;;
} */

</style>

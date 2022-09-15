<template>

  <div class="container">
      <div class="d-flex gap-3 align-items-center search">
      <div class="p-2 w-75">
         <div class="action--form--controller">
            <input
              type="text"
              class="action--input"
              required
            />
          </div>
      </div>
      <div class="p-2 w-25 ">
        <ButtonComponent 
        label="Search"
        class="btn--primary"
        />
      </div>
      
    </div>

    <div class="d-flex gap-2 card--">
      <div class="w-50">Name</div>
      <div class="w-50">Email</div>
      <div class="w-50">Designation</div>
      <div class="w-50">Verified</div>
      <div class="w-50">DOJ</div>
      <div class="w-50">Profile</div>
    </div>


       <div class="d-flex gap-2 card--content" @click="navigate(employee.id)" v-for="(employee,index) in employeeList" :key="index">
      <div class="w-50">{{employee.name}}</div>
      <div class="w-50">{{employee.email}}</div>
      <div class="w-50">{{employee.designation ? employee.designation : "-"}}</div>
      <div class="w-50">{{employee.status ? "Yes" : "Pending"}}</div>
       <div class="w-50">{{employee.dateOfJoining | Date}}</div>
      <div class="w-50"><ButtonComponent 
      label="view"
      class="btn--secondary--outline--sm"/></div>
    </div>


    
    
  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue"
import {mapGetters} from "vuex"
export default {
  name: "TrainingRouterPage",
  data(){
    return{
     
    }
  },
  components:{
    ButtonComponent
  },
  methods:{
    navigate(id){
      this.$router.push({
        name:"EmployeeProfile",
        params:{employeeId : id}})
    }
  },
  computed:{
    ...mapGetters({
      employeeList:'getEmployeeList'
    })
  },
  mounted(){
    this.$store.dispatch("GET_EMPLOYEE_LIST")
  }

};
</script>
<style scoped>

.action--input {
  width: 100%;
  height: 40px;
 font-weight:500;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  padding-left: 10px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.search {
  margin-bottom: 27px;
  margin-top: 40px;
}
.container{
  margin-top: 20px;
  border-radius: 17px;
}
.card--{
  padding:18px 5px 18px 5px;
  background-color: #f2f5f8;
  font-weight: 600;
  font-size:16px;
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
  font-size:15px;
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

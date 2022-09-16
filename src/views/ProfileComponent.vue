<template>
  <div>
    <div class="container col-7">
      <div class="d-flex gap-3 profile--card">
        <div class="profile--img">
          <img src="@/assets/user.png" />
        </div>

        <div class="flex-fill py-5 px-3">
          <p class="username--text mb-0">{{ employeeDetail.name }}</p>
          <p class="text-muted">{{ employeeDetail.designation }}</p>

        </div>

      </div>
    </div>
    <div class="container col-7 p-3">
      <div class="d-flex gap-3 mb-3 justify-content-center">
      <TextInputComponent 
      label="Enter New Password"
      type="password"
      placeholder="New Password"
      v-model="password.new"/>

       <TextInputComponent 
      label="confirm New Password"
      type="password"
      placeholder="Re-Enter New Password"
      v-model="password.reenter"/>
      </div>
      <span v-if="checkpassword" style="color: red; text-align: center"
            >Both Password should be same</span
          >
      <div class="d-flex justify-content-center">
      <ButtonComponent 
      label="Update Password"
      class="btn--primary--sm"
      @onClick="changePassword()"/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import {updatePassword} from "../service/user.service"
import ButtonComponent from "../components/ButtonComponent.vue"
import TextInputComponent from "../components/TextInputComponent.vue"
// import {getTrainingByEmployeeId} from "../service/employee.service"
import {  getTokenRole} from "@/utils/storage.js";
import NavBar from "@/components/NavBar.vue";
import { NavBarAdminRoutes, NavBarUserRoutes } from "@/utils/NavBarRoutes";

export default {
  name: "ProfileComponent",
  data() {
    return {

      employeeId: this.$route.params.id,
      adminRoute: NavBarAdminRoutes,
      userRoute: NavBarUserRoutes,
      userRole:getTokenRole(),
      password:{
        new:"",
        reenter:""
      },
      checkpassword:false,
    };
  },
  components: {
    NavBar,
    ButtonComponent,
    TextInputComponent
  },
  computed: {
    ...mapGetters({
      user: "getUser",
     employeeDetail:"getEmployeeDetails",
      myTrainingList: "getMyTrainingList",
    }),

  },
  methods:{
    changePassword(){
      if(this.checkpassword==false)
      {updatePassword({
        payload:{id:this.employeeId,password:this.password.new},
        success:(res)=>{
          console.log("password change",res)
          if(res.data=="Success")
          {
            alert("Password Updated")
          }
          else
          {
            alert("something went wrong ..Try again")
          }
        },
        error:(err)=>{
          console.log(err)
        }
      })}
      else{
        alert("both password should be same")
      }
    }
  },
  watch:{
    'password.reenter'(value){
      if(value !== this.password.new )
      {
          this.checkpassword=true
      }
      else
      {
        this.checkpassword=false
      }
    },

  },

  mounted() {
    // console.log(this.employeeId)
    this.$store.dispatch("GET_EMPLOYEE_DETAIL_BY_ID", this.employeeId);
    // this.$store.dispatch("GET_TRAININGS_BY_EMPLOYEE_ID", getTokenUserId());
  },
};
</script>
<style scoped>
.heading--text {
  font-size: 17px;
  font-weight: 500;
}
.username--text {
  font-size: 25px;
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

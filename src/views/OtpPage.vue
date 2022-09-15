<template>
  <div class="container login--body">
    <div class="row justify-content-center">
      <div class="col-11 col-md-4">
        <div class="login">
     

    <TextInputComponent label="Enter OTP" 
    v-model="verifyotp.otp" 
    placeholder="Enter OTP"/>
   <div class="d-flex gap-3 m-3">
     <ButtonComponent 
   class="btn--primary"
    label="verify OTP"
    @onClick="verify()"/>
    
     <ButtonComponent 
class="btn--primary"
    label="Resend OTP"
    @onClick="sendotp()"/>
   </div>
  </div>
    </div>
      </div>
        </div>
</template>

<script>
import {verifyUser} from "../service/user.service"
import TextInputComponent from "../components/TextInputComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue"
export default {
  name: "OtpPage",
  data() {
    return {
      verifyotp: {
        userId: localStorage.getItem("userId"),
        otp: "",
      },
      Timer:0
    };
  },
  components: {
    TextInputComponent,
    ButtonComponent
  },
  watch:{
   
  },
  methods:{
    verify(){
        verifyUser({
            payload:this.verifyotp,
            success:(res)=>{
                console.log(res)
                if(res.status===200)
                {
                    this.$router.push({name:"EmployeeDashboard"})
                }
            },
            error:(err)=>{
                console.log(err)
            }
        })
    },
    sendotp(){

    }
  },
  created(){[
    setTimeout(function(){
        alert("timeout!!")
    },5000)
  ]}
};
</script>

<style scoped>
.action--input--label {
display:flex;
float:left;
font-size: 14px;

}

.action--input {
  width: 100%;
  height: 40px;
 font-weight:500;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.action--form--controller {
  margin-bottom: 27px;
}

.login {
  margin-top: 20vh;
  margin-bottom: 20vh;
  background-color: white;
  color: black;
  border-radius: 7px;
  padding: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
    box-shadow:0px 0px 15px 3px #e6e8eb;
}

.login--body {
  height: 100vh;
}

.login--header {
  color: black;
  padding-top: 5px;
  font-style: bold;
  margin-bottom: 25px;
  font-weight: bold;
}

.login--button {
  margin-top: 40px;
  margin-bottom: 25px;
}
</style>

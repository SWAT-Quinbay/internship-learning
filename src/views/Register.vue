<template>
  <div class="container login--body">
    <div class="row justify-content-center">
      <div class="col-11 col-md-4">
        <div class="login">
          <center>
            <h4 class="login--header">SIGN UP</h4>
          </center>
       <div class="row">   <TextInputComponent class=" col-6 "
          label="Enter Name"
          type="text"
          placeholder="Enter Name"
          v-model="user.name"
          />
           <SelectInputComponent class="col-6"
          :options="options"
          label="Choose Designation"
          v-model="user.designation"
          />
       </div>
             <TextInputComponent class="my-3"
          label="Enter Email"
          type="text"
          placeholder="Enter Email"
          v-model="user.email"
          />
         

           <!-- <TextInputComponent class="my-3"
          label="Enter Password"
          type="Password"
          placeholder="Enter Password"
          v-model="user.password"
          />

           <TextInputComponent class="my-3"
          label="Re-Enter Password"
          type="Password"
          placeholder="Re-Enter Password"
          /> -->

          <span v-if="UnAuthorized" style="color: red; text-align: center"
            >Wrong Credentials! Acces Denied.</span
          ><div class="login--button">
          <div class="row justify-content-center">
            <div class="col-7">
              
            <ButtonComponent
            label="Sign Up"
            class="btn--primary"
           @onClick="registeruser()"
            type="button"
          />
            </div>
          </div>
          </div>
 <div class="fw-normal text-center" style="cursor:pointer" @click="navigate"><p style="color:#5653ff;font-size:14px">Already have an account ?</p></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue"
import TextInputComponent from "../components/TextInputComponent.vue"
import SelectInputComponent from "../components/SelectInputComponent.vue"
import {registerUser} from "../service/user.service"
import {options} from "@/utils/NoOfDays";

export default{
    name:"SignupPage",
    data()
    {
        return{
          options,
          user:{
            name:"",
            email:"",
            // password:"",
            designation:""
          }
        }
    },
    components:{
        ButtonComponent,
        TextInputComponent,
        SelectInputComponent
    },
    methods:{
       navigate(){
      this.$router.push({path:"login"})
    },
      registeruser(){
        registerUser({
          user:this.user,
          success:(res)=>{
            console.log("register",res)
            if(res.status=="OK")
            {
              this.$router.push({name:"LoginPage"})
            }
            else{
              alert("try again!!")
            }
          },
          error:(err)=>{
            console.log(err)
          }
        })

        // this.$router.push({name:"OtpPage"})
      }
    }

}
</script>

<style scoped>
.action--input--label {
display:flex;
float:left;
font-size: 13px;
font-weight:500;
}

.action--input {
  width: 100%;
  height: 40px;
 
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin-top: 5px;
  padding-left: 10px;
  outline: none;
}

.action--input:focus {
  border: 1px solid #b4aef4;
}

.action--form--controller {
  margin-bottom: 33px;
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

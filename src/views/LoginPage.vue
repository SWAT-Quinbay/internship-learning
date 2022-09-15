<template>
  <div class="container login--body">
    <div class="row justify-content-center">
      <div class="col-11 col-md-4">
        <div class="login">
          <center>
            <h4 class="login--header">Sign-in to your account</h4>
          </center>
          <div class="action--form--controller">
            <label for="user-name" class="action--input--label"
              >Enter Email:</label
            >
            <input
              type="text"
              class="action--input"
               v-model="user.email"
              required
            />
          </div>
          <div class="action--form--controller ">
     <label for="user-password" class="action--input--label"
              >Enter Password:</label
            >
            <input
              type="password"
              class="action--input"
              v-model="user.password"
            />
          </div>
          <span v-if="UnAuthorized" style="color: red; text-align: center"
            >Wrong Credentials! Acces Denied.</span
          >
          <div class="login--button">
            <div class="row justify-content-center">
              <div class="col-7">
                <ButtonComponent
                  label="Login"
                  class="btn--primary"
                  type="button"
                  @onClick="login()"
                />
              </div>
            </div>
          </div>
          <div class="fw-normal text-center" style="cursor:pointer" @click="navigate"><p style="color:#5653ff;font-size:14px">Don't have an account ?</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import {loginUser} from "../service/user.service"
export default {
  name: "LoginPage",
  data() {
    return {
      user:{
            email:"",
            password:"",
          },
          UnAuthorized:false
    };
  },
  components: {
    ButtonComponent,
  },
  methods:{
    navigate(){
      this.$router.push({path:"register"})
    },
    login(){
      this.UnAuthorized=false
    loginUser({
          user:this.user,
          success:(res)=>{
            console.log("login",res)
            if(res.status=="OK")
            {
              alert("Login Successfull")
            }
            else{
              this.UnAuthorized=true
            }
          },
          error:(err)=>{
            console.log(err)
          }
        })
    }
  }
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

<template>
  <nav class="navbar navbar-expand-lg" id="navbar--bg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!-- <img
          src="@/assets/swat.png"
          alt=""
          width="80"
          class="d-inline-block align-text-top"
        /> -->
       Admin
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Home</router-link
            >
           
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/createtask"
              >create Task</router-link
            >
           
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/viewreport"
              >View Report</router-link
            >
          
          </li>
          <li >
            <ButtonComponent
                label="Logout"
                buttonStyle="btn--primary--outline"
                type="button"
            />
          </li>
        </ul>
        <!-- <div class="d-flex"> -->
          
        <!-- </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue"
export default{
      name:"NavBar",
    data(){
        return {

        }
    },
    components:{
        ButtonComponent,
    },
  
}
</script>


<style scoped>
  #navbar--bg {
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    position :sticky;
    z-index: 1;
    top:0%
  }
  #nav li.nav-link active{
    color:red;
  }
 
</style>
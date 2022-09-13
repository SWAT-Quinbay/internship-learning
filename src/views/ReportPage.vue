<template>
    <div class="container">
        <div class="userlist">
        <div class="card" v-for="(username,index) in user" :key="index">
          {{username.name}}
        </div>
        </div>
        <div class="report">

        </div>
    </div>
</template>

<script>
import user from "./userdata"
export default{
name:"ReportPage",
data(){
    return{
        user:user,
    }
}
}
</script>

<style scoped>
.container{
    margin-top:20px;
    display:flex;
    flex-direction: row;
    height:100%;
    justify-content:space-evenly;
}
.userlist{
    flex:30%;
    height:100%;
     border-radius:10px;
     box-shadow: 0px 0px 10px 1px rgb(220, 220, 220);

}
.report{
    flex:65%;
     height:100%;
      border-radius:10px;
     box-shadow: 0px 0px 5px 1px rgb(220, 220, 220);

}
</style>

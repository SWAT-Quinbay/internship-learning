<template>
  <div>
    <div class="card">
       
     <div class="container">  <div class="badge"><BadgeComponent :label="true ? 'link required' : 'link required'" /></div>
     <div>
        <div class="icon"><font-awesome-icon icon="fa-solid fa-pen fa-2xl" /></div>
        <div class="icon"><font-awesome-icon icon="fa-solid fa-trash fa-2xs" /></div></div>
      </div>
      <div class="card-title">{{ task.taskname }}
      </div>
    </div>
  </div>
</template>

<script>
import BadgeComponent from "@/components/BadgeComponent.vue";
export default {
  name: "TaskComponent",
  data(){
    return {
      
    }
  },
  props: {
    task: {
      type: Object,
    },
  },
  components: {
    BadgeComponent,
  },
};
</script>

<style scoped>
.badge{
    margin-left:2px;
}
.card-title{
    border-radius:7px;
    background-color: rgb(248, 248, 248);
    padding:2vh;
}
.card {
  margin: 1vh 1vh 1vh 1vh;
  padding: 1vh 2vh 2vh 2vh;
  border:none;
  
  box-shadow:rgba(0, 0, 0, 0.2) 0px 3px 5px;
}
.card .icon {
  margin-left: 2vw;
  display: inline;
}
.container {
  width: 100%;
  margin-right: 10px;
  display:flex;
  justify-content: space-between;
}
</style>

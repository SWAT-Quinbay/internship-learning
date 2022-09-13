<template>
     <div class="modal--bg">
    <div class="modal--body">
      <div
        class="modal--header d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="modal--header--text">Task List</h5>
        </div>
        <div>
          <span class="close" @click="closeModal">&times;</span>
        </div>
      </div>

        <div class="modal--content">
             <div class="action--form--controller">
            <label for="user-password" class="action--input--label"
              >Task Description:</label
            >
            <input
              type="text"
              class="action--input"
              min="20"
              max="500"
              v-model="task.taskname"
            />
          </div>
        </div>


         <div class="modal--footer">
        <div class="d-flex justify-content-end gap-1">
          <div class="col-3">
            <ButtonComponent
              label="Close"
             class="btn--primary--outline"
              @onClick="closeModal()"
              type="button"
            />
          </div>
          <div class="col-auto">
            <ButtonComponent
              :label="modalButtonLabel"
              class="btn--primary"
             
              type="button"
            />
          </div>
        </div>
      </div>
    </div></div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue"
export default{
    name:"TaskActionModal",
    data(){
      return{
        task:{
          taskname:"",
          day:"",
          inputtype:""
        }
      }
    },
    components:{
        ButtonComponent,
    },
    methods:{
      closeModal(){
        this.$emit("close")
      }
    },
    props:{
      taskdata:{
        type:Object,
      }
    },
    created(){
      this.task.taskname=this.taskdata.taskname;
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
.modal--bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.481);
}
.modal--body {
  width: 45%;
  margin: 5% auto;
  background-color:white;
  border-radius: 1vh;
}
.modal--content {
  padding: 1vh 2vh 1vh 2vh;
  max-height: 70vh;
  overflow: scroll;
}
.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  float: right;
  display: inline;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal--header--text {
  margin: 0;
}

.modal--header {
  border-bottom: 1px solid rgb(202, 202, 202);
  padding: 5px 20px;
}
#button {
  width: 80px;
   margin-top:10px;

  margin-left:5%;
}
.modal--footer {
  border-top: 1px solid rgb(202, 202, 202);
  padding: 10px 20px;
}
.card input,select {
  margin-top:10px;
  width:90%;
  margin-left:5%;

}
</style>

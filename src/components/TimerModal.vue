<template>
      <div class="modal--bg">
    <div class="modal--body">
      <div
        class="modal--header d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="modal--header--text">Enter OTP</h5>
        </div>
        <div>
          <span class="close" @click="closeModal">&times;</span>
        </div>
      </div>

<div class="modal--content">
<div>
    <input type="text" placeholder="Enter OTP"/>
</div>
</div>

          <div class="modal--footer">
        <div class="d-flex justify-content-end gap-1">
          <!-- <div class="col-3">
            <ButtonComponent
              label="Close"
              buttonStyle="btn--primary--outline"
              @onClick="closeModal()"
              type="button"
            />
          </div> -->
          <div class="col-auto">
            <ButtonComponent
              :label="modalButtonLabel"
              buttonStyle="btn--primary"
             
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
    name:"TimerModal",
    components:{
        ButtonComponent
    }
}
</script>

<style scoped>
input:focus,:active{
  border:none;
}

.action--form--controller {
  margin-bottom: 20px;
  border:1px solid rgb(175, 175, 175);
  border-radius:17px;
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
    display: flex;
  margin: auto;
}

.modal--header {
  /* border-bottom: 1px solid rgb(202, 202, 202); */
  padding: 5px 20px;
 
}
#button {
  width: 80px;
   /* margin-top:10px; */
   display: flex;
margin: auto;
}
.modal--footer {
  /* border-top: 1px solid rgb(202, 202, 202); */
  padding: 10px 20px;
}
.card input,select {
  margin-top:10px;
  width:90%;
  margin-left:5%;

}
</style>

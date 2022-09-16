<template>
    <div class="loader--bg">
        <div class="container">
            <img src="../assets/loader.gif"/>
        </div>
    </div>
</template>

<script>
export default{
    name:"LoaderComponent"
}
</script>

<style scoped>
.loader--bg{
position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color:white;
}
img{
    top:50%;
    left:50%;
    position: absolute;
    transform:translate(-50%,-50%)
}
</style>

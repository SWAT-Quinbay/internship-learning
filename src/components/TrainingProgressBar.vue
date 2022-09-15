<template>
  <div class="circular--progress--bar"></div>
</template>
<script>
export default {
  name: "TrainingProgressBar",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped>
.circular--progress--bar {
  fill: none;
  stroke: #f00;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 100 100;
  stroke-dashoffset: 0;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.35s;
}
</style>

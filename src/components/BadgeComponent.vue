<template>
  <span>
    {{ label }}
  </span>
</template>
<script>
export default {
  name: "BadgeComponent",
  props: {
    label: {
      type: String,
      default: () => {},
    },
  },
};
</script>
<style scoped>
.badge--outline--sm {
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  width: fit-content;
  margin: 0;
}

.badge--basic--neon {
  margin: 0;
  border-radius: 5px;
  padding: 2px 10px;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  width: fit-content;
  height: fit-content;
}

.badge--neon--success--outline {
  background-color: #d7f7c2;
  color: #006908;
}

.badge--neon--warning--outline {
  background-color: #fef0b9;
  color: #b18800;
}

.badge--warning--outline {
  background-color: #fef0b9;
  color: #bc9102;
}
.badge--success--outline {
  background-color: #d0f4e8;
  color: #22a77c;
}
.badge--error--outline {
  background-color: #ffe1e7;
  color: #c44f63;
}
.badge--solid--lg {
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
  margin: 0;
}
.badge--warning--solid {
  background-color: #faa338;
  color: #ffffff;
}
.badge--success--solid {
  background-color: #27bd68;
  color: #ffffff;
}
.badge--error--solid {
  background-color: #bd2727;
  color: #ffffff;
}
</style>

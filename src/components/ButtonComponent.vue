<template>
  <button :type="type" @click="onClick()" :disabled="disabled">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      default: "Submit",
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
<style scoped>
.btn--primary {
  color: white;
  border: 1px solid #5653ff;
  outline: none;
  width: 100%;
  /* height: 35px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #5653ff;
}

.btn--secondary--outline--sm {
  color: #000000;
  border: 1px solid #a4a4a4;
  outline: none;
  width: fit-content;
  /* height: 35px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 15px;
  background-color: transparent;
}

.btn--primary--outline {
  color: #5653ff;
  border: 1px solid #5653ff;
  width: 100%;
  /* height: 35px; */
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #ffffff;
}

.btn--primary--mc {
  color: white;
  border: 1px solid #665eff;
  outline: none;
  width: max-content;
  /* height: 80%; */
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  padding: 2px 15px;
  margin-top: 5%;
  background-color: #665eff;
}

.btn--black {
  color: rgb(255, 255, 255);
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 35px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 15px;
  background-color: #000000;
}
.btn--black--outline {
  color: #000000;
  border: 1px solid #000000;
  width: 100%;
  /* height: 35px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;

  height: 35px;

  background-color: #ffffff;
}

.btn--danger {
  color: white;
  border: 1px solid #ffffff;
  border: none;
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #dc3545;
}

.btn--primary--sm--100 {
  color: #ffffff;
  border: 1px solid #5653ff;
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #5653ff;
}

.btn--disabled--sm--100 {
  color: white;
  border: 1px solid #ffffff;
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #dfdfdf;
}

.btn--primary--sm {
  color: #ffffff;
  border: 1px solid #5653ff;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #5653ff;
}

.btn--primary--sm--outline {
  color: #5653ff;
  border: 1px solid #5653ff;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--primary--sm--outline--100 {
  color: #5653ff;
  border: 1px solid #5653ff;
  /* border: none; */
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--delete--sm {
  color: #ffffff;
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  min-width: 80%;
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #000000;
}

.btn--edit--sm {
  color: rgb(0, 0, 0);
  border: 1px solid #000000;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 0px;
  background-color: #ffffff;
}

.btn--danger--sm--fx {
  color: #dc3545;
  border: 1px solid #dc3545;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 0px;
  background-color: #ffffff;
}

.btn--danger--sm--outline {
  color: #dc3545;
  border: 1px solid #dc3545;
  outline: none;
  /* width: 100%; */
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #ffffff;
}

.btn--danger--sm--outline--100 {
  color: #dc3545;
  border: 1px solid #dc3545;
  outline: none;
  width: 100%;
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 15px;
  background-color: #ffffff;
}

.btn--secondary {
  color: white;
  border: 1px solid #ffffff;
  border: none;
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #a4a4a4;
}
.btn--disabled {
  color: white;
  border: 1px solid #ffffff;
  /* border: none; */
  outline: none;
  width: 100%;
  /* height: 30px; */
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 15px;
  background-color: #dfdfdf;
}

.btn--disabled--sm {
  color: white;
  border: 1px solid #ffffff;
  /* border: none; */
  outline: none;
  /* width: 100%; */
  /* height: 30px; */
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px;
  background-color: #dfdfdf;
}
</style>

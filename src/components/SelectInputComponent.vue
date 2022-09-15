<template>
  <div class="form--controller">
    <label :for="labelFor" v-if="label" class="label--style">{{ label }}</label>
    <br />
    <select
      name=""
      id=""
      @input="$emit('input', $event.target.value)"
      class="form--control"
    >
      <option :value="null" :key="-1">{{ nullValueName }}</option>
      <option v-for="(item, index) in options" :value="item.value" :key="index">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectInputComponent",
  props: {
    labelFor: {
      type: String,
    },
    label: {
      type: String,
    },
    options: {
      type: Array,
    },
    nullValueName: {
      type: String,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.form--control {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 10px;
  padding: 6px 10px;
  width: fit-content;
}

.form--control::placeholder {
  font-size: 15px;
}

.label--style {
  margin-bottom: 8px;
  font-weight: 500;
}

.form--control:focus {
  outline: none;
}
</style>

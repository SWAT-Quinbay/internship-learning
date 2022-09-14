<template>
  <div class="form--controller">
    <label :for="labelFor" class="label--style">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value" @input="$emit('input', $event.target.value)"
      class="form--control"
    />
  </div>
</template>
<script>
export default {
  name: "TextInputComponent",
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.form--control {
  border: 1px solid rgb(222, 222, 222);
  border-radius: 10px;
  padding: 8px 10px;
  width: 100%;
}
.label--style {
  margin-bottom: 8px;
  font-weight: 500;
}

.form--control:focus {
  outline: none;
}
</style>

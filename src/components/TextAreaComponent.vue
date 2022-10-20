<template>
  <div class="form--controller">
    <label :for="labelFor" v-if="label" class="label--style">{{ label }}</label>
    <textarea
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form--control"
    />
  </div>
</template>
<script>
export default {
  name: "TextAreaComponent",
  props: {
    labelFor: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
    },
    placeholder: {
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
  width: 100%;
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

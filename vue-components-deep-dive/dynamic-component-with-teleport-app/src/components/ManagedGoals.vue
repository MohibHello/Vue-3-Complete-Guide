<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goals</button>
  <teleport to="">
    <error-alert v-if="inputIsValid">
      <h1>Input is invalid</h1>
      <p>please provide few characters</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
    },
  },
};
</script>
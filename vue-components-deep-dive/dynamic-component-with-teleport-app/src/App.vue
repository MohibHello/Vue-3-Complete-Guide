<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Click</button>
    <button @click="setSelectedComponent('managed-goals')">Click</button>
    <!-- <active-goals v-if="selectedComponent==='active-goals'"></active-goals>
    <managed-goals v-if="selectedComponent==='managed-goals'"></managed-goals> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ManagedGoals from "./components/ManagedGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components:{
    TheHeader,
    ManagedGoals,
    ActiveGoals
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
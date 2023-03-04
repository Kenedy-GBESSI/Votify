<template>
    <div class="layout-dashboard">
        <Header /> 
        <div class="second-party">
          <Sidebar />
          <RouterView />
        </div>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import { RouterView } from 'vue-router';

</script>

<style scoped>
.layout-dashboard{
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background:#F7F7F7;
}
.layout-dashboard .second-party{
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

}

</style>
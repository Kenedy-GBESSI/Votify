<script setup>
import {RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
const route = useRoute();
const layout = computed(()=>{
       return route.meta.layout ;
})
</script>

<template>
    <component :is="layout" v-if="layout">
      <RouterView />
    </component>
    <div v-if="layout == ''">
       <RouterView />
    </div>
</template>

<style scoped>
</style>

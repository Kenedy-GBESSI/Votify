<template>
    <p class="routename">{{ route.name[0].toUpperCase()+ route.name.slice(1) }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style scoped>
.routename{
    position: absolute;
    left: 2.5%;
    top: 1%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
</style>
<template>
    <div class="chatjs">
        <canvas id="myChart" width="320" height="320">Hello</canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted,ref } from 'vue';
let pr = ref(localStorage.getItem("public"))
let pv = ref(localStorage.getItem("private"))

const data = {
  labels: [
    'Public',
    'Private',
  ],
  datasets: [{
    label: 'Votify evolution',
    data: [pr,pv],
    backgroundColor: [
      '#4FD18B',
      '#DC3545',
    ],
    cutout: '80%',
    borderWidth: 1,
    hoverOffset: 1,
  }]
};
const config = {
  type: 'doughnut',
  data: data,
  options: {
     plugins: {
        legend: {
            display: true,
            position: 'left'
        }
     }
  }
};
onMounted(() => {
    const myChart = new Chart(
        document.getElementById("myChart"),
        config
    )
})

</script>

<style  scoped>
@media screen and (max-width: 768px) {
   canvas{
     width: 250px;
     height: 250px;
   }
}

</style>
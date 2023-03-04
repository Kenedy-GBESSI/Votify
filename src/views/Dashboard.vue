<template>
    <div class="dashboard">
       <RouteName />
       <h3>Welcome <span v-if="store.state.user"> {{ store.state.user.email.split('@')[0]}} !!!</span></h3>
       <div class="card-row">
         <div class="card-column">
          <p>Total users</p>
          <h3><span>{{ num_users }} </span>  users</h3>
         </div>
         <div class="card-column">
           <span>Répartition des votes</span>
           <ChatComponent :num_private="num_private" :num_public="num_public" />
         </div>
       </div>
    </div>
</template>

<script setup>
import ChatComponent from '../components/ChatComponent.vue';
import RouteName from '../components/RouteName.vue';
import { onBeforeMount,ref,onMounted } from 'vue';
import store from '../store';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
let num_users = ref(parseInt(localStorage.getItem("number")))
let num_private = ref(0)
let num_public = ref(0)

onBeforeMount(() =>{
    store.dispatch("fetchUser");
})
onMounted( async () => {
  const querySnapshot = await getDocs(collection(db, "Votes"));
      querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      if(doc.data().electionType == 'PUBLIC'){
         num_public.value++;
         localStorage.setItem("public",num_public.value)
      }else{
        num_private.value++;
        localStorage.setItem("private",num_private.value)
      }
    }); 
})



</script>

<style scoped>
.dashboard{
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.dashboard > h3{
  text-align: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
}
.card-row{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.card-column{
  width: 37%;
  margin: 0 2%;
  height: 280px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.card-column p{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #808191;
}
.card-column > span{
  display: inline-block;
  position: absolute;
  width: 85%;
  top: 0;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding: 1rem 0 0 0;
  color: #000000;

}
.card-column h3{
  font-family: 'Lato';  
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;
  color: #000000
}
@media screen and (max-width: 768px) {
  .card-column{
    width: 98%;
    margin: 2%;
  }
  .dashboard{
    height: auto;
  }
  .dashboard h3{
  font-size: 30px;
  }

}
</style>
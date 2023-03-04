<template>
  <div class="users">
    <RouteName />
    <div class="datatable">
       <h3>List of users</h3>
       <EasyDataTable 
       :headers="headers" 
       :items="items" 
       buttons-pagination
       @click-row="showRow"
       />
       row clicked:<br />
      <div id="row-clicked" ref="Row"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted,ref } from 'vue';
import { db } from '../firebase';
import RouteName from '../components/RouteName.vue';
import type { Header,Item , ClickRowArgument} from 'vue3-easy-data-table';
import { collection, getDocs } from "firebase/firestore";
const Row = ref(null);
let users = ref([]);

onMounted( async () => {
  const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
       let user = {
          "id": doc.id,
          "fullname": doc.data().firstName + " " + doc.data().lastName,
          "username": doc.data().username,
          "phone": doc.data().phone,
          "email": doc.data().email
       }
      users.value.push(user) 
      localStorage.setItem("number",JSON.stringify(users.value.length))
    }); 
})

const headers: Header[] = [ 
    { text: "Id", value: "id" },
    { text: "Fullname", value: "fullname", sortable: true },
    { text: "Email", value: "email", sortable: true },
    { text: "Username", value: "username", sortable: true },
    { text: "Phone", value: "phone", sortable: true }
];
const items: Item[] = users.value 
type ClickRowArgument = Item & {
  isSelected?: boolean,
  indexInCurrentPage?: number,
}

const showRow = (item: ClickRowArgument) =>{
  Row.value.innerHTML = JSON.stringify(item);
}

</script>

<style  scoped>
.users{
position: relative;
display: flex;
flex-direction: column;
width: 100%;
}
.users .datatable{
  position: absolute;
  background: #fff;
  top: 52%;
  transform: translate(-49%,-50%);
  left: 48.9%;
  border-radius: 10px;
  width: 95%;
}
.datatable h3{
  padding: 0 0.3%;
}

</style>
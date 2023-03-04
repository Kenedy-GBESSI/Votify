<template>
    <div :class="[isExpanded ? 'not-expanded': '']" class="sidebar">
        <ul class="wrapper-sidebar">
            <li class="sidebar-elt" :class="[selected == 0 ? 'active': '']" @click="changeSelected(0)">
                <router-link to="/dashboard">
                    <i class="fa-solid fa-house"></i>
                    <span >Dashboard</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 1 ? 'active': '']" @click="changeSelected(1)">
                <router-link to="/Users">
                    <i class="fa-solid fa-user-group"></i>
                    <span>Users</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 2 ? 'active': '']" @click="changeSelected(2)">
                <router-link to="/Profile">
                    <i class="fa-solid fa-user"></i>
                    <span>Profile</span> 
                </router-link>
            </li> 
            <li class="sidebar-elt" :class="[selected == 3 ? 'active': '']" @click="changeSelected(3),logout()">
                <router-link to="/#">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span> 
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from '../store';
let isExpanded = ref(false);
let selected = ref(0);
const changeExpanded = () =>{
    isExpanded.value = !isExpanded.value;
}
const changeSelected = (i) =>{
     selected.value = i
}
const logout = () =>{
    store.dispatch("logout");
}
</script>

<style scoped>
.sidebar{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14%;
    background: #FFFFFF;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 50px 0px;
}
.sidebar .wrapper-sidebar{
   list-style: none;
   height:calc(96.5vh - 80px);
   width: 80%;
   display: flex;
   padding: 0;
   flex-direction: column;
}
.wrapper-sidebar .sidebar-elt{
    display: flex;
    margin: .5rem 0;
    align-items: center;
    border: none;
}

.sidebar ul li a{
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #808191;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    padding: 1.2rem;
    width: 100%;
    font-size: 15px;
    line-height: 22px;
}
.sidebar ul li a span, .sidebar ul li a i{
    display: inline-block;
    margin: 0 0.3rem; 
    text-align: center;
}
.not-expanded > ul li a span:last-child{
   display: none;
}
.not-expanded{
    width: auto!important;
}
li.active{
    background: #5C78D3;
    border-radius: 12px;
}
li.active a{
    color: #FFFFFF!important;
}

@media screen and (max-width: 992px) {
    .sidebar > ul li a span:last-child{
       display: none;
    }
    .sidebar{
        width: auto;
    }
    .sidebar{
    align-items: start;
   }
    
   
}

</style>
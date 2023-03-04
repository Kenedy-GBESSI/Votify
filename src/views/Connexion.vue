<template>
    <div class="home">
        <div class="part-img">
           <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="part-connexion">
            <div class="connexion-image">
               <img src="../assets/images/image1.png" alt="">
            </div>
            <div class="connexion-form">
                 <p>Connexion</p>
                 <form>
                   <div class="control-field">
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email" required v-model.lazy="email">
                      <span v-if="store.state.errEmail">{{ store.state.errEmail }}</span>
                   </div>
                   <div class="control-field">
                      <label for="password">Password</label>
                      <input type="password" name="password" id="password" required v-model.lazy="password">
                      <span v-if="store.state.errPassword">{{ store.state.errPassword }}</span>
                   </div>
                   <p class="forgot-part">
                    <a href="#">Forgot your password ?</a>
                    <span>Reset it</span>
                   </p>
                  <button class="submit" @click.prevent="signIn()">Sign in</button>
                  <p class="orContinue">Or continue with </p>
                  <div class="social-authentification-links">
                    <button>
                        <i class="fa-brands fa-google"></i>
                    </button>
                    <button>
                        <i class="fa-brands fa-facebook"></i>
                    </button>
                  </div>
                 </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import store from '../store';
let email ='';
let password = '';
const signIn = () =>{
    store.dispatch("login",{email, password})
}
</script>

<style scoped>
.home{
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home .part-connexion{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    flex-wrap: wrap;
}
.part-connexion .connexion-image {
    display: flex;
    justify-content: center;
    align-items: center;
}
.connexion-image img{
    max-width: 100%;
    height: auto;
}
.part-connexion .connexion-form{
    height: 64vh;
    position: relative;
    width: 40%;
}
.connexion-form > p{
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 600;
   font-size: 32px;
   line-height: 44px;
   color: #11142D;
   text-align: center;
}
form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
}
form input{
    width: 93%;
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    height: 48px;
    padding: 0 10px;
    outline: none;
    font-size: 15px;
    margin: 10px 0;
}
form .control-field{
    display: flex;
    flex-direction: column;
    padding: 5px 0;
}
.control-field label{
font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 18px;
padding-left: 1px;
color: #5C78D3;
}
.control-field span{
    font-size: 14px;
    text-transform: lowercase;
    color: rgb(198, 122, 86);
}
.forgot-part{
    position: relative;
    display: flex;
    padding-left: 1px;
    justify-content: space-between;
}
.forgot-part a, .forgot-part span{
    text-decoration: none;
    font-family: 'Sansation';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    color: #000000;
}
.forgot-part span{
    color: #1546E7;
    cursor: pointer;
}
.social-authentification-links{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  10px 5% 5% 0 ;
}
.social-authentification-links button{
   margin: 0 5%;
   height: 38px ;
   width:20% ;
   border: none;
   cursor: pointer;
   background: rgba(0, 0, 0, 0.02);
   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
   border-radius: 20px;
   font-family: 'Sansation';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 20px;
   color: #059BE5;
}
.submit{
    display: inline-block;
    margin: 0 auto;
    width: 25%;
    background: #5C78D3;
    border-radius: 8px;
    height: 45px;
    border: none;
    font-family: 'Sansation';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
}
.orContinue{
    text-align: center;
    font-family: 'Sansation';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    margin: 5% 0 0 0;
    color: #000000;
}

@media screen and (max-width: 992px){
    .part-connexion .connexion-form{
        width: 100%;
    }
    .submit{
      width: 50%;
    }
    .social-authentification-links button{
        width: 35%;
    }
  
}
</style>
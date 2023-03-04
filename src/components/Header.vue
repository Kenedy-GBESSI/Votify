<template>
    <div class="header">
        <div class="container">
              <div class="wrapper-logo"></div>
              <div class="admin-area content">
                <i class="fa-regular fa-bell"></i>
                 <div class="profile">
                    <img src="../assets/images/image2-96530011.png" alt="image of administrator">
                    <i class="fas fa-angle-down"></i>
                 </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header{
    width: 100%;
    height: 80px;
    background: #FFFFFF!important;
}
.header .container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .wrapper-logo{
    width: 180px;
    height: 180px;
    background-image: url("../assets/images/logo.png");
    background-size: cover;
    background-position: center;
}
.container .admin-area{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10%;
}
.admin-area .admin-image-area{
    display: flex;
}
.admin-area .profile{
    display: flex;
    align-items: center;
    justify-content: center;
}
.admin-area > i{
    cursor: pointer;
}
.profile i{
    font-size: 15px;
    cursor: pointer;
}

.admin-area .profile img{
    width: 40px ;
    height: 40px;
    border-radius: 100%;
    margin: 0 .8rem 0 0
}

@media screen and (max-width: 768px) {
   .admin-area > span{
     display: none!important;
   }
   .container .admin-area{
    width: 30%;
   }

}


</style>
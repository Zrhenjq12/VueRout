<template>
  <div class="main-links">  
  <router-link to="/">На 1 страницу</router-link>
  <router-link to="/card" >На главную</router-link> 
  </div>

  <div class="main-content">
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.main-content{
  max-width: 1200px;
  margin: 0 auto;
}
#app{
  color: #fff;
      margin-top: 0px  !important;
}
.form-group{
  text-align: left;
}
*{
 font-family: 'Lora', serif;
}
.main-links{
  display: flex;
  justify-content: space-evenly;
}
.router-link-active{
  cursor: default;
  color: rgba(0, 0, 0, .3);
  text-decoration: none;
}
.router-link-active:hover{
  color: rgba(0, 0, 0, .3);
}
</style>

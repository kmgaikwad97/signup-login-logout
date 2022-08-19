<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/login">Log In</router-link> |
    <router-link to="/userdata">UserData</router-link> 
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    return{}
  },
  components:{},
  methods:{}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}


.container {
  /* background: rgba(39, 62, 84, 0.82); */
  overflow: hidden;
  height: 100%;
  z-index: 2;
}

:root {
  --lg-lightcolor: linear-gradient(
    to left,
    rgba(116, 235, 213, 0.6),
    rgba(159, 172, 230, 0.5)
  );
}

body {
  background-image: var(--lg-lightcolor),
    url("https://images.pexels.com/photos/10581443/pexels-photo-10581443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  /* background-image: url("https://images.pexels.com/photos/12258844/pexels-photo-12258844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); */
  /* background-color: rgba(39,62,84,0.82); */
  /* filter: hue-rotate(360deg); */
  background-size: 100%;
  background-position: center;
  /* height: 100%; */
  background-size: cover;
  background-repeat: no-repeat;

  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  /* font-family: var(--myfont); */
  /* display: flex; */
  /* align-items: center;
    justify-content: center; */
  min-height: 100vh;
  /* width: 100vw; */
}

</style>

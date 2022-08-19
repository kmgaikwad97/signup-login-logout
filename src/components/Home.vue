<template>
  <div>
    <!-- <div class="navbar">
      <span>Home Page</span>
    </div> -->

    <div class="textdiv">
      <h1 style="text-transform: uppercase">Api Integration</h1>
      <p class="text-center">Home Page</p>
      <p class="gothere text-center">
        Click here for the <router-link class="gothere2" style="text-decoration:none;" to="/signup"> Sign Up</router-link>
      </p>
    </div>

    <video class="vid" src="../assets/vid.mp4" muted loop autoplay></video>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vid {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -100;
}

.gothere2 {
    color: #2c3e50;
}
.gothere2:hover {
    color: white;
}


</style>
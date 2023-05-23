<template>
  <div class="home">
      <img src="../assets/logoTelk.png" alt="..." class="img-fluid"/>
      <HelloWorld msg="Kõik telkima!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

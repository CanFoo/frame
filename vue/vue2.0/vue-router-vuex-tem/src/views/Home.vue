<template>
  <div :style="{height: '100%'}">
    <h1>home</h1>
    <counter></counter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import counter from '../components/Counter'
export default{
  components: {
    counter
  },
  created () {
  	console.log('home')
  }
}
</script>

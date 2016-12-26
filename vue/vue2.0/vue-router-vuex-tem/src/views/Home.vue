<template>
  <div :style="{height: '100%'}">
    <h1>home</h1>
    <counter></counter>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import counter from '../components/Counter'
export default{
  components: {
    counter
  },
  methods: {
    ...mapMutations([
      'pushLoadStack',
      'completeLoad'
    ]),
    requestData (url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then(fn).then(this.completeLoad)
    }
  },
  created () {
  	console.log('home')
  }
}
</script>

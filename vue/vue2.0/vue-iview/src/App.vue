<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      show: false,
      loadingText: 'loading'
    }
  },
  components: {
  },
  computed: mapGetters([
    'isLoading'
  ])
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#app {
  margin: 50px;
}
</style>

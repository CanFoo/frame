<template>
  <div id="app">
    <loading v-model="isLoading" :text="loadingText"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loading } from 'vux'
export default {
  name: 'app',
  data () {
    return {
      show: false,
      loadingText: 'loading'
    }
  },
  components: {
    Loading
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
</style>

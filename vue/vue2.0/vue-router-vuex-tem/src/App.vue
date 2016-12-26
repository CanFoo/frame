<template>
  <div class="app" :style="{height: '100%'}">
    <router-link :to="{ path: 'home' }">Home</router-link>
    <router-link :to="{ path: 'bar' }">Bar</router-link>
    <router-link :to="{ path: 'foo' }">Foo</router-link>
    <div class="main" :style="{height: '100%'}">
      <router-view></router-view>
     
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      direction: 'forward'
    }
  },
  components: {
  },
  watch: {
     // 如果路由有变化，会执行该方法
     '$route': 'changeRoute'
  },
  methods: {
    changeRoute () {
      console.log('路由改变了')
    }
  }
}
</script>

<style>
body {
  background: #f5f5f5;
}
a {
  text-decoration: underline;
}
</style>


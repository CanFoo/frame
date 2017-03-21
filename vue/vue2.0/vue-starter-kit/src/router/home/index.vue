<template>
  <div>
    <h1>HOME</h1>
    <router-link to="counter">
      vux-counter
    </router-link>
    <Hello />
  </div>
</template>

<script>
import Hello from '../../components/Hello'
export default{
  components: {
    Hello
  }
}
</script>

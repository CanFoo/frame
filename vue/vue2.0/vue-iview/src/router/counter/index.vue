<template>
  <div>
    <counter-header />
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <Button type="primary" @click.native="increment">increment</Button>
    <Button type="primary" @click.native="decrement">decrement</Button>
    <Button type="primary" @click.native="incrementIfOdd">Increment if odd</Button>
    <Button type="primary" @click.native="incrementAsync">Increment asyncd</Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import counterHeader from './components/counterHeader'

export default{
  components: {
    counterHeader
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'request'
  ]),
  created () {
    // this.request({
    //   url: '/movie/hot/?city=bj',
    //   cb: function (response) {
    //     console.log('dd', response.data)
    //   }}
    // )
  }
}
</script>

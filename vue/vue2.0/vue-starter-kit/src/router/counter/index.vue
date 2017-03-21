<template>
  <div>
    <counter-header />
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <x-button type="default" mini @click.native="increment">increment</x-button>
    <x-button type="default" mini @click.native="decrement">decrement</x-button>
    <x-button type="default" mini @click.native="incrementIfOdd">Increment if odd</x-button>
    <x-button type="default" mini @click.native="incrementAsync">Increment asyncd</x-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import counterHeader from './components/counterHeader'
import { XButton } from 'vux'

export default{
  components: {
    counterHeader,
    XButton
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

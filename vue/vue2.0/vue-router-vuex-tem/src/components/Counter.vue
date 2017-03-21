<template>
  <div>
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <button type="default" size="small" @click="increment">+</button>
    <button type="default" size="small" @click="decrement">-</button>
    <button type="default" size="small" @click="incrementIfOdd">Increment if odd</button>
    <button type="default" size="small" @click="incrementAsync">Increment asyncd</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

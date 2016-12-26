<template>
  <div>
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <mt-button type="default" size="small" @click="increment">+</mt-button>
    <mt-button type="default" size="small" @click="decrement">-</mt-button>
    <mt-button type="default" size="small" @click="incrementIfOdd">Increment if odd</mt-button>
    <mt-button type="default" size="small" @click="incrementAsync">Increment asyncd</mt-button>
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

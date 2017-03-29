<template>
  <div class="hello">
    <Row>
        <Col :sm="12" class="c12">
            <Radio v-model="single">Radio</Radio>
            <Button type="primary">Primary</Button>
        </Col>
        <Col :sm="6" class="c8">col-8</Col>
        <Col :sm="6" class="c4">col-4</Col>
    </Row>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Radio from 'iview/src/components/radio'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      single: true
    }
  },
  methods: {
    Radio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.c12 {
  background-color: orange;
}
.c8 {
  background-color: yellow;
}
.c4 {
  background-color: lightblue;
}
</style>

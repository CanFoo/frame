<template lang="html">
    <div>
        <h2>装饰器</h2>
    </div>
</template>

<script>

class Math {
  @log
  static add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  /*默认会执行descriptor.value这个方法，返回值为执行这个函数（这里是add）的返回值*/
  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

// // passed parameters should get logged now
Math.add(2, 4);


export default {
}
</script>

<style lang="css">
</style>

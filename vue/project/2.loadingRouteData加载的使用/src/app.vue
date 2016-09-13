<style lang="less"> 
[v-cloak] {
  display: none;
}

.link {
  color: blue;
  text-decoration: underline;
}

@color: lightyellow;

body {
  background: @color;
}


.view {
  transition: all .3s ease;
}


/*.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, -5px, 0);
}*/

// .fade-transition 始终保留在元素上。

// .fade-enter 定义进入过渡的开始状态。只应用一帧然后立即删除。

// .fade-leave 定义离开过渡的结束状态。在离开过渡开始时生效，在它结束后删除。

.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);

}

.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);

}
.back-leave{
  opacity: 0;
  /*transform: translate3d(100%, 0, 0);*/
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}


.v-link-active {
  color: red;
}

.custom-active-class {
  color: #f60;
}

/*css next 测试*/
  @keyframes testloading {
    0% {
      opacity: 0.2;
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }

::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  
  <div>
      <div class="app" @click="showfn()">

        <!-- 如果在router-view内添加了keep-alive属性，则无法改变effect的初始值 -->
      <router-view class="view" id="view" :transition="effect" transition-mode="out-in"></router-view>
    </div>
  </div>


</template>
<script>


module.exports = {
    methods: {
      showfn: function(){
        console.log(this.effect);
      }
    }
}

</script>

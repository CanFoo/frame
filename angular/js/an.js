angular.module('myApp', [])
.factory('greeter', function () {
  var cmsg = '';
  return {
    greet: function (msg) {
      alert(msg);
      cmsg = msg;
    },
    getCmsg: function () {
      return cmsg;
    }
  }
})
//controller第二个参数写成一个数组显示声明'$scope', 'greeter'等服务，这样js压缩混淆的时候才不会angular报错，
//如果直接写成.controller('myCtrl',function ($scope, greeter) {})这种形式，js压缩混淆会报错的
.controller('myCtrl', ['$scope', 'greeter', function ($scope, greeter) {
  $scope.sayHello = function () {
    greeter.greet('hello!');
  }
}])
.controller('myCtrl1', ['$scope', 'greeter', '$interval', function ($scope, greeter, $interval) {
  $interval(function () {
    //服务提供了一种能在应用的整个生命周期内保持数据的方法，它能够在控制器之间进行通 信，并且能保证数据的一致性。
    console.log(greeter.getCmsg());
  }, 1000)
}])

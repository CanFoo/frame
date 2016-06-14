module.exports = function(router){
	
	router.map({
		'/':{
			name:'home',
			component: require('./views/home.vue')
			//auth: true // 此页面需要用户登录
		},
		'/page/:active_id': {
			name:'page',
			component: require('./views/page.vue')
		}
	});

	window.routeList=[];


	// router.beforeEach(hook)
	// 添加一个全局的前置钩子函数，这个函数会在路由切换开始时调用。
	// 调用发生在整个切换流水线之前。如果此钩子函数拒绝了切换，整个切换流水线根本就不会启动。
	router.beforeEach(function(transition){  
		if(transition.to.name == 'forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		}


		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back'; 
			routeList.splice(routeList.length-1,1);

		} else {

			router.app.effect='fade'; //设置app.vue中过度的属性为fade，切换的css在app.vue中。
		
			// 关于name、path、query、params详见http://router.vuejs.org/zh-cn/route.html
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
			
		}

		//setTimeout(function(){
			//切换到路由下一个步骤，这里必须执行
			transition.next();
		//},1000);
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		for (var i = 0; i < routeList.length; i++) {
			//console.log(routeList[i].name);
		};
	});
}
require.config({
	paths: {
	   "jQuery": "../lib/jQuery",
		"b": "b",
		"c": "c",
		"app": "app"
	},
	shim: {
		"jQuery": {
			exports: "$"
		},
		"b": {
		    deps: ['jQuery'],
			exports: "b"
		},
		"c": {
			exports: "c"
		}
	}
});


require(["jQuery","app"], function($, ap){
	ap.init();
});

define(["jQuery", "b", "c"], function($, b, c){
	return {
		init: function() {
			 $("#id").html("yyyyy");
			 b.set();
			 c.show("lllllll");
			console.log("hello");
		}
	}
})


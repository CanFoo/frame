require.config({
	paths: {
	   "jQuery": "../lib/jQuery",
		"b": "b",
	},
	shim: {
		"jQuery": {
			exports: "$"
		}
	}
});

define(["jQuery", "b"], function($, c){
	return {
		set: function(){
			$("#id").css({"background": "pink"});
			console.log("b.set");
		}
	}
})

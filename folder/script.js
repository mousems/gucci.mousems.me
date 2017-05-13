ondomload(function(){
	window.queue = [];
	window.loading = dom("#loading span");
	window.loadingp = dom("#loading p");
	// { loading: 载入动画, loaded: 入场方法 }, 预载图片数组, 预载图片路径, 强制入场时间
	onimgload({ loaded: doLoad, loading: doLoading, delay: 1000 }, 
		["pic01.jpg","pic02.jpg","pic03.jpg","pic04.jpg","pic05.jpg","pic06.jpg","pic07.jpg","pic08.jpg","pic09.jpg","pic10.jpg","pic11.jpg","pic12.jpg","pic13.jpg","pic14.jpg","pic15.jpg","pic16.jpg","pic17.jpg","pic18.jpg","pic19.jpg","pic20.jpg","pic21.jpg","pic22.jpg","pic23.jpg"], 
		"img/", 10000);	
});

function doLoading(p){
	csstrans(loading, { scaleX:p, origin:"left" }, 200, "linear");
	text(loadingp, Math.floor(p * 100) + "%");
}
function doLoad(){
	hide("#loading");
}
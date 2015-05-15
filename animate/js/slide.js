/**
	轮播图
	利用的是js加载页面
*/
$(document).ready(function(){		
	var count = 4,n;//count为图片的总数
	$(".slideimg li").click(function(){
		$(this).find("img").animate({left:'10px'}).css("display","block");
		$(".pageul li.pageactive").removeClass("pageactive").next().addClass("pageactive")
	});
	var slide = function(){//实现图片的自动播放
		n = $(".pageul li.pageactive").text() - 1;
		$(".slideimg li").eq(n).trigger("click");
		n--;
		
	};
	var timer = setInterval(slide,5000);//设置定时器
});
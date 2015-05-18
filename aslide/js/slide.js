/**
	轮播图
	使用animate，使轮播图有从左到右或者是从右到左的动画效果
*/
$(document).ready(function(){		
	var count = 4,n;//count为图片的总数	
	$(".slideimg li").click(function(){
		$(this).find("img").animate().fadeIn(1000);//使得当前页码下的图片显示
		$(this).siblings().find("img").fadeOut(1000);
		if (n == 0) {	
			$(this).find("img").css("margin-left","0")
		}
		$(".pageul li").removeClass("pageactive").eq(n).addClass("pageactive");
	});
	var slide = function(){//实现图片的自动播放
		n = $(".pageul li.pageactive").text();//当前的页码
		n = n >= count ? 0 : n
		$(".slideimg li").eq(n).trigger("click");//当前页码触发click事件	
	}
	$(".slidepre").click(function(){//实现图片点击向左，翻页
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		n = $(".pageul li.pageactive").text() - 1;//当前的页码
		n = n <= 0 ? 3 : n-1;
		$(".slideimg li").eq(n).trigger("click");//当前页码触发click事件
	});
	$(".slidenext").click(function(){//实现图片点击向右，翻页
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		slide();	
	});
	$(".page ul li").click(function(){//点击数字跳转到相应的图片
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		n = $(this).text() - 1;//当前的页码
		$(".slideimg li").eq(n).trigger("click");//当前页码触发click事件	
	})
	var timer = setInterval(slide,5000);//设置定时器
});
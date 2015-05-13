/**
	轮播图
	利用的是js加载页面
*/
$(document).ready(function(){		
	var count = 4,n = 1;//count为图片的总数
	$("#slide").find("img").attr("src","../images/1.jpg");
	var timer = setInterval(slide,5000);
	var slide = function(){//实现图片的自动播放
		var curc = $(".slideimg").find("li").val();
		if(curc < count){
			curc++;
			$(".slideimg").find("li").attr("value", curc);
			$("#slide").find("img").attr("src","../images/"+ curc +".jpg");	
		}else if(curc == count){
			curc = 0;
			$(".slideimg").find("li").attr("value", curc);
		}
		$(".page ul li").each(function(){
			if ($(this).text() == curc) {
				$(this).css("color","red");
				$(this).siblings().css("color","#fff");
			};
		});
	};
	$(".slidepre").click(function(){//实现图片点击向左，翻页
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		var curc = $(".slideimg").find("li").val();
		if (curc <= 1) {
			curc = count;
			$(".slideimg").find("li").attr("value", curc);
			$("#slide").find("img").attr("src","../images/"+ curc +".jpg");
		}else{
			curc--;
			$(".slideimg").find("li").attr("value", curc);
			$("#slide").find("img").attr("src","../images/"+ curc +".jpg");
		};
		$(".page ul li").each(function(){
			if ($(this).text() == curc) {
				$(this).css("color","red");
				$(this).siblings().css("color","#fff");
			};
		});
		
	}); 
	$(".slidenext").click(function(){//实现图片点击向右，翻页
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		slide();	
	});
	$(".page ul li").click(function(){//点击数字跳转到相应的图片
		var timer = setInterval(slide,5000);
		clearInterval(timer);
		var curc = $(this).text();	
		$("#slide").find("img").attr("src","../images/"+ curc +".jpg");
		$(this).css("color","red");
		$(this).siblings().css("color","#fff");
	});
	var timer = setInterval(slide,5000);//设置定时器
});
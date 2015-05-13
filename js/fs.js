//累积下的js yangmengya

//判断是否为字符串
//usage:当需要判断元素是否为字符串的时候直接将相应的str传进来
function isString(str){
  return (typeof str=='string')&&str.constructor==String; 
}


//实现从小到大的排序
function solution(nums){
  if(nums==null){
    return [];
  }else{
    var len = nums.length;
    var maxvalue;
    for(var j=0;j<len;j++){
      if(nums[j]>nums[j+1]){
        maxvalue = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = maxvalue;
      }
    }
    return nums;
  }

}

//判断是否为数字
if(isNaN(num)){
  console.log("不是数字");
}else{
  console.log("是数字");
}

// 此页面解决了复选框可以选择多行且选择之后可以再选 
//多行背景变色 复选框
$(document).ready(function(){
    var checkbox = $("input[type='checkbox']");
    $("td").click(function(){
        var tr = $(this).parent("tr");
        var checked = tr.find(checkbox);
        if (!tr.hasClass("red")) {//如果点击td一行会选中且复选框会选中，背景颜色改变，
            tr.addClass("red");
            checked.attr("checked","checked");
            checked[0].checked = true
        }else{
            tr.removeClass("red");
            checked.removeAttr("checked");
        }
    })
});



/**
字符串中实现将字母相同的进行处理
"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

**/
function duplicateEncode(word){
    var wordL=word.toLowerCase();
    var a = new Array();
    for(var i=0;i<wordL.length;i++){
       var temS = wordL[i];
       if(wordL.replace(temS,"").indexOf(temS) > -1){
         temS = ")";
       }else{
         temS = "(";
       }
       a.push(temS);   
    }
    var str = a.join("");
    return str;
    
}

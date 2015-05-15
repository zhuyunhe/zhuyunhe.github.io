//用来输出的字符串
var myStr = "Long long ago, there was a sincer cordial emotion in front of me, but I did not cherish it. Until it lost, I just regreted at that time. It is only the most suffering thing in the world. If the grandfather of heaven give me the last opportunity. I will say three words to that girl:"I love you!" If it has to add an alloted time. I hope it is 10,000 years.--BeyondWeb.cn      (*^__^*) ";  
//打印函数，反复截取myStr字符串，每一次都比前一次多截取一个字符，然后反复输出到页面中
var print = function (content, str, speed) {
var count = 0;
var timer = null;
timer = setInterval(function (){
if (count >= str.length) {
clearInterval(timer);
}else{content.innerHTML = str.substring(0, count);count++;}},speed);} 

onload = function () {
var oContent = document.getElementById("content");
print(oContent, myStr, 10);
}
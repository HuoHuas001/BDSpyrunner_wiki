//获取菜单 c
var inst = new mdui.Menu('#menuBtn', '#menu');
var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function(e){
    inst.open();
});

//功能
function Jump_to_Github(){
    window.location.href='https://github.com/twoone-3/BDSpyrunner'
}

function Jump_to_Minebbs(){
    window.location.href='https://www.minebbs.com/resources/bdspyrunner-python.2079/'
}

function Jump_to_QQ(){
    window.location.href='https://jq.qq.com/?_wv=1027&k=a1utBpEx'
}

//更改标题
var homeBtn = document.getElementById('JHome');
var APIBtn = document.getElementById('JApi')
var Title = document.getElementById('title')
homeBtn.onclick = function(){
    Title.innerHTML = "PYR Wiki-Home"
}
APIBtn.onclick = function(){
    Title.innerHTML = "PYR Wiki-API"
}

//显示API
var apibtn = document.getElementsByClassName('APIBtn')
var apis = document.getElementsByClassName('API')
//添加索引
for(var i=0;i<apis.length;i++){
   apibtn[i].index = i
   apibtn[i].onclick = function(){
       for(var b=0;b<apis.length;b++){
           apis[b].className = 'API no-show'
       }
       apis[this.index].className = 'API show'
   } 
}
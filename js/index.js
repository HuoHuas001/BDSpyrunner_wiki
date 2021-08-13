//获取菜单 c
var inst = new mdui.Menu('#menuBtn', '#menu');
var menuBtn = document.getElementById("menuBtn");
var body = document.getElementById('Body')
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
var $ = mdui.$;
var apis = document.getElementsByClassName('API')
$('#APIselect').on('close.mdui.select', function () {
    var select_list = document.getElementById("APIselect")
    var index=select_list.selectedIndex
    for(var i = 0;i<apis.length;i++){
        apis[i].className = 'API no-show'
    }
    apis[index].className = 'API show'
});

//显示属性
var atbs2 = document.getElementsByClassName('EntityATB');
var APIs = document.getElementsByClassName('EntityAPI')
$('#EntityATBselect').on('close.mdui.select', function () {
    var select_list2 = document.getElementById("EntityATBselect")
    var index2=select_list2.selectedIndex
    for(var i = 0;i<atbs2.length;i++){
        atbs2[i].className = 'EntityATB no-show'
    }
    for(var b = 0;b<APIs.length;b++){
        APIs[b].className = 'EntityAPI no-show'
    }
    atbs2[index2].className = 'EntityATB show'
});

$('#EntityAPIselect').on('close.mdui.select', function (){
    var select_list3 = document.getElementById("EntityAPIselect")
    var index3=select_list3.selectedIndex
    for(var i = 0;i<atbs2.length;i++){
        atbs2[i].className = 'EntityATB no-show'
    }
    for(var b = 0;b<APIs.length;b++){
        APIs[b].className = 'EntityAPI no-show'
    }
    APIs[index3].className = 'EntityAPI show'
})


//显示页面
var sidebar = document.getElementById('left')
var main_content = document.getElementById('main')
var entity_box = document.getElementById("divbox")
setInterval(function(){
    if(body.clientWidth<550){
        main_content.className = 'mdui-color-yellow-100 none-main-content'
        indexBtn.style='display:block'
        entity_box.style.marginLeft = '0px'
    }
    else{
        main_content.className = 'mdui-color-yellow-100 block-main-content'
        indexBtn.style='display:none'
        entity_box.style.marginLeft = '30px'
    }
},0)

var inst2 = new mdui.Menu('#indexBtn', '#index');
var indexBtn = document.getElementById("indexBtn");
indexBtn.addEventListener("click", function(e){
    inst2.open();
});
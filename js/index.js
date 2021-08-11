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
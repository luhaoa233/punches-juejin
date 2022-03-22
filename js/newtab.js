window.onload = function(){
    let timeElement = document.getElementById("time");
    timeElement.textContent= getNowFormatDate()

    var num=Math.floor(Math.random()*10+1);
    var now = new Date().getDay();
    var url = localStorage.getItem(`backGround${now}`) || `url("http://lxh.plus/background/${num}.jpg")`;
    localStorage.setItem(`backGround${now}`, url);
    document.getElementsByClassName('background-item')[0].style.backgroundImage=url;
    
    setInterval(()=>{
        timeElement.textContent= getNowFormatDate()
    },1000);
},
function a() {
    setTimeout(()=>{
        timeElement.textContent= getNowFormatDate()
    },1000);
}
function getNowFormatDate() { 
    var now = new Date();        
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    clock='';      
    if(hh < 10) clock += "0";        
    if(hh<6 || hh >23){
        document.getElementById("greetings").textContent = 'Good nignt'
    } else if(hh >14) {
        document.getElementById("greetings").textContent = 'Good afternoon'
    } else if(hh > 19){
        document.getElementById("greetings").textContent = 'Good evening'
    }    
    clock += hh + ":";
    if (mm < 10) clock += '0'; 
    clock += mm;         
    
    return(clock); 
} 
function search (searKeywordCache) {
    chrome.tabs.create({url: `https://www.baidu.com/s?wd=${searKeywordCache}`});
}


$('#input').bind('keyup', function (event) {
    var event = window.event || arguments.callee.caller.arguments[0];
    if (event.keyCode == 13){
        searKeywordCache = $('#input').val();
        search(searKeywordCache);
    }
})
$('#changeImg').click(()=>{
    var num=Math.floor(Math.random()*10+1);
    var url = `url("http://lxh.plus/background/${num}.jpg")`;
    var now = new Date().getDay();
    localStorage.setItem(`backGround${now}`, url);
    document.getElementsByClassName('background-item')[0].style.backgroundImage=url;
});
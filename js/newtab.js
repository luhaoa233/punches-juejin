window.onload = function(){
    createUrlList();
    let timeElement = document.getElementById("time");
    timeElement.textContent= getNowFormatDate()
    var num=Math.floor(Math.random()*10+1);
    var now = new Date().getDay();
    var url = localStorage.getItem(`backGround_${now}`) || `url(img/${num}.jpg)`;
    localStorage.setItem(`backGround_${now}`, url);
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
    var url = `url(img/${num}.jpg)`;
    var now = new Date().getDay();
    localStorage.setItem(`backGround_${now}`, url);
    document.getElementsByClassName('background-item')[0].style.backgroundImage=url;
});

// 默认URL
let urlList = [
    {
        title:'知乎',
        url:'https://www.zhihu.com',
    },
    {
        title:'掘金',
        url:'https://juejin.cn/',
    },
    {
        title:'哔哩哔哩',
        url:'https://www.bilibili.com',
    },
    {
        title:'GitHub',
        url:'https://www.github.com',
    },
    {
        title:'百度',
        url:'https://www.baidu.com',
    },
]

function createUrlList(){
   let list = document.getElementById("commonly-use-url");
   removeAllChild();
   let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList;
   for(let i=0; i<listArr.length;i++){
       const { title, url } = listArr[i]
        iconUrl=isImg({img:url});
        const html = `
            <div class="del-icon" id='del_${i}'>
                <svg t="1648322791251" class="maskedImage" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1812" width="200" height="200"><path d="M265.28 310.72a32 32 0 0 1 45.44-45.44l448 448a32 32 0 0 1-45.44 45.44z" p-id="1813" fill="#e6e6e6"></path><path d="M713.28 265.28a32 32 0 0 1 45.44 45.44l-448 448a32 32 0 0 1-45.44-45.44z" p-id="1814" fill="#e6e6e6"></path></svg>
            </div>
            <div class="icon">
                <img id='imgUrl' draggable="false" alt="" src='${iconUrl}'>
            </div>
            <div class="url-title">${title}</div>
        `;
        const div = document.createElement('div');
        div.className='url-icon'
        div.addEventListener('click',()=>{goUrl(url)})
        div.innerHTML = html;
        list.appendChild(div);
        const del = document.getElementById(`del_${i}`);
        del.addEventListener('click',()=>{delUrl(i)})
   }
}

function removeAllChild()  {
    var div = document.getElementById("commonly-use-url");
    while(div.hasChildNodes()) 
    //当div下还存在子节点时 循环继续
    {   
        div.removeChild(div.firstChild);
    }
}

function goUrl(url){
    chrome.tabs.create({url});
}

function delUrl(index){
    let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList
    listArr.splice(index,1);
    localStorage.setItem("list_arr", JSON.stringify(listArr))
    createUrlList()
    // 阻止冒泡
    window.event? window.event.cancelBubble = true : e.stopPropagation();
}

$('#addUrl').click(()=>{
    let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList
    if(listArr.length>=10){
        alert('超过10个，过分了哦！')
        return;
    }
    let title=document.getElementById('title')
    let url =document.getElementById('url')
    listArr.push({title:title.value, url: url.value})
    localStorage.setItem("list_arr", JSON.stringify(listArr))
    console.log(listArr)
    createUrlList()
    alert('添加成功')
    title.value=''
    url.value=''
});

$('#close').click(()=>{
    document.getElementsByClassName('bottom-row-add')[0].style.opacity=0
})

$('#showAdd').click(()=>{
    document.getElementsByClassName('bottom-row-add')[0].style.opacity=0.7
})


function isImg({img='https://zhihu.com'}){
    reg = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i
    res = img.match(reg)
    console.log(res)
    if(!res){
        return 'img/搜索.png'
    }
    newimg= res[1]+res[2]+'/favicon.ico';
    return newimg;
}


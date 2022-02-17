(function() {
	console.log('这是 2222！');
})();

$('#open-chrome-utols').click(()=>{
	chrome.tabs.create({url:'chrome://extensions'})
});



// $('')

$('#open-baidu').click(()=>{
  chrome.tabs.create({url: 'https://www.baidu.com'});
});
$('#open-juejin').click(()=>{
  chrome.tabs.create({url: 'https://www.juejin.cn'});
});
$('#open-sifou').click(()=>{
    chrome.tabs.create({url: 'https://segmentfault.com'});
});
$('#open-git').click(()=>{
    chrome.tabs.create({url: 'https://github.com/trending'});
});


// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
});

$('#check—today-status').click(async (e) => {
  document.getElementsByClassName('res')[0].textContent='获取结果中...'
    const today_status = await fetch('https://api.juejin.cn/growth_api/v1/get_today_status', {
      headers: {
        cookie: document.cookie
      },
      method: 'GET',
      credentials: 'include'
    }).then((res) => res.json());
    let res = '';
    if (today_status.err_no !== 0){
      res='签到失败！';
    }
    if (today_status.data) {
      res='今日已经签到！';
    }
    if(!res){
      res ='今日还没签到！'
    }
    document.getElementsByClassName('res')[0].textContent=`获取结果：${res}`
});

$('#check').click(async (e)=>{
  // chrome.tabs.create({url: 'https://www.juejin.cn'});
  let nowCookie ='';
  chrome.cookies.get({url:'https://www.juejin.cn',name:'sessionid'},function(cookie){
  nowCookie =  cookie.value 
  console.log('1111',nowCookie)});
  document.getElementsByClassName('res')[0].textContent='获取结果中...'
	const check_in = await fetch('https://api.juejin.cn/growth_api/v1/check_in', {
      headers: {
        cookie: document.cookie,
        'Content-Type' : 'application/json;charset=utf-8',
      },
      method: 'POST',
      credentials: 'include'
    }).then((res) => res?.json());
  let res = '';
  if (check_in.err_no !== 0){
    res ='签到失败！';
    if(check_in.err_msg!=''){
        res =check_in.err_msg;
      }
  }
  if(!res){
    res =`签到成功！当前积分；${check_in.data.sum_point}`;
  }
  document.getElementsByClassName('res')[0].textContent=`获取结果：${res}`
});

$('#chou').click( async() =>{
    let res = '';
    // 查询今日是否有免费抽奖机会
    const today = await fetch('https://api.juejin.cn/growth_api/v1/lottery_config/get', {
        headers: {
        cookie: document.cookie
        },
        method: 'GET',
        credentials: 'include'
    }).then((res) => res.json());

    if (today.err_no !== 0) res = '免费抽奖失败！';
    if (today.data.free_count === 0) res = '今日已经免费抽奖！';

    // 免费抽奖
    const draw = await fetch('https://api.juejin.cn/growth_api/v1/lottery/draw', {
        headers: {
        cookie: document.cookie
        },
        method: 'POST',
        credentials: 'include'
    }).then((res) => res.json());

    if ( !!res && draw.err_no !== 0) res ='免费抽奖失败！';
    if(!res){
        [3, 4].includes(draw.data.lottery_type) ? alert(`恭喜抽到：${draw.data.lottery_name}`) : res =`恭喜抽到：${draw.data.lottery_name}`;
    }
    document.getElementsByClassName('res')[0].textContent=`获取结果：${res}`
    
} )


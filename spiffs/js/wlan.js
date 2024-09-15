// const baseurl = 'http://192.168.4.1'
const baseurl = window.location.origin
console.log(baseurl)
const CONSTANT = {
  wlanName: '',
  GET_BASE_URL: `${baseurl}/wlan_general`,
  GET_HIGH_URL: `${baseurl}/wlan_advance`,
}

var Ajax = {
  get: function(url,callback){
    // XMLHttpRequest对象用于在后台与服务器交换数据
    console.log('456789')
    var xhr=new XMLHttpRequest();
    xhr.open('GET', url,true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange=function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 304){
          console.log(xhr.responseText);
          callback(xhr.responseText);
        } else {
          console.log(xhr.responseText);
        }
      }
    }
    xhr.send();
  },
  put: function(url, data, callback) {
    var xhr=new XMLHttpRequest();
    xhr.open('put', url,true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange=function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 304){
          console.log(xhr.responseText);
          callback(xhr.responseText);
        } else {
          console.log(xhr.responseText);
        }
      }
    }
    xhr.send(JSON.stringify(data));
  },
  post: function(url, data, callback){
    var xhr=new XMLHttpRequest();
    xhr.open('POST', url,true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange=function(){
      console.log('1: ', xhr.readyState)
      console.log('2: ', xhr.status)
      console.log('3: ', xhr.responseText)
      if (xhr.readyState === 4){
        if (xhr.status === 200 || xhr.status === 304){
          callback(xhr.responseText);
        }
      }
    }
    xhr.send(JSON.stringify(data));
  }
}

function baseSetting() {
  var baseArray1 = document.getElementsByClassName('header-title-one')
  var base1 = baseArray1[0]
  base1.style.color = '#000'
  base1.style.cursor = 'auto'
  var baseArray = document.getElementsByClassName('header-title-two')
  var base = baseArray[0]
  base.style.color = '#888888'
  base.style.cursor = 'pointer'
  var baseShow = document.getElementById('baseShow')
  baseShow.style.display = 'block'
  var highShow = document.getElementById('highShow')
  highShow.style.display = 'none'
}

function advanceSetting() {
  console.log('Click on advanced settings')
  var base1 = document.querySelector('.header-title-one')
  base1.style.color = '#888888'
  base1.style.cursor = 'pointer'
  var base = document.querySelector('.header-title-two')
  base.style.color = '#000'
  base.style.cursor = 'auto'
  var baseShow = document.getElementById('baseShow')
  baseShow.style.display = 'none'
  var highShow = document.getElementById('highShow')
  highShow.style.display = 'block'
}

function baseSave() {
  var wlanName = document.getElementById('wlanName')
  console.log('wlan name：', wlanName.value)
  var model = document.getElementById('model')
  console.log('Safe mode:', model.value)
  var password = document.getElementById('password')
  console.log('password:', password.value)
  var select = document.getElementById('select')
  console.log('wlan Stealth:', select.checked)
  var isSelect = 'false'
  if (select.checked) {
    isSelect = 'true'
  }
  Ajax.post(CONSTANT.GET_BASE_URL, {ssid: wlanName.value, if_hide_ssid: isSelect, auth_mode: model.value, password: password.value}, function (res) {
    console.log('Basic information saving:', res)
  })
}

function highSave() {
  var broadband = document.getElementById('broadband')
  console.log('broadband:', broadband.value)
  var channel = document.getElementById('channel')
  console.log('channel:', channel.value)
  Ajax.post(CONSTANT.GET_HIGH_URL, {bandwidth: broadband.value, channel: channel.value}, function (res) {
    console.log('Advanced information saving:', res)
  })
}

function menuClick (e) {
  console.log('e: ', e.classList)
  var menuView = document.getElementById('leftMenu')
  if (e.classList.contains('delMenu')) {
    menuView.style.display = 'none'
    e.classList.remove('delMenu')
  } else {
    e.classList.add('delMenu')
    menuView.style.display = 'block'
  }

}

function initHash () {
  console.log('Page first load')

  var highShow = document.getElementById('highShow')
  highShow.style.display = 'none'

  Ajax.get(CONSTANT.GET_BASE_URL, function (res) {
    console.log('Page first load', res)
    res = JSON.parse(res)
    var wlanName = document.getElementById('wlanName')
    var model = document.getElementById('model')
    var password = document.getElementById('password')
    var select = document.getElementById('select')
    wlanName.value = res.ssid
    for (i = 0; i < model.length; i ++) {
      if (res.auth_mode === model.options[i].value) {
        model.options[i].selected = true
      }
    }
    password.value = res.password
    select.checked = res.if_hide_ssid === 'true'
  })
  Ajax.get(CONSTANT.GET_HIGH_URL, function (res) {
    console.log('information', res)
    res = JSON.parse(res)
    var broadband = document.getElementById('broadband')
    var channel = document.getElementById('channel')

    for (i = 0; i < broadband.length; i ++) {
      if (res.bandwidth === broadband.options[i].value) {
        broadband.options[i].selected = true
      }
    }
    for (i = 0; i < channel.length; i ++) {
      if (res.channel === channel.options[i].value) {
        channel.options[i].selected = true
      }
    }
  })
}


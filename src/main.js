// ==UserScript==
// @name         CET猜号助手
// @namespace    http://www.lolimay.cn
// @version      1.0
// @description  帮助你更快地猜出你的四六级准考证号（座位号考场号自动填充并递增）
// @author       lolimay <1404363070@qq.com>
// @match        http://cet.neea.edu.cn/cet/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
/**
 * Author: LoliMay <1404363070@qq.com>
 * Created on 2018-8-22
 * 注意脚本在使用前务必要进行信息配置，否则脚本将无法正常执行
 */

/* ×××××× 配置 ×××××× */
const stuName = "" //考生姓名

if(stuName === "") {
    alert("CET猜号助手：脚本使用前需要初始化，请在源码中配置你的校区代码、姓名以及考场中大概的座位信息！")
    return;
}

var CookieUtil = {
    get: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if(cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if(cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length, cookieEnd))
        }
        return cookieValue;
    },
    set: function(name, value) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        document.cookie = cookieText;
    }
}

function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}

let deskid = CookieUtil.get('deskid')
let classid = CookieUtil.get('classid')

if(deskid === undefined || classid === undefined) {
    let deskid = 25; //座位号
let classid = 20; //考场号
}


document.querySelector("#name").value = "梅世祺"
let CETNumbers = "3400301811" + PrefixInteger(classid, 3) + PrefixInteger(deskid, 2)
document.querySelector("#zkzh").value = CETNumbers

if(deskid < 30 && deskid >= 25) {
    deskid++;
} else {
    classid++;
    deskid = 25;
}

CookieUtil.set('deskid', deskid)
CookieUtil.set('classid', classid)

window.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        let deskid = CookieUtil.get('deskid')
let classid = CookieUtil.get('classid')

if(deskid === undefined || classid === undefined) {
    let deskid = 25; //座位号
let classid = 20; //考场号
}


document.querySelector("#name").value = stuName;
let CETNumbers = "3400301811" + PrefixInteger(classid, 3) + PrefixInteger(deskid, 2)
document.querySelector("#zkzh").value = CETNumbers

if(deskid < 30 && deskid >= 25) {
    deskid++;
} else {
    classid++;
    deskid = 25;
}

CookieUtil.set('deskid', deskid)
CookieUtil.set('classid', classid)
    }
})
})();
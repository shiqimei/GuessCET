/************* JS注入开始 ***************/
/**
 * Author: LoliMay <1404363070@qq.com>
 * Created on 2018-8-22
 */
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

CookieUtil.set('deskid', PrefixInteger(1, 2)); //将座位号重置为 01
CookieUtil.set('classid', PrefixInteger(1, 3)); //将考场号重置为 001

let deskid = CookieUtil.get('deskid')
let classid = CookieUtil.get('classid')

console.log("重置成功!"+"最后5为现在为："+classid+deskid);
/************* JS注入结束 ***************/
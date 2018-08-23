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
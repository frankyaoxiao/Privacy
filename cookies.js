var count = 0;

chrome.cookies.getAll({},function(cookies){
    count=cookies.length;
    document.getElementById("cookie-counter").innerHTML = count;
});





function clearAllCookies(){
    console.log("cookies cleared");
    chrome.cookies.getAll({}, function(cookies) {
        for (var i in cookies) {
            removeCookie(cookies[i]);
        }
    });
}

function removeCookie(cookie) {
    var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain +
        cookie.path;
    chrome.cookies.remove({"url": url, "name": cookie.name});
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('clear-cookies');

    link.addEventListener('click', function() {
        clearAllCookies();
    });
});
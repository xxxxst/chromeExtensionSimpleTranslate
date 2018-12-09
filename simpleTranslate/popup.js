
document.addEventListener('DOMContentLoaded', function() {
    
});

chrome.browserAction.onClicked.addListener(function(tab) {
	var url = (tab[0]||tab).url;
	// console.info("aaa", url, tab);
    chrome.tabs.create({
        selected: true,
        url: "https://translate.google.com/translate?sl=auto&tl=zh-CN&js=y&prev=_t&hl=zh-CN&ie=UTF-8&u=" + url + "&edit-text=&act=url"
    });
});
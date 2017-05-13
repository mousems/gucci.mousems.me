/*
window.trackData = {
 "apiKey": "",// 活动Key
 "openid": "",// 微信OPENID
 "sessionid": ""// 会话sessionid
};

window.shareData = {
 "shareTitle": "",// 分享给好友标题
 "shareDesc": "",// 分享给好友内容
 "shareDesc2": "",// 分享到朋友圈内容
 "shareUrl": "",// 分享链接
 "imgUrl": ""// 分享图片
};
*/

function doStartTrack() {
	jQuery.getScript('http://gucciwx.nedigitals.com/weixin/api/get_openid.jsp?r=' + Math.random(), function(){
		window.trackData = {
		 "apiKey": "exhibition",// 活动Key
		 "openid": Dylan.openid,// 微信OPENID
		 "sessionid": Dylan.sessionid// 会话sessionid
		};
		doUrlTrack();
		if(window.trackData.openid!="") {
			window.shareData.shareUrl += (window.shareData.shareUrl.indexOf("?")>=0 ? "&" : "?") + "shareid=" + window.trackData.openid;
		}
	});
	
}

function doUrlTrack() {
	var localUrl = window.location.href;
	//$.ajax({ type:'POST', url:'http://gucciwx.nedigitals.com/service/wxuser/track', data:{ openid:window.trackData.openid, url:localUrl, eventsite:window.trackData.apiKey, key:"", action:"", value:"", sn:window.trackData.sessionid }, timeout:1000 });
	jQuery.getScript("http://gucciwx.nedigitals.com/service/wxuser/track?openid=" + encodeURIComponent(window.trackData.openid) + "&url=" + encodeURIComponent(localUrl)  + "&eventsite=" + encodeURIComponent(window.trackData.apiKey) + "&key=&action=&value=&sn=" + encodeURIComponent(window.trackData.sessionid), function(){});
	var shareid = getUrlParam('shareid');
	if(shareid!="" && shareid!=null) {
		trackEvent("share", "shareview", shareid);
	}
}

function trackEvent(key, action, value) {
	var localUrl = window.location.href;
	//$.ajax({ type:'POST', url:'http://gucciwx.nedigitals.com/service/wxuser/track', data:{ openid:window.trackData.openid, url:localUrl, eventsite:window.trackData.apiKey, key:key, action:action, value:value, sn:window.trackData.sessionid }, timeout:1000 });	
	jQuery.getScript("http://gucciwx.nedigitals.com/service/wxuser/track?openid=" + encodeURIComponent(window.trackData.openid) + "&url=" + encodeURIComponent(localUrl)  + "&eventsite=" + encodeURIComponent(window.trackData.apiKey) + "&key=" + encodeURIComponent(key) + "&action=" + encodeURIComponent(action) + "&value=" + encodeURIComponent(value) + "&sn=" + encodeURIComponent(window.trackData.sessionid), function(){});
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

doStartTrack();
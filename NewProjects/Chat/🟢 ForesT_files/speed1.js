$(document).ready(function(){
	
	user_reload();
	chat_reload();
	adjustHeight();
	showAds();
	welcome_reload();
	
	
	var aReload = setInterval(showAds, 32000);
	var userlist = setInterval(user_reload, 60000);
	var privateList = setInterval(privateOpen, 60000);
	var chatLog = setInterval(chat_reload, 5000);
	var reloadAds = setInterval(adsMargin, 33000);
	var friendlis = setInterval(reloadFriends, 30000);
	var welcomelist = setInterval(welcome_reload, 60000);

});
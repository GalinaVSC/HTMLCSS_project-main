	var updchat_panel = '0';
	var dataControl = "";
	var privateControl = "0";
	var firstLoad = "7";
	var rFriend = 1;
	
	var width = $(window).width(); 
	var height = $(window).height();
	var optionSize = $('#chat_panel').css('width');
	
	
	var bgi = '';
	
	
	// access user notify
	$(function() {
					if ('Notification' in window) {
						Notification.requestPermission( newMessage );
						function newMessage(permission) {
							if( permission != "granted" ) return false;
						};
					}
	});
	



	// reload the welcome list in room 
	
	welcome_reload = function()
	{
		if( updchat_panel < Date.now() ){
			if(firstLoad == 7 && width > 768){
				$('#chat_panel').animate({right:"+="+optionSize},200);
				dataControl = "7";
				$.ajax({
					url: "system/welcome_list.php",
					cache: false,
					success: function(html){
						$("#chat_panel .panel_element").html(html);
					},
				});	
				firstLoad = "0";
			}
			else if (dataControl != 7){
				return false;
			}
			else if ($('.option_list:visible').length){
				return false;
			}
				$.ajax({
					url: "system/welcome_list.php?",
					cache: false,
					success: function(html){
						$("#chat_panel .panel_element").html(html);
					},
				});
		updchat_panel = Date.now() + 1000;
		}
	}

	
	// reload the user list in room
	
	user_reload = function(){
		if( updchat_panel < Date.now() ){
			if (dataControl != 1){
				return false;
			}
			$.ajax({
				url: "system/user_list.php",
				cache: false,
				success: function(html){
					$("#chat_panel .panel_element").html(html);
				},
			});
		updchat_panel = Date.now() + 1000;
		}
	}

	
	// logout from chat
	
	logOut = function(){
		$.ajax({
			url: "logout.php",
			cache: false,
			success: function(response){
				location.reload();
			},
		});
	}
	
	// unlog users on multiple device connection
	
	overWrite = function(){
		$.ajax({
			url: "overwrite.php",
			cache: false,
			success: function(response){
				location.reload();
			},
		});
	}
	
	// reload user status on chat 
	
	statusReload = function(){
		$.ajax({
			url: "system/user_status.php",
			cache: false,
			success: function(response){
			},
		});
	}
	
	/*
	// reload the chat history ...
	var updhreload = 0;
	historyReload = function(){
		if( updhreload < Date.now() ){
			$.ajax({
				url: "system/history.php",
				cache: false,
				success: function(response){
					$("#history_panel .panel_element #history_container").html(response);
				},
			});
		updhreload = Date.now() + 5000;
		}
	}
	*/
	
	
	// reload the chat blog ...
	var updblog = 0;
	blogReload = function(){
		if( updblog < Date.now() ){
		$.ajax({
			url: "system/blog.php",
			cache: false,
			success: function(response){
				$("#blog_panel .panel_element #blog_container").html(response);
			},
		});
		updblog = Date.now() + 2000;
		}
	}
	
	
	// open new private on click
	
	privateOpen = function(){
		if( updchat_panel < Date.now() ){
			if (dataControl != 4){
				return false;
			}
			$.ajax({
				url: "system/private_notify.php",
				cache: false,
				success: function(response){
					$("#chat_panel .panel_element").html(response);
				},
			});
		updchat_panel = Date.now() + 1000;
		}
	}
	
	
	// open private list system notify
	
	privateOpenotify = function(){
			if (dataControl != 4){
				return false;
			}
			$.ajax({
				url: "system/private_notify.php",
				cache: false,
				success: function(response){
					$("#chat_panel .panel_element").html(response);
				},
			});
	}
	
	/*
	// reload user highlight history 
	var updhissearch = 0;
	userHistory = function(){
		if( updhissearch < Date.now() ){
			var thisHistory = $("#search_history").val();
			var updpostlikes = 0;
			if(thisHistory == ''){
				return false;
			}
			else if (/^\s+$/.test($('#search_history').val())){
				return false;
			}
			else {
				$.ajax({
					url: "system/user_history.php?data="+thisHistory,
					cache: false,
					success: function(response){
						$("#history_panel .panel_element #history_container").html(response);
						$("#search_history").val("");
					},
				});
			}
		updhissearch = Date.now() + 2000;
		}
	}
	*/
	
	// reload user highlight blog 
	var updblogsearch = 0;
	userBlog = function(){
		if( updblogsearch < Date.now() ){
			var thisBlog = $("#search_blog").val();
			if(thisBlog == ''){
				return false;
			}
			else if (/^\s+$/.test($('#search_blog').val())){
				return false;
			}
			else {
				$.ajax({
					url: "system/user_blog.php?data="+thisBlog,
					cache: false,
					success: function(response){
						$("#blog_panel .panel_element #blog_container").html(response);
						$("#search_blog").val("");
					},
				});
			}
		updblogsearch = Date.now() + 2000;
		}
	}
	
	// list blog
	var updbloglist = 0;
	$(document).on('click', '#nextlistblog', function() {
		$("#search_blog").val("");
		if( updbloglist < Date.now() ){
			var id_bpost = $(this).attr('value');
			if(id_bpost == ''){
				return false;
			}
			else {
				$.ajax({
					url: "system/user_blog.php?list="+id_bpost,
					cache: false,
					success: function(response){
						$("#blog_panel .panel_element #blog_container").html(response);
						$("#blog_panel").scrollTop(0);
					},
				});
			}
		updbloglist = Date.now() + 2000;
		}
	});
	
	
	// comments user blog
	var updblogcomment = 0;
	$('#blog_container').on('click', '#my_comment_blog', function(){
		if( updblogcomment < Date.now() ){
			var idb = $(this).attr('idblog');
			var thiscommentBlog = $("#comment_blog"+idb).val();
			if(thiscommentBlog == ''){
				return false;
			}
			else if (/^\s+$/.test($('#comment_blog'+idb).val())){
				return false;
			}
			else {
				$.post('system/blog_comments.php', {content: thiscommentBlog, idb: idb}, function(response) {
					$("#comment_blog"+idb).val("");
					blogReload();
				});
			}
		updblogcomment = Date.now() + 2000;
		}
	});
	
	
	// delete comments user blog
	var upddelcomment = 0;
	$('#blog_container').on('click', '.delcom', function(){
		if( upddelcomment < Date.now() ){
			var delcommentBlog = $(this).attr('value');
			if(delcommentBlog == ''){
				return false;
			}
			else {
				$.ajax({
					url: "system/blog_comments.php?del="+delcommentBlog,
					cache: false,
					success: function(response){
						blogReload();
					},
				});
			}
		upddelcomment = Date.now() + 2000;
		}
	});
	
	
	// search chat
	var updsearchchat = 0;
	$(".search_button").click(function() {
		
		var searchString = $("#search_box").val();
		
		var sel_username = $('.sel_username').prop('checked');
		var sel_userdescr = $('.sel_userdescr').prop('checked');
		var sel_userregion = $('.sel_userregion').prop('checked');
		
		var sel_roomname = $('.sel_roomname').prop('checked');
		var sel_roomdescr = $('.sel_roomdescr').prop('checked');
		
		var data = 'search='+ searchString + '&sel_username='+ sel_username + '&sel_userdescr='+ sel_userdescr + '&sel_userregion='+ sel_userregion + '&sel_roomname='+ sel_roomname + '&sel_roomdescr='+ sel_roomdescr;
		

		if(searchString) {
			if( updsearchchat < Date.now() ){
				$.ajax({
					type: "POST",
					url: "system/search.php",
					data: data,
					beforeSend: function(html) {
						$("#results").html('');
						$("#searchresults").show();
						$(".word").html("Результаты по запросу: " + searchString);
					},
					success: function(html){
						$("#results").show();
						$("#results").append(html);
					}
				});
			updsearchchat = Date.now() + 3000;
			}
		}
		return false;
	});
	
	
	
	
	// Reload room and adjust arrow
	
	showRooms = function(){
		if( updchat_panel < Date.now() ){
			if (dataControl != 2){
				return false;
			}
			$.ajax({
				url: "system/room_list.php",
				cache: false,
				success: function(html){
					$("#chat_panel .panel_element").html(html);
				},
			});
		updchat_panel = Date.now() + 1000;
		}
	}
	
	searchUser = function(){
		$.ajax({
			url: "system/search_user.php",
			cache: false,
			success: function(html){
				$("#main_option .panel_element").html(html);
			},
		});
	}
	
	// show ignore list
	
	showIgnore = function(){
		if( updchat_panel < Date.now() ){
			$.ajax({
				url: "system/ignore_list.php",
				cache: false,
				success: function(html){
					$("#chat_panel .panel_element").html(html);
				},
			});
		updchat_panel = Date.now() + 1000;
		}
	}
	
	showMyprofile = function(){
		$.ajax({
			url: "system/my_profile.php",
			cache: false,
			success: function(html){
				$("#tools_panel #pro_details").html(html);
			},
		});
	}
	
	// Reload ignore list
	
	reloadFriends = function(){
		if( updchat_panel < Date.now() ){
			if(dataControl != 5){
				return false;
			}
			if(rFriend == 1){
				$.ajax({
					url: "system/friend_list.php",
					cache: false,
					success: function(html){
						$("#chat_panel .panel_element").html(html);
					},
				});
			}
			else if (rFriend == 2){
				$.ajax({
					url: "system/pending_friend.php",
					cache: false,
					success: function(html){
						$("#chat_panel #friend_container").html(html);
					},
				});
			}
			else {
				return false;
			}
			updchat_panel = Date.now() + 1000;
		}
	}
	
	
	// readjust the chat box height depending on topic height 
	
	adjustTopic = function()
	{
		adjustHeight();
	}
	
	// reload theme in theme panel 
	
	themeReload = function()
	{
		$.ajax({
			url: "system/theme.php",
			cache: false,
			success: function(html){
				$("#theme_panel .panel_element").html(html);
			},
		});
	}
	
	
	
	
	// reload chat log in room	
	
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'sounds/pmessage.mp3');
	audioElement.setAttribute('stop', 'stop');
	audioElement.volume = 0.2;
	
	var audioElement3 = document.createElement('audio');
	audioElement3.setAttribute('src', 'sounds/allmessage.mp3');
	audioElement3.setAttribute('stop', 'stop');
	audioElement3.volume = 0.2;
	
	var nPost = document.createElement('audio');
	nPost.setAttribute('src', 'sounds/chatmessage.mp3');
	nPost.setAttribute('stop', 'stop');
	nPost.volume = 0.2;
	

	var yourPost = document.createElement('audio');
	yourPost.setAttribute('src', 'sounds/yourmessage.mp3');
	yourPost.setAttribute('stop', 'stop');
	yourPost.volume = 0.2;
	
	var marryPost = document.createElement('audio');
	marryPost.setAttribute('src', 'sounds/marry.mp3');
	marryPost.setAttribute('stop', 'stop');
	
	var bannafigPost = document.createElement('audio');
	bannafigPost.setAttribute('src', 'sounds/bannafig.mp3');
	bannafigPost.setAttribute('stop', 'stop');
	
	var voicePost = document.createElement('audio');
	voicePost.setAttribute('src', 'sounds/voice_message.mp3');
	voicePost.setAttribute('stop', 'stop');
	voicePost.volume = 0.2;
	
	
	var access_deniedPost = document.createElement('audio');
	access_deniedPost.setAttribute('src', 'sounds/access_denied.mp3');
	access_deniedPost.setAttribute('stop', 'stop');
	access_deniedPost.volume = 0.2;
	
	
	var access_grantedPost = document.createElement('audio');
	access_grantedPost.setAttribute('src', 'sounds/access_granted.mp3');
	access_grantedPost.setAttribute('stop', 'stop');
	access_grantedPost.volume = 0.2;
	
	
	var user_kroxaPost = document.createElement('audio');
	user_kroxaPost.setAttribute('src', 'sounds/sexy_whistle.mp3');
	user_kroxaPost.setAttribute('stop', 'stop');
	
	
	var he_disconnectedPost = document.createElement('audio');
	he_disconnectedPost.setAttribute('src', 'sounds/he_disconnected.mp3');
	he_disconnectedPost.setAttribute('stop', 'stop');
	he_disconnectedPost.volume = 0.2;
	
	
	var user_jogenPost = document.createElement('audio');
	user_jogenPost.setAttribute('src', 'sounds/lion_roar.mp3');
	user_jogenPost.setAttribute('stop', 'stop');
	user_jogenPost.volume = 0.6;
	
	
	var pid = 0;
	
	var icount = 0;
	
	var sss = 0;
	
	var markedid = 0;
	
	var firstloadchat = 0;
	
	var onenamesdescr = 0;
	
	var onenamesdescr2 = 0;
	
	var topiccontent = 0;
	
	var connection = 0;
	
	var icp = 'none';
	
	var rname = '';
	
	var friendkey = 0;
	
	var chatpanel = 0;
	
	var rnh = 0;
	
	var timer666 = 0;
	
	var old_ld = 0;
	
	var checkScroll = 0;
	
	var scrollCompare = 0;
	
	var countmessage = 0;
	
	var countmessageold = 0;
	
	var countmessagehistory = 0;
	
	chat_reload = function()
	{
			var checkType = $('#main_chat_type').attr('value');
			var loadTarget = $('#this_target').attr('value');
			var postTime = Date.now() + 3000;
			
			//var rname = $('#topicroom').text();
			
			// reload the chat history ...
			var updhreload = 0;

				historyReload = function(){
					if( updhreload < Date.now() ){
						rnh = $('#topicroom').text();
						$.ajax({
							url: "system/history.php?n="+loadTarget+"&t="+checkType+"&rn="+rnh,
							cache: false,
							success: function(response){
								$("#history_panel .panel_element #history_container").html(response);
							},
						});
					updhreload = Date.now() + 5000;
					}
				}
			
			// reload user highlight history 
			var updhissearch = 0;
				userHistory = function(){
					if( updhissearch < Date.now() ){
						var thisHistory = $("#search_history").val();
						var updpostlikes = 0;
						if(thisHistory == ''){
							return false;
						}
						else if (/^\s+$/.test($('#search_history').val())){
							return false;
						}
						else {
							$.ajax({
								url: "system/user_history.php?data="+thisHistory+"&n="+loadTarget+"&t="+checkType,
								cache: false,
								success: function(response){
									$("#history_panel .panel_element #history_container").html(response);
									$("#search_history").val("");
								},
							});
						}
					updhissearch = Date.now() + 2000;
					}
				}
			
			if(checkType == '1'){
				postTo = 'cm';
				rname = $('#topicroom').text();
				rnameresult = rname.replace(/<[^>]+>/g,'');
				document.title = "\u{1F7E2}" + " " +rname;
			}
			else if (checkType == '2'){
				postTo = 'pm';
				document.title = "\u{1F5EF}" + " " +loadTarget;
			}
			else {
				return false;
			}
			
			checkScroll = $("#show_chat ul")[0].scrollHeight - $("#show_chat ul")[0].clientHeight;
			scrollCompare = $('#show_chat ul').scrollTop() + 200;
			
			
			// info icon scroll
			
			if(scrollCompare <= checkScroll && checkScroll > 0){
				
				if (document.querySelector('#scrollinfo').style.display == "none"){
					$('#scrollinfo').css({display:'block'});
					$('#scrollinfo').html('<span><i class="fa fa-angle-down"></i></span>');
				}
				
			} else {
				if (document.querySelector('#scrollinfo').style.display == "block"){
					$('#scrollinfo').css({display:'none'});
					$('#scrollinfo').html('');
				}	
				
			}
			
			
			//reset count message
			if(scrollCompare >= checkScroll ){
				countmessage = 0;
				countmessageold = 0;
			}
			
				$.ajax({
					url: "system/"+ postTo + ".php?rank="+ user_rank + "&access="+ user_access+"&room="+ user_room+"&bottom="+ boxZone+"&target="+loadTarget+"&rlc="+rlc+"&clogs="+clogs+"&chr="+chr+"&count="+cnt+"&his="+0+"&pid="+pid+"&icount="+icount+"&cpid="+markedid+"&fkey="+friendkey+"&cp="+chatpanel,
					type: "post",
					cache: false,
					dataType: 'json',
					statusCode: {
						200: function (response) {
							if(connection == '0'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:green;"></i>');
								connection = 1;
							}
						},
						400: function (response) {
							if(connection == '1'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:red;"></i>');
								connection = 0;
							}
						},
						0: function (response) {
							if(connection == '1'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:red;"></i>');
								connection = 0;
							}
						}
					},
					success: function(response)
					{
						var answerTime = Date.now();
						var log1 = response.log1;
						var log2 = response.log2;
						var log3 = response.log3;
						var log4 = response.log4;
						var log5 = response.log5;
						var log6 = response.log6;
						var log7 = response.log7;
						var log8 = response.log8;
						var log9 = response.log9;
						var log10 = response.log10;
						var checkSound = response.log11;
						var iconPrivate = response.log12;
						var checkGsound = response.log13;
						var sfSound = response.log15;
						var sesCompare = response.log16;
						var upUsername = response.log17;
						var getPcount = response.log18;
						var pmmess = response.log19;
						var pmid = response.log20;
						var pmhunt = response.log21;
						var pmavat = response.log22;
						var getfriends = response.log23;
						var infoprivate = response.log24;
						var targetavatar = response.log25;
						var targetemoji_vip = response.log26;
						var targetdescr_vip = response.log27;
						var targetuser_city = response.log28;
						var targetdescr = response.log29;
						var targetuser_sex = response.log30;
						var targetuser_age = response.log31;
						var targetuser_custom1 = response.log32;
						
						var checkmarkedid = response.log33;
						var markedpost = response.log34;
						
						var picname = response.log35;
						
						var friendlist = response.log36;
						var friendkeyold = response.log37;
						
						var backvippriv = response.log38;
						
							if(checkmarkedid != '' && checkmarkedid != '0' && checkmarkedid > markedid && markedpost != '' && markedpost != '0'){
								$('#cnp').html("<span class=\"cnp\"><i class=\"fa fa-bell-o\"></i> "+markedpost+"</span>").hide().fadeIn(300).delay(10000).fadeOut();
								markedid = checkmarkedid;
							}
						
						if(targetavatar != '' && targetavatar != '0'){
							if ($('.targetavatar:visible').length){
									targetavatar = '<img class="topimg" src="avatar/'+response.log25+'">';
									$('.targetavatar').html(targetavatar);
									
									
									// vip back priv
									
									
									if( backvippriv != '' && backvippriv != '0' ){
										bgvp = backvippriv;
										
										$('#wrap_chat').attr('style', 'background-image: url(viprivateback/'+bgvp+'); 	background-repeat: repeat; background-size: cover; ').fadeIn(1000).delay(10000);
										
									} else {
											if ($("#wrap_chat").attr('style') !== undefined) {
												$('#wrap_chat').removeAttr('style');
											} 
										}
									
							}
						} 
						if(targetavatar == '0'){
							if ($('.topimg:visible').length){
									$('.targetavatar').html('');
									if ($("#wrap_chat").attr('style') !== undefined) {
										$('#wrap_chat').removeAttr('style');
									} 
							}
							if (checkType == '2'){
									if ($("#wrap_chat").attr('style') !== undefined) {
										$('#wrap_chat').removeAttr('style');
									} 
							}
							
							
						}
					

						
						if(targetdescr != '' && targetdescr != '0' && onenamesdescr != loadTarget){
							if ($('#targetdescr:visible').length){
								if(targetdescr != '' && targetdescr != '0'){
									targetdescr = 'О себе: ' + targetdescr + '<br>';
								} else { targetdescr = ''; }
								
								if(targetemoji_vip != '' && targetemoji_vip != '0'){
									targetemoji_vip = targetemoji_vip + ' ';
								} else { targetemoji_vip = ''; }
								
								if(targetdescr_vip != '' && targetdescr_vip != '0'){
									targetdescr_vip = targetdescr_vip + '<br>';
								} else { targetdescr_vip = ''; }
								
								if(targetuser_city != '' && targetuser_city != '0'){
									targetuser_city = ' Город: ' +targetuser_city + '<br>';
								} else { targetuser_city = ''; }
								
								if(loadTarget != '' && loadTarget != '0'){
									targetuser_name = ' ' +loadTarget + ' ';
								} else { targetuser_name = ''; }
								
								if(picname != '' && picname != '0'){
									targetuser_name = ' ' +picname + ' ';
								} else { targetuser_name = targetuser_name; }
								
								if(targetuser_sex != '' && targetuser_sex != '0'){
									targetuser_sex = 'Пол: ' +targetuser_sex + '<br>';
								} else { targetuser_sex = ''; }
								
								if(targetuser_age != '' && targetuser_age != '0'){
									targetuser_age = 'Возраст: ' +targetuser_age + '<br>';
								} else { targetuser_age = ''; }
								
								if(targetuser_custom1 != '' && targetuser_custom1 != '0'){
									targetuser_custom1 = 'Интересы: ' +targetuser_custom1 + ' ';
								} else { targetuser_custom1 = ''; }
								
								
								
									targetaboutall = targetuser_sex + targetuser_age + targetuser_city + targetdescr + targetuser_custom1;
								
									targetabout = '<i id="targetdescr_close" class="fa fa-times-circle"></i><span style="float: right; font-size: 40px;">'+targetuser_name + targetemoji_vip +'</span><p style="text-align: center;"><span style="font-size: 25px;">' + targetdescr_vip + '</span>' + targetaboutall + '</p>';
									
									
									
									if ($('.usabout:visible').length == 0){
										$('#targetdescr').addClass("usabout");
									}

									$('#targetdescr.usabout').attr("style", "background-size: 100%; background-repeat: round; background-blend-mode: multiply; background-image: url(/avatar/"+response.log25+")");
									$('.usabout').html(targetabout);
									if ($('.usabout:visible').length){
										clearTimeout(timer666);
										timer666 = setTimeout(function() { $('#targetdescr').html(''); $('#targetdescr').removeClass("usabout"); $('#targetdescr').attr("style", "");}, 20000);
									} else { timer666 = 0; clearTimeout(timer666); }
									chr = 1;
									onenamesdescr = loadTarget;
							}
						}
						
						if(targetdescr == '0'){
							
							if ($('#targetdescr:visible').length){
									$('#targetdescr').html('');
									$('#targetdescr').removeClass("usabout");
									timer666 = 0;
									clearTimeout(timer666);
							}
							
						}
						
						if(infoprivate != '0'){
							if ($('#NotifyPrivate:visible').length){
									$('#NotifyPrivate').html(infoprivate);
									privateOpenotify();
							}
						}
						if(infoprivate == '0' && iconPrivate == 0 ){
							if ($('#NotifyPrivate:visible').length){
									$('#NotifyPrivate').html('');
									privateOpenotify();
							}
						}
						

						if(friendkeyold != '0'){
							if ($('#NotifyFriend:visible').length){
								if(friendlist != '' ){
									$('#NotifyFriend').html(friendlist);
								}
									friendkey = friendkeyold;
							}
						}
						if(friendkeyold == '0' ){
							if ($('#NotifyFriend:visible').length){
									$('#NotifyFriend').html('');
									friendkey = 0;
							}
						}
						
						
						if(parseInt($('#chat_panel').css('right')) == 0 ){
							chatpanel = 0;
						} else {
							chatpanel = 1;
						}
						
						if(upUsername !== my_username){
							my_username = upUsername;
							//updateCred();
							location.reload();
						}
						
						
						uSd = checkSound;
						fSd = sfSound;
						
						if(sesCompare != sesid){
							overWrite();
						}
						if(checkGsound !== whistle){
							whistle = checkGsound;
							audioElement3.play();
						}
						if(getPcount !== pCount && checkSound > 0){
								audioElement.play();
								pCount = getPcount;
								if (pmid > pid) {
									
									let regex_pattern = /([\w\-\.]+[^#?\s]+).(png|gif|jpg|jpeg|JPG|x-png|pjpeg)((\?\S+)?[^\.\s])?/;
									let resmsg = pmmess.match(regex_pattern);

									if (resmsg == null){
										var notification = new Notification(pmhunt, {tag : pmhunt, body : pmmess, icon : pmavat});
									}else{
										var notification = new Notification(pmhunt, {tag : pmhunt, body : 'images', icon : pmavat, image : resmsg[0]});
									}
								}
						}
						else {
							pCount = getPcount;
						}
						
						if( iconPrivate != icp){
							if(iconPrivate != 0 ){
								$('#menu_vis').hide();
								$("#private_count p").text(iconPrivate);
								$('#private_count').show();
								$('.icon_new_private').addClass("new_incoming");
								document.title = "\u{1F514}" + " " + iconPrivate;
							}
							else {
								$('#private_count').hide();
								$('#menu_vis').show();
								$('.icon_new_private').removeClass("new_incoming");
							}
							icp = iconPrivate;
						}
						
						
						
						if(getfriends != 0){
								if (!$('#friends_alert:visible').length){
									$('#left_menu').append('<div id="friends_alert"><i class="fa fa-user-circle"></i><p style="padding: 1px 4px; border: 2px solid rgb(80, 114, 153); border-radius: 12px; color: rgb(255, 255, 255); font-size: 9px; height: 11px; line-height: 11px; min-width: 5px; bottom: 15px;right: 14px; background-color: rgb(255, 115, 76); text-align: center; position: absolute;"></p></div>');
									$('.fa-chevron-down').hide(); 
								}
							$('#chat_panel .fa-user-plus').addClass("new_alert");
							$("#friends_alert p").text(getfriends);
						}
						else {
							$('#chat_panel .fa-user-plus').removeClass("new_alert");
							$('#friends_alert').remove();
							$('.fa-chevron-down').show();
						}
						
						
						if(clogs !== log2){
							sss = 1;
						}
						else {
							sss = 0;
						}
						

						if (log1 != '' && log1 == 1){
							location.reload();
						}
						else if (log1 != '' && log1 == 4){
							location.reload();
						}
						else if (log1 != '' && log1 == 1000){
							location.reload();
						}

						else { 
						
						if(answerTime < postTime && checkType == '1'){
							
							
							if(log10.length != 0 && topiccontent != log10){
								$("#room_topic").html(log10);
								adjustTopic();
								topiccontent = log10;
							}
							
							
							if ($("#bgiviproom").attr('value') !== undefined && log10.length != 0 ) {
								bgi = $('#bgiviproom').attr('value');		
									$('#wrap_chat').attr('style', 'background-image: url(viproom/'+bgi+'); 	background-repeat: repeat; background-size: cover; ');	
							} 
							
							if ($("#bgiviproom").attr('value') == undefined && log10.length != 0 ) {
								
								if ($("#wrap_chat").attr('style') !== undefined) {	
									$('#wrap_chat').removeAttr('style');
								}
							}
							
							
							if(clogs !== log2){
								$("#show_chat ul").append(log1);
								if(scrollCompare >= checkScroll ){
									if(log3 == 1){
										$("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight);
										setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 500);
									} else {
											$("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight);
										}
								}	
								else {
									
									// culc count new message
									countmessage = log1.split("<li").length - 1;
									countmessage = countmessage + countmessageold;
									countmessageold = countmessage;
									
									if (document.querySelector('#scrollinfo').style.display == "none"){
										$('#scrollinfo').css({display:'block'});
										$('#scrollinfo').html('<span style="display: grid; color: red;"><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessage+'</p><i class="fa fa-angle-down"></i></span>');
									}
									else 
									{
										if (document.querySelector('#scrollinfo').style.display == "block"){
											$('#scrollinfo').css({display:'block'});
											$('#scrollinfo').html('<span style="display: grid; color: red;"><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessage+'</p><i class="fa fa-angle-down"></i></span>');
										}	
									}
								}								
							}
							if(log1 != '' && log1 != 99 && log3 > 2 && log1.indexOf("system") == -1){
									document.title = "\u{26A1}";
							} 
							if(log9 == '1'){
									$('#show_chat li:lt(-1)').remove();
							}
							if(log3 == 1 || log3 == 2){
								for (var i = 0; i < log1.length; i++){
									//$("#idlog0").html('История чата успешно загружена :-)');
								}
							}
							if(log3 > 0 ){
							$('#show_chat li:lt(-3000)').remove();
							if(log8.length != 0){
									for (var i = 0; i < log8.length; i++){
										$("#idlog"+log8[i]).remove();
									}
								}
							}
							rlc = log5;
							clogs = log2;
							chr = log3;
							cnt = log7;
							pid = pmid;
							icount = iconPrivate;
							markedid = checkmarkedid;
						}

						if(answerTime < postTime && checkType == '2'){
							
							if(clogs !== log2 && log1 != '' && log1 != 99){
								$("#show_chat ul").append(log1);
								if(scrollCompare >= checkScroll ){
									if(log3 == 1){
										$("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight);
										setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 500);
									} else {
											$("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight);
										}
								}
								else {
									
									// culc count new message
									countmessage = log1.split("<li").length - 1;
									countmessage = countmessage + countmessageold;
									countmessageold = countmessage;
									
									if (document.querySelector('#scrollinfo').style.display == "none"){
										$('#scrollinfo').css({display:'block'});
										$('#scrollinfo').html('<span style="display: grid; color: red;"><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessage+'</p><i class="fa fa-angle-down"></i></span>');
									}
									else 
									{
										if (document.querySelector('#scrollinfo').style.display == "block"){
											$('#scrollinfo').css({display:'block'});
											$('#scrollinfo').html('<span style="display: grid; color: red;"><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessage+'</p><i class="fa fa-angle-down"></i></span>');
										}	
									}
								}
							}
							if(log1 != '' && log1 != 99 && log3 > 2){
									document.title = "\u{26A1}";
							}
							if(log9 == '1'){
									$('#show_chat li:lt(-1)').remove();
							}
							if(log3 == 1 || log3 == 2){
								for (var i = 0; i < log1.length; i++){
									//$("#idlog0").html('История чата успешно загружена :-)');
								}
							}
							if(log3 > 0 ){
								$('#show_chat li:lt(-3000)').remove();
								if(log8.length != 0){
									for (var i = 0; i < log8.length; i++){
										$("#stlog"+log8[i]).html('<i class=\"fa fa-check\" style=\"color:green;\" ></i>');
									}
								}
							}
							rlc = log5;
							clogs = log2;
							chr = log3;
							cnt = log7;
							pid = pmid;
							icount = iconPrivate;
							markedid = checkmarkedid;
						}
						
								
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="my_notice"') == -1 && log1.indexOf('class="system"') == -1 && log1.indexOf('class="voice_notice"') == -1 && log1.indexOf('class="marry_notice"') == -1 && log1.indexOf('class="necrolog_notice"') == -1 && log1.indexOf('class="access_denied"') == -1 && log1.indexOf('class="access_granted"') == -1 && log1.indexOf('class="joinKROXA"') == -1 && log1.indexOf('class="he_disconnected"') == -1 && log1.indexOf('class="joinJoGeN"') == -1 && sss == 1 && checkType == '1'){
									nPost.play();
								}
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="my_notice"') > 0 && sss == 1 && checkType == '1'){
									yourPost.play();
								}
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="marry_notice"') > 0 && sss == 1 && checkType == '1'){
									marryPost.play();
								}
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="necrolog_notice"') > 0 && sss == 1 && checkType == '1'){
									bannafigPost.play();
								} 
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="voice_notice"') > 0 && sss == 1 && checkType == '1'){
									voicePost.play();
								} 
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="access_denied"') > 0 && sss == 1 && checkType == '1'){
									access_deniedPost.play();
								} 
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="access_granted"') > 0 && sss == 1 && checkType == '1'){
									access_grantedPost.play();
								} 
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="joinKROXA"') > 0 && sss == 1 && checkType == '1'){
									user_kroxaPost.play();
								} 
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="he_disconnected"') > 0 && sss == 1 && checkType == '1'){
									he_disconnectedPost.play();
								}
								if( chr > 2 && fSd == 1 && uSd > 1 && log1.indexOf('class="joinJoGeN"') > 0 && sss == 1 && checkType == '1'){
									user_jogenPost.play();
								} 
								

						}
					},
				});			

			
			var	scrollComparehistory = $('#show_chat ul').scrollTop();

			
			// scroll cursor up
			elemCount = $('#show_chat ul').children().length;
			
			if(elemCount >= 20){
				if (document.querySelector('#scrollinfoup').style.display == "none"){
					$('#scrollinfoup').css({display:'block'});
					$('#scrollinfoup').html('<span><i class="fa fa-angle-up"></i></span>');
				}
			}
			
			if(elemCount < 20 || scrollComparehistory < 300 ){
				if (document.querySelector('#scrollinfoup').style.display == "block"){
					$('#scrollinfoup').css({display:'none'});
					$('#scrollinfoup').html('');
				}
			}
			
			
			if(scrollComparehistory < 200 && checkScroll > 0 && scrollCompare < checkScroll ){
				
				var logid = $("#show_chat li").attr('id');			
				var ld = logid.replace(/\D+/g, "");
				
				 

				$.ajax({
					url: "system/"+ postTo + "_history.php?rank="+ user_rank + "&access="+ user_access+"&room="+ user_room+"&bottom="+ boxZone+"&target="+loadTarget+"&rlc="+rlc+"&clogs="+clogs+"&chr="+chr+"&count="+cnt+"&his="+ld+"&pid="+pid+"&icount="+icount+"&cpid="+markedid+"&fkey="+friendkey+"&cp="+chatpanel,
					type: "post",
					cache: false,
					dataType: 'json',
					statusCode: {
						200: function (response) {
							if(connection == '0'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:red;"></i>');
								connection = 0;
							}
						},
						400: function (response) {
							if(connection == '1'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:red;"></i>');
								connection = 0;
							}
						},
						0: function (response) {
							if(connection == '1'){
								$('#chat_connection').html('<i class="fa fa-signal" style="color:red;"></i>');
								connection = 0;
							}
						}
					},
					success: function(response)
					{
						var logold = response.log1;
						
						if(checkType == '1'){
							if (logold != '' && logold != 99 && ld != old_ld){

								// culc count new message
								countmessagehistory = logold.split("<li").length - 1;
								
								$('#scrollinfoup').html('<span style="display: grid; color: red;"><i class="fa fa-angle-up"></i><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessagehistory+'</p></span>').hide().fadeIn(500).delay(5000).fadeOut();
								$('#show_chat ul').scrollTop(0);
								$("#show_chat ul").prepend(logold);
								elemCount = $('#show_chat ul').children().length;
								var scrollhistory = $("#"+logid).offset().top;
								$('#show_chat ul').scrollTop(scrollhistory - 54); 
								//checkScroll = $('#show_chat ul').scrollTop() + checkScroll; 
								old_ld = ld;
							}
							else {
									$('#scrollinfoup').html("<i class=\"fa fa-ban\" ></i>").hide().fadeIn(500).delay(2000).fadeOut();
								}
						}

						if(checkType == '2'){
							if (logold != '' && logold != 99 && ld != old_ld){

								// culc count new message
								countmessagehistory = logold.split("<li").length - 1;
								
								$('#scrollinfoup').html('<span style="display: grid; color: red;"><i class="fa fa-angle-up"></i><p style="font-size: 16px; border: 1px red solid; cursor: pointer;">'+countmessagehistory+'</p></span>').hide().fadeIn(500).delay(5000).fadeOut();
								$('#show_chat ul').scrollTop(0);
								$("#show_chat ul").prepend(logold);
								elemCount = $('#show_chat ul').children().length;
								var scrollhistory = $("#"+logid).offset().top;
								$('#show_chat ul').scrollTop(scrollhistory - 54);
								//checkScroll = $('#show_chat ul').scrollTop() + checkScroll; 
								old_ld = ld;	
							}
							else {
									$('#scrollinfoup').html("<i class=\"fa fa-ban\" ></i>").hide().fadeIn(500).delay(2000).fadeOut();
								}
						}
					},
				});
			}
			else {
				return false;
			}
	}

	
	// reload avatar after upload 
	
	reload_avatar = function()
	{
		$.ajax({
			url: "system/avatar.php",
			cache: false,
			success: function(html){
				$('#tools_panel #avatar').html(html);	
			},
		});
	}

	// reload the show upload image ...
	
	showuploadReload = function(){
		$.ajax({
			url: "system/show_upload_image.php",
			cache: false,
			success: function(response){
				$("#image_panel .panel_element #image_container").html(response);
			},
		});
	}
	
	
	// delete user upload image ...
	
	delshowuploadReload = function(){
		$.ajax({
			url: "system/del_show_upload_image.php",
			cache: false,
			success: function(html){},
		});
	}



	// reload uploaded file list after uploading a file
	
	uploadReload = function()
	{
		$.ajax({
			url: "system/show_upload.php",
			cache: false,
			success: function(response){
				$('#image_panel #upload_bottom').html(response);
			},
		});
	}
	
	adjustFull = function()
	{
		var newWidth = $(window).width();
		var panelWidth = $('#chat_panel').width();
		var newChat = newWidth - panelWidth - 36;
		if(newWidth > 1024){
			$('#container_chat').css({
			"width": newChat,
			"float": "left",
			"margin-left": "10px",
			});
			$('#inner_header').css({
			"width": newChat + 20,
			"float": "left",
			"margin-left": "10px",
			});
			$('#container_chat').css({
			"padding": "8px",
			});
		}
		else {
			$('#container_chat').css({
			"width": "98%",
			"margin": "0 auto",
			"padding-left": "1%",
			"padding-right": "1%"
			});	
			$('#inner_header').css({
				"width": "95%",
				"margin-left": "10px",
			});
		}
	}

	// readjust height of chat after screen resize 
	adjustHeight = function()
	{
			var newHeight = $(window).height();
			var topChat = $('#top_chat_container').height();
			
			if($('#wrap_topic:visible').length){
				var heightTopic = $('#wrap_topic').height();
			}
			else {
				heightTopic = 0;
			}
			if ($('#header:visible').length){
				var headerHeight = $('#header').outerHeight();
				var contentHeight = (newHeight - headerHeight - 26);
				var chatBox = (contentHeight - topChat - heightTopic);
			}
			else {
				var contentHeight = (newHeight - 5);
				var chatBox = (contentHeight - topChat - heightTopic - 33);
			}
			
			$("#container_chat").css({"height": contentHeight});
			$("#warp_show_chat").css({"height": chatBox});
			if(fw == 1){
				adjustFull();
			}
	}

	
	// ajusting panel side margin when resizing the screen 
	
	panelMargin = function()
	{
		$( ".panels" ).each(function() {
			var marginLook = parseInt($(this).css('right'));
			var otherPanels = $(this).css('width');
			if(marginLook >= 1){
				$(this).css({"right": otherPanels});
			}
		});
	}
	
	// ajusting ads margin after load of chat 
	
	adsMargin = function()
	{
		var adsHeight = parseInt($('#show_chat_ads').css('height'));
	}
	
	// reload the setting panel
	
	admin_setting_reload = function()
	{
		$.ajax({
			url: "system/admin_setting.php",
			cache: false,
			success: function(html)
			{
				$("#main_option .panel_element").html(html);
			},
		});
	}
	// reload the room in admin panel
	admin_room_reload = function()
	{
		$.ajax({
			url: "system/admin_room.php",
			cache: false,
			success: function(html){
				$("#main_option .panel_element").html(html);
			},
		});
	}
	
	wordFilter = function()
	{
		$.ajax({
			url: "system/word_filter.php",
			cache: false,
			success: function(html)
			{
				$("#main_option .panel_element").html(html);
			},
		});
	}
	
	// reload users in admin panel
	
	admin_user_reload = function()
	{
		$.ajax({
			url: "system/admin_user.php",
			cache: false,
			success: function(html)
			{
				$("#main_option .panel_element").html(html);
			},
		});
	}


	/*
	// update_cred
	updateCred = function(){
		$.ajax({
			url: "update_cred.php",
			cache: false,
			success: function(html){
				return false;
			},
		});
	}
	*/
	
	function showLogout (){
		$("#logout_box").fadeIn(200).effect( "bounce", 500);
	}
	
	$(function() {
		$( "#private_panel" ).draggable({
			handle: ".private_drag",
			containment: "document",
		});
	});
	
	

	
	showAds = function(){
		
		if(aAllow == 1){
			if(aSelect == 0){
				
				aSelect = 1;
				aCurrent = Math.floor(Date.now() / 1000);
				$("#show_chat_ads").show();
				$(".myads.Sads1").fadeIn(1000);	

			}
			else {
				if(aCount > 1){
					
					var timeCompare = Math.floor(Date.now() / 1000);
					
					if( timeCompare >= (aCurrent + aDelay)){
						
						aCurrent = Math.floor(Date.now() / 1000);
						aSelect = aSelect + 1;
						if(aSelect > aCount){
							aSelect = 1;
							$( ".myads" ).each(function() {
								$(this).hide();
							});
							$(".myads.Sads1").fadeIn(1000);
						}
						else {
							$( ".myads" ).each(function() {
								$(this).hide();
							});
							$(".myads.Sads" + aSelect + "").fadeIn(1000);
						}
					}
					else {
						return false;
					}
				}
				else {
					return false;
				}
			}
		}
		else {
			return false;
		}
	}
	

function ErrorHandler () {
			alert ("Cannot load the style file!");
		}

		
function on_full_screen() {
	var element = document.documentElement;
	if(element.requestFullScreen) {
		element.requestFullScreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
} 

function off_full_screen() {
	if(document.cancelFullScreen) {
		document.cancelFullScreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	}
}







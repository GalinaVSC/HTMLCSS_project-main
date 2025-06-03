$(document).ready(function(){
	
	$('#chat_panel').on('mouseover', '.user_option_list li', function(){
		$(this).addClass("hover_element");
	});
	$('#chat_panel').on('mouseout', '.user_option_list li', function(){
		$(this).removeClass("hover_element");
	});

	//swipe func start
	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	
	var xDown = null;
	var yDown = null;
	
	
	var xUp = null; 
	var yUp = null;
	
	var tagname = '';
	var panelContent = '';
	var optionSizeP = '';
	
	var timeswipe = 0;
	
	function getTouches(evt) {
		return evt.touches || evt.originalEvent.touches;
		};

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};
	

function handleTouchMove(evt) {
	if (!$('.fancybox-image:visible').length){
		if( timeswipe < Date.now() ){
			
			if ( ! xDown || ! yDown ) {
				return;
			}
				

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;
		
			var tagname = event.target.tagName;
			
			var currentItem = event.target;
		
		
			if(parseInt($('#chat_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'chat_panel';
			}
			else if(parseInt($('#main_option.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'main_option';
			}
			else if(parseInt($('#users_options.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'users_options';
			}
			else if(parseInt($('#tools_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'tools_panel';
			}
			else if(parseInt($('#help_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'help_panel';
			}
			else if(parseInt($('#fullmenu_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'fullmenu_panel';
			}
			else if(parseInt($('#searchchat_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'searchchat_panel';
			}
			else if(parseInt($('#radiowidgets_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'radiowidgets_panel';
			}
			else if(parseInt($('#image_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'image_panel';
			}
			else if(parseInt($('#tv_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'tv_panel';
			}
			else if(parseInt($('#share_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'share_panel';
			}
			else if(parseInt($('#news_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'news_panel';
			}
			else if(parseInt($('#info_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'info_panel';
			}
			else if(parseInt($('#tet-a-tet_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'tet-a-tet_panel';
			}
			else if(parseInt($('#stickers_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'stickers_panel';
			}
			else if(parseInt($('#premium_stickers_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'premium_stickers_panel';
			}
			else if(parseInt($('#os_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'os_panel';
			}
			else if(parseInt($('#inst_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'inst_panel';
			}
			else if(parseInt($('#profile_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'profile_panel';
			}
			else if(parseInt($('#theme_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'theme_panel';
			}
			else if(parseInt($('#history_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'history_panel';
			}
			else if(parseInt($('#blog_panel.panels').css('right')) >= 1 && tagname != "INPUT" && tagname != "TEXTAREA"){
				var panelContent = 'blog_panel';
			}
			else {
					var panelContent = '';
					var optionSizeP = '';
				}
				
			var optionSizeP = $('.panels.top_panels').css('width');
			

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				
				if ( xDiff > 0 ) {
				// left swipe
				

				//$('#chat_error').html("<span class=\"error\">"+panelContent+"</span>").hide().fadeIn(300).delay(500).fadeOut();
						if(panelContent == "" && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
							var optionSizeP = $('.panels.top_panels').css('width');
							$('#chat_panel').animate({right:"+="+optionSizeP},200);
							dataControl = "7";
							welcome_reload();
						}
						else if(panelContent == "chat_panel" && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
							$('#chat_panel').animate({right:"-="+optionSizeP},200);
							$('#chat_panel .panel_element').html("");
							dataControl = "0";
							$('#fullmenu_panel').animate({right:"+="+optionSizeP},200);
						}
						else if(panelContent == "fullmenu_panel" && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
							$('#fullmenu_panel').animate({right:"-="+optionSizeP},200);
							$('#help_panel').animate({right:"+="+optionSizeP},200);
						
						}
						else if(panelContent != "" && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
							$('#'+panelContent).animate({right:"-="+optionSizeP},200);
							if (panelContent == "chat_panel"){
								$('#chat_panel .panel_element').html("");
								dataControl = "0";
							}
							else if(panelContent == "profile_panel"){
								$("#profile_panel .panel_element").html("");
							}
							else if(panelContent == "history_panel"){
								$("#history_container").html("");
							}
							else if(panelContent == "blog_panel"){
								$("#blog_container").html("");
							}
							else if(panelContent == "image_panel"){
								$("#image_panel .panel_element #image_container").html("");
							}
							else {
							}
						}
				} else {
						// right swipe 
						
						// reply swipe
						if (currentItem.className == "reply" || currentItem.className == "cite" || currentItem.className == "colortext") { 
							var textUsr = $(currentItem).closest('.my_text').find('.cite').text();
							$(currentItem).closest('.my_text').find('.cite').animate({opacity: 0.1}, 0).animate({opacity: 1}, 1000);
							textUsr = textUsr.trim();
							let str = textUsr;
							let arr = str.split(']');
							let lastElem = arr[arr.length - 1];
							var targetUsr = $(currentItem).closest('.my_text').find('.cite').attr('value');
							$('#content').val('').focus();
							emoticon($('#content')[0], "reply: [ "+targetUsr+" - "+lastElem+" ] ");	
							timeswipe = Date.now() + 500;
							return false;
						}

						// username swipe
						//var testtt = currentItem.className;	 
						if (currentItem.className == "username user" || currentItem.className == "username vip" || currentItem.className == "username guest" || currentItem.className == "username modo" || currentItem.className == "username admin" || currentItem.className == "username sadmin") { 
							$(currentItem).animate({opacity: 0.1}, 0).animate({opacity: 1}, 1000);
							var targetUsr = $(currentItem).text();
							targetUsr = targetUsr.trim();
							$("#content").focus();
							emoticon($('#content')[0], targetUsr+" ");				
							timeswipe = Date.now() + 500;
							return false;
						}
						
						// username pictures swipe
						//var testtt = currentItem.className;	 
						if (currentItem.className == "vp") { 
							$(currentItem).animate({opacity: 0.1}, 0).animate({opacity: 1}, 1000);
							var targetUsr = $(currentItem).closest('.my_text').find('img').attr("alt");
							targetUsr = targetUsr.trim();
							$("#content").focus();
							emoticon($('#content')[0], targetUsr+" ");				
							timeswipe = Date.now() + 500;
							return false;
						}
						
						
						if (panelContent != "" && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
							$('#'+panelContent).animate({right:"-="+optionSizeP},200);
							if (panelContent == "chat_panel"){
								$('#chat_panel .panel_element').html("");
								dataControl = "0";
							}
							else if(panelContent == "profile_panel"){
								$("#profile_panel .panel_element").html("");
							}
							else if(panelContent == "history_panel"){
								$("#history_container").html("");
							}
							else if(panelContent == "blog_panel"){
								$("#blog_container").html("");
							}
							else if(panelContent == "image_panel"){
								$("#image_panel .panel_element #image_container").html("");
							}
							else {
							}
						}
						else {
							
							
								if ($('#menu_private:visible').length && tagname != "INPUT" && tagname != "TEXTAREA" && tagname != "BUTTON" && tagname != "I"){
									var outPrivate = confirm("\u{203C} Закрыть приватный диалог? :-)");
									if (outPrivate) {

										//$('#show_chat ul').append('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
										$('#show_chat li:lt(-1)').remove();
										$('.add_friend_button').attr('value','none');
										$('.user_ignore_button').attr('value','none');
										$('#recvoice').attr('value', 'none');
										$('#this_target').attr('value', 'none');
										$('#main_chat_type').attr('value', '1');
										$('.private_friend .span_private_target').text('none');
										$('#room_topic').removeClass('hide_this');
										$('#menu_private').hide();
										$('#content').val('');
				
										oldprofileTarget = '';
										chr = 0;
										clogs = 0;
										checkScroll = 0;
										scrollCompare = 0;
										acSd = 0;
										//$('#show_chat ul').html('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
										$('#show_chat ul').html('');
										adjustTopic();
										chat_reload();
										oldprofileTarget();
									} else {
									  }
								}	
								
						}
				}
			} else {
				if ( yDiff > 0 ) {
					// up swipe
					if( tagname != "INPUT" && tagname != "TEXTAREA"){
						$('#content').blur();
					}
				} else { 
					// down swipe
					if( tagname != "INPUT" && tagname != "TEXTAREA"){
						$('#content').blur();
					}
				}
			}
			timeswipe = Date.now() + 500;
		}
	}
		// reset values
		xDown = null;
		yDown = null;
	
		var xUp = null; 
		var yUp = null;
	
		var tagname = '';
		var panelContent = '';
		var optionSizeP = '';
};
	
	
	// open private window  
	var updopenpm = 0;
	var oldprofileTarget = '';
	$(document).on('click', '.panel_element .send_private, .private_view, .chat_avatar_wrap3, .friend_private, #NotifyPrivate .UP, #NotifyFriend .UP, #cnp .pnc', function(){
		if( updopenpm < Date.now() ){
			
			var profileTarget = $(this).attr("value");
			
			if(privateStyle == 2 && user_rank >= pxn && oldprofileTarget != profileTarget){
			
				var panelTargetclose =  $(this).attr("id");
				var optionSizeclose = $('#'+panelTargetclose).css('width');
				var marginCheckS = parseInt($('#'+panelTargetclose).css('right'));
				
				
				
			
				//var profileTarget = $(this).attr("value");
				$('.option_list').slideUp(300);
				$('.add_friend_button').attr('value',profileTarget);
				$('.user_ignore_button').attr('value',profileTarget);
				$('.get_profile').attr('value',profileTarget);
				$('#this_target').attr('value', profileTarget);
				$('#recvoice').attr('value', profileTarget);
				$('#main_chat_type').attr('value', '2');
				$('.private_friend .span_private_target').text(profileTarget);
				$('#room_topic').addClass('hide_this');
				$('#menu_private').show();
				$('#content').val('');


				if (marginCheckS >= 1) {
					$('#'+panelTargetclose).animate({right:"-="+optionSizeclose},200);
					
					if(panelTargetclose == "profile_panel"){
						$("#profile_panel .panel_element").html("");
					}
				}
			
			
				var checkMobile = $(window).width();
				if(checkMobile < 1025){
					var marginCheck = parseInt($('#chat_panel').css('right'));
					if(marginCheck >= 1){
						var optionSize = $('#chat_panel').css('width');
						$('#chat_panel').animate({right:"-="+optionSize},200);
						$('#profile_panel').animate({right:"-="+optionSize},200);
						if(panelTargetclose == "profile_panel"){
							$("#profile_panel .panel_element").html("");
						}
						dataControl = "0";
					}
				}
				
				chr = 0;
				clogs = 0;
				checkScroll = 0;
				scrollCompare = 0;
				acSd = 0;
				//$('#show_chat ul').html('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
				$('#show_chat ul').html('');
				adjustTopic();
				chat_reload();
			
			}
			else {
				return false;
			}
		updopenpm = Date.now() + 1000;
		oldprofileTarget = profileTarget;
		}
	});
	
	$(document).on('click', '#private_close', function(){
		//$('#show_chat ul').append('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
		$('#show_chat li:lt(-1)').remove();
		$('.add_friend_button').attr('value','none');
		$('.user_ignore_button').attr('value','none');
		$('#this_target').attr('value', 'none');
		$('#recvoice').attr('value', 'none');
		$('#main_chat_type').attr('value', '1');
		$('.private_friend .span_private_target').text('none');
		$('#room_topic').removeClass('hide_this');
		$('#menu_private').hide();
		$('#content').val('');
		
		oldprofileTarget = '';
		chr = 0;
		clogs = 0;
		checkScroll = 0;
		scrollCompare = 0;
		acSd = 0;
		//$('#show_chat ul').html('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
		$('#show_chat ul').html('');
		adjustTopic();
		chat_reload();
		
	});
	

	
	// logs date full
	$(document).on('click', '.logs_date', function(){
		if ($('.hover_element_date:visible').length == 0){
			$(".logs_date").removeClass("hover_element_date");
			var textdescr = $(this).attr('name');
			textdescr = textdescr.trim();
			$(this).addClass("hover_element_date");
			$(".hover_element_date").html(textdescr);
		}
	});
	
	$(document).on('click', '.hover_element_date', function(){
		var textdescr = $(this).attr('name');
		textdescr = textdescr.trim();
		textdescr = textdescr.slice( 0, 5) + " <i class='fa fa-ellipsis-h'></i>";
		$(".hover_element_date").html(textdescr);
		$(this).removeClass("hover_element_date");
	});
	
	
	// topic icon view
	$(document).on('click', '.element_title', function(){
		var textdescr = $(this).attr('name');
		textdescr = textdescr.trim();
		$(this).removeClass("element_title");
		$(this).addClass("hover_element_title");
		$("#topicroom").html(textdescr);
	});
	
	$(document).on('click', '.hover_element_title', function(){
		var textdescr = $(this).attr('value');
		textdescr = textdescr.trim();
		$("#topicroom").html(textdescr);
		$(this).removeClass("hover_element_title");
		$(this).addClass("element_title");
	});
	
	
	
	
	
		
	// processing the moderator and admin option from user list ... 
	
	$('#chat_panel').on('click', '.get_kick , .get_ban, .get_mute, .get_unmute, .get_kill, .get_ignore, .get_friends, .get_uplmutehour, .get_uplmuteday, .get_uplmuteweek', function(){
		
		var optionTarget = $(this).parent().attr('value');
		var optionEffect = $(this).attr('value');
		
			$.ajax({
				url: "system/option_process.php?target="+ optionTarget +"&option="+ optionEffect,
				cache: false,
				success: function(response)
				{
					if(response == 1){
						$('.option_list').slideUp(100);
						chat_reload();
						user_reload();
					}
					if(response == 103){
						$('.option_list').slideUp(100);
						$('#chat_error').html("<span class=\"error\">"+system.ing1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
					}
					if(response == 102){
						$('.option_list').slideUp(100);
						$('#chat_error').html("<span class=\"success\">"+system.ing2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
					}
					if(response == 104){
						$('.option_list').slideUp(100);
						$('#chat_error').html("<span class=\"error\">"+system.friend1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
					}
					if(response == 105){
						$('.option_list').slideUp(100);
						$('#chat_error').html("<span class=\"success\">"+system.friend2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
					}
				},
			});		
	});

	$('#chat_panel, #inside_wrap_chat, #private_panel, #searchchat_panel, #profile_panel, #blog_panel, #history_panel, #show_chat_ads, #fullmenu_panel').on('click', '.get_info, .friend_ginfo', function(){ 
		$('.option_list').slideUp(300);
		
		var panelTargetclose = $(this).parent().attr("id");
		
		var checkMobile = $(window).width();
		if (panelTargetclose == 'bpanel' && checkMobile < 1025) {
			var panelTargetclose = 'chat_panel';
		}
		
		var optionSizeclose = $('#'+panelTargetclose).css('width');
		var marginCheck = parseInt($('#'+panelTargetclose).css('right'));
		

		if (marginCheck >= 1) {
			$('#'+panelTargetclose).animate({right:"-="+optionSizeclose},200);
			
				if (panelTargetclose == "chat_panel" && checkMobile < 1025){
					$('#chat_panel .panel_element').html("");
					dataControl = "0";
				}
				else if(panelTargetclose == "profile_panel" ){
					$("#profile_panel .panel_element").html("");
				}
				else if(panelTargetclose == "history_panel"){
					$("#history_container").html("");
				}
				else if(panelTargetclose == "blog_panel"){
					$("#blog_container").html("");
				}
				else if(panelTargetclose == "image_panel"){
					$("#image_panel .panel_element #image_container").html("");
				}
		}
		
		var profileTarget = $(this).parent().attr("value");
		var panelTarget = "profile_panel";
		var optionSize = $('#'+panelTarget).css('width');
		$('#'+panelTarget).animate({right:"+"+optionSize},0);
		$("#profile_panel").scrollTop(0);
		


		

		$.ajax({
			url: "system/get_profile.php?profile_target="+ profileTarget,
			cache: false,
			success: function(response)
			{
					$("#profile_panel .panel_element").html(response);
			},
		});
		
	});


	// accept friend function 
	
	$('#chat_panel').on('click', '.friend_accept', function(){
		var tFriend = $(this).attr("value");
			$.post('system/friend_process.php', {accept: tFriend}, function(response) {	
				if(response == 1){
					reloadFriends();
				}
				else {
					return false;
				}
			});
	});
	
	
	// friend declined 
	
	$('#chat_panel').on('click', '.friend_decline', function(){
		var tFriend = $(this).attr("value");
		$.post('system/friend_process.php', {decline: tFriend}, function(response) {	
			if(response == 1){
				reloadFriends();
			}
			else {
				return false;
			}
		});
	});
	
	// delete friend from friends list
	
	$(document).on('click', '#chat_panel .delete_friend', function() {
	
		var delete_friend = $(this).parent().attr("value");
		
		$.post('system/remove_friend.php', { delete_friend: delete_friend }, function(response) {
			reloadFriends();
		});		
		return false;
	});

	// display menubar
	$(document).on('click', '.menu_header', function() {
		if ($('.menu_drop:visible').length){
			$(".menu_drop").fadeOut(100);
		}
		else {
			$(".menu_drop").fadeIn(200);
		}
		$("#wrap_options").fadeOut(100);
	});
	
	$(document).on('click', '.other_panels, .addon_button, .head_li, #content', function(){
		$(".menu_drop, #wrap_options").fadeOut(100);
	});
	
	$(document).on('click', '.other_panels, .menu_panels', function(){
		
		var panelTarget = $(this).attr('value');
		var panelSize = $('#'+panelTarget).css('width');
		var panelContent = $(this).attr('id');
		var marginCheck = parseInt($('#'+panelTarget).css('right'));
		
		if(panelTarget == "addon_panel" && marginCheck >= 1){
			$.ajax({
				url: "addons/" + panelContent + "/" + panelContent + ".php",
				cache: false,
				success: function(response){
					$("#addon_panel .panel_element").html(response);
				},
			});
		}
		else if(panelTarget == "addon_panel_full" && marginCheck >= 1){
			$.ajax({
				url: "addons/" + panelContent + "/" + panelContent + ".php",
				cache: false,
				success: function(response){
					$("#addon_panel_full .panel_element").html(response);
				},
			});
		}
		else {
			if (marginCheck >= 1) {
				$('#'+panelTarget).animate({right:"-="+panelSize},200);
			}
			else {
				$( ".top_panels" ).each(function() {
					var marginLook = parseInt($(this).css('right'));
					var otherPanels = $(this).css('width');
					if(marginLook >= 1){
						$(this).animate({right:"-="+otherPanels},200);
					}
				});
				$('#'+panelTarget).animate({right:"+="+panelSize},200);
				
				
				
					if (panelTarget == "history_panel"){
							historyReload();
					}
					if (panelTarget == "blog_panel"){
							blogReload();
							var checkMobile = $(window).width();
							if(checkMobile < 1025 && panelContent == "closep"){
								var marginCheck = parseInt($('#chat_panel').css('right'));
								if(marginCheck >= 1){
									var optionSize = $('#chat_panel').css('width');
									$('#chat_panel').animate({right:"-="+optionSize},200);
									dataControl = "0";
								}
							}
					}
					if (panelTarget == "image_panel"){
							showuploadReload();
					}
					if (panelTarget == "show_image_panel"){
							showuploadReload();
					}
					if(panelTarget == "main_option"){
						admin_setting_reload();
					}
					if (panelTarget == "theme_panel"){
						themeReload();	
					}
					if(panelTarget == "tools_panel"){
						showMyprofile();
					}
					if(panelTarget == "addon_panel"){
						$.ajax({
							url: "addons/" + panelContent + "/" + panelContent + ".php",
							cache: false,
							success: function(response){
								$("#addon_panel .panel_element").html(response);
							},
						});
					}
					if(panelTarget == "addon_panel_full"){
						$.ajax({
							url: "addons/" + panelContent + "/" + panelContent + ".php",
							cache: false,
							success: function(response){
								$("#addon_panel_full .panel_element").html(response);
							},
						});
					}
			}
		
		}
		
		
	});
	
	
	
	// show alert friends
	$(document).on('click', '#friends_alert', function(){
		if(parseInt($('#chat_panel.panels').css('right')) == 0){
			var optionSizeP = $('#chat_panel').css('width');
			$('#chat_panel').animate({right:"+="+optionSizeP},200);
			dataControl = "5";
			rFriend = 1;
			reloadFriends();
		}
		else if(parseInt($('#chat_panel.panels').css('right')) >= 1){
			dataControl = "5";
			rFriend = 1;
			reloadFriends();
		}
	});
	
	
	// show and hide panels
	
	$(".addon_button").click(function(){
	
		var panelTarget = $(this).attr('value');
		var optionSize = $('#'+panelTarget).css('width');
		var marginCheck = parseInt($('#'+panelTarget).css('right'));
		

		if (marginCheck >= 1) {
			if(panelTarget == "chat_panel"){
				if ($('#chat_panel:visible').length && $('#private_count:visible').length){
					dataControl = "4";
					privateOpen();
				}
				else {
					dataControl = "7";
					//welcome_reload();
				}
			}
			else {
				$('#'+panelTarget).animate({right:"-="+optionSize},200);
			}
		}
		
		
		else {
			$( ".panels" ).each(function() {
				var marginLook = parseInt($(this).css('right'));
				var otherPanels = $(this).css('width');
				if(marginLook >= 1){
					$(this).animate({right:"-="+otherPanels},200);
				}
			});
			$('#'+panelTarget).animate({right:"+="+optionSize},200);
			
			if (panelTarget == "chat_panel"){
				if ($('#private_count:visible').length){
					dataControl = "4";
					privateOpen();
				}
				else {
					dataControl = "7";
					welcome_reload();
				}
			}
		}
		
	});
	
	// close options panels ...
	
	$(".close_panel").click(function(){
	
		var panelTarget = $(this).attr('value');
		var optionSize = $('#'+panelTarget).css('width');
		var marginCheck = parseInt($('#'+panelTarget).css('right'));

		if (marginCheck >= 1) {
			$('#'+panelTarget).animate({right:"-="+optionSize},200);
			
			if (panelTarget == "chat_panel"){
				dataControl = "0";	
			}
			if(panelTarget == "profile_panel"){
				$("#profile_panel .panel_element").html("");
			}
			if(panelTarget == "history_panel"){
				$("#history_container").html("");
			}
			if(panelTarget == "blog_panel"){
				$("#blog_container").html("");
			}
			if(panelTarget == "show_image_panel"){
				$("#image_container").html("");
			}
			if(panelTarget == "image_panel"){
				$("#image_panel .panel_element #image_container").html("");
			}
		}
		
	});
	
	// close private window 
	
	$(".close_private").click(function(){
		var panelTarget = $(this).attr('value');
		$('#'+panelTarget).fadeOut(200);
		privateControl = "0";
		chat_reload();
		
	});
	
	$("#image_panel").on('click', '.remove_image', function() {
		var imgTarget = $(this).attr('value');
			$.post('system/image_delete.php', {del_image: imgTarget}, function(response) {	
				if(response == 1){
					showuploadReload();
				}
			});
	});
	
	$("#chat_panel").on('click', '.clear_private', function() {
		var Target = $(this).attr('value');
			$.post('system/private_clear.php', {target: Target}, function(response) {	
				if(response == 1){
					privateOpen();
				}
			});
	});
	
	// log out user from the chat on click
	
	$(".logout_button").click(function(){
		showLogout();
		$(".menu_drop").fadeOut(100);
	});
	
	$(".close_logout, #cancel_logout").click(function(){
		$("#logout_box").fadeOut(300);
	});
	
	$("#confirm_logout").click(function(){
		logOut();
	});
	
	$("#chat_room").click(function(){
		dataControl = "2";
		showRooms();
	});
	$("#chat_user").click(function(){
		dataControl = "1";
		user_reload();
	});
	$("#chat_friends").click(function(){
		dataControl = "5";
		rFriend = 1;
		reloadFriends();
	});
	$("#chat_private").click(function(){
		dataControl = "4";
		privateOpen();
	});
	$("#chat_ignore").click(function(){
		dataControl = "6";
		showIgnore();
	});
	$("#my_history").click(function(){
		userHistory();
	});
	$("#chat_history").click(function(){
		historyReload();
	});
	$("#my_blog").click(function(){
		userBlog();
	});
	$("#chat_blog").click(function(){
		blogReload();
	});
	$("#image_reload").click(function(){
		showuploadReload();
	});
	$("#image_reload_del").click(function(){
		delshowuploadReload();
		showuploadReload();
	});
	// welcome chat
	$("#chat_welcome").click(function(){
		dataControl = "7";
		welcome_reload();
	});
	
	// update user information when clicking on update account button 
	
	$('#tools_panel').on('click', '#account_button', function() {
		var set_age = $( "#select_age option:selected" ).val();
		var set_gender = $( "#select_gender option:selected" ).val();
		var set_sexorient = $( "#select_sexorient option:selected" ).val();
		var set_interests = $( "#select_interests option:selected" ).val();
		var set_description = $( "#my_description" ).val();
		var set_sound = $( "#select_sound option:selected" ).val();
		var set_private = $( "#select_private option:selected" ).val();
		var set_sysnotify = $( "#select_sysnotify option:selected" ).val(); 
		var set_chat_private_notify = $( "#select_chat_private_notify option:selected" ).val();
		var set_pushmail = $( "#select_pushmail option:selected" ).val();
		var set_country = $( "#select_country option:selected" ).val();
		var set_region = $( "#select_region option:selected" ).val();
		var set_color = $("#customcolor").val();
		var myEmail = $( "#my_email" ).val();
		if($("#custom1").val()){
			var custom1 = $("#custom1").val();
		}
		else {
			var custom1 = "clear";
		}
		if($("#custom2").val()){
			var custom2 = $("#custom2").val();
		}
		else {
			var custom2 = "clear";
		}
		$.post('system/account_data.php', {
		
		set_age: set_age,
		set_gender: set_gender,
		set_sexorient: set_sexorient,
		set_interests: set_interests,
		set_description: set_description,
		set_sound: set_sound,
		set_private: set_private,
		set_sysnotify: set_sysnotify,
		set_chat_private_notify: set_chat_private_notify,
		set_pushmail: set_pushmail,
		set_country: set_country,
		set_region: set_region,
		set_email: myEmail,
		set_color: set_color,
		custom1: custom1,
		custom2: custom2
		
		}, function(response) {
			if(response == 1){
				$("#account_button").html("<span class=\"success\">"+system.updateSuccess+"</span>").delay(3000).queue(function(n) {$(this).html(system.updateInfo);
					n();
				});
			}
			else {
				$("#account_button").html("<span class=\"error_message\">"+system.errorOccur+"</span>").delay(3000).queue(function(n) {$(this).html(system.updateInfo);
					n();
				});				
			}
		});
		return false;
		
	});
	
	// change user password 

	$('#tools_panel').on('click', '#update_password', function() {
		var old_password = $( "#old_password" ).val();
		var new_password = $( "#new_password" ).val();
		var confirm_password = $( "#confirm_password" ).val();
		$.post('pass_change.php', {
		
		old_password: old_password,
		new_password: new_password,
		confirm_password: confirm_password
		
		}, function(response) {
			if(response == 6){
				$( "#new_password" ).val("");
				$( "#confirm_password" ).val("");
				$('#error_info3').html("<span class=\"error\">"+system.pass5+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
			}
			else if (response == 5){
				$( "#old_password" ).val("");
				$( "#confirm_password" ).val("");
				$( "#new_password" ).val("");
				$('#error_info3').html("<span class=\"error\">"+system.errorOccur+"</span>").hide().fadeIn(300).delay(7000).fadeOut();			
			}
			else if (response == 4){
				$( "#new_password" ).val("");
				$( "#confirm_password" ).val("");
				$('#error_info3').html("<span class=\"error\">"+system.pass4+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
			}
			else if (response == 3){
				$('#error_info3').html("<span class=\"error\">"+system.pass3+"</span>").hide().fadeIn(300).delay(7000).fadeOut();
			}
			else if (response == 2){
				$( "#old_password" ).val("");
				$('#error_info3').html("<span class=\"error\">"+system.pass3+"</span>").hide().fadeIn(300).delay(7000).fadeOut();			
			}
			else if (response == 1){
				$( "#confirm_password" ).val("");
				$( "#old_password" ).val("");
				$( "#new_password" ).val("");
				$('#error_info3').html("<span class=\"success\">"+system.updateSuccess+"</span>").hide().fadeIn(300).delay(7000).fadeOut();			
			}
			else {
				return false;
			}
		});
		return false;
		
	});
	

	
	// updating user_name 
	
	$('#tools_panel').on('click', '#update_name', function() {
		var new_name = $( "#new_name" ).val();
		var ucomplete = $("#upname_value").attr("value");
		
		
		if(new_name == ''){
			return false;
		}
		else if (/^\s+$/.test($('#new_name').val())){
			$('#new_name').val("");
			return false;
		}
		else{
			$.post('name_change.php', {
			
			new_name: new_name,
			
			}, function(response) {
				if(response == 1){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.errorOccur+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				if(response == 2){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.log5+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				if(response == 3){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.log4+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				if(response == 5){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.log13+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				if(response == 6){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.loginvisible+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				if(response == 7){
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"error\">"+system.logvippic+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				else if (response == 4){
					var newHname= $("#new_name").val();
					$("#new_name").attr("placeholder", newHname);
					$( "#new_name" ).val("");
					$('#error_info').html("<span class=\"success\">"+system.updateSuccess+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				else {
					return false;
				}
			});
			return false;
		}
	});
	
	
	// change email
	
	
	$('#tools_panel').on('click', '#update_email', function() {
		var new_email = $( "#new_email" ).val();
		
		if(new_email == ''){
			return false;
		}
		else if (/^\s+$/.test($('#new_email').val())){
			$('#new_email').val("");
			return false;
		}
		else{
			$.post('system/email_change.php', {
			
			new_email: new_email,
			
			}, function(response) {
				if(response == 1){
					$( "#new_email" ).val("");
					$('#error_info2').html("<span class=\"error\">"+system.log6+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				else if (response == 2){
					var newHold = $("#new_email").val();
					$("#new_email").attr("placeholder", newHold);
					$("#new_email").val("");					
					$('#error_info2').html("<span class=\"success\">"+system.updateSuccess+"</span>").hide().fadeIn(300).delay(7000).fadeOut();		
				}
				else {
					return false;
				}
			});
			return false;
		}
	});
	
	
	// update media social link
	var wChange = 0;
	$('#tools_panel').on('click', '#update_social', function() {
		
		if(wChange < (Math.floor(Date.now() / 1000) - 7)){
			wChange = Math.floor(Date.now() / 1000);
			
			var set_facebook = $( "#bc_facebook" ).val();
			var set_twitter = $( "#bc_twitter" ).val();
			var set_pinterest = $( "#bc_pinterest" ).val();
			var set_google = $( "#bc_google" ).val();
			var set_youtube = $( "#bc_youtube" ).val();
			var set_instagram = $( "#bc_instagram" ).val();
			var set_linkedin = $( "#bc_linked_in" ).val();
			var set_tumblr = $( "#bc_tumblr" ).val();
			var set_vk = $( "#bc_vk" ).val();
			
			set_facebook = set_facebook.trim();
			set_twitter = set_twitter.trim();
			set_pinterest = set_pinterest.trim();
			set_google = set_google.trim();
			set_youtube = set_youtube.trim();
			set_instagram = set_instagram.trim();
			set_linkedin = set_linkedin.trim();
			set_tumblr = set_tumblr.trim();
			set_vk = set_vk.trim();
			

			$.post('system/social_manager.php', {
			
			set_facebook: set_facebook,
			set_twitter: set_twitter,
			set_pinterest: set_pinterest,
			set_google: set_google,
			set_youtube: set_youtube,
			set_instagram: set_instagram,
			set_linkedin: set_linkedin,
			set_tumblr: set_tumblr,
			set_vk: set_vk
			
			}, function(response) {
					if(response == 1){
						$("#social_error").html("<span class=\"success\">"+system.updateSuccess+"</span>").delay(9000).queue(function(n) {$(this).html("");
							n();
						});
					}
					else if (response == 2){
						$("#social_error").html("<span class=\"error\">"+system3.errorSocial+"</span>").delay(9000).queue(function(n) {$(this).html("");
							n();
						});
					}
			});
			return false;
		}
		else {
			return false;
		}
	});
	
	// allow to change the chat theme 
	//$('#theme_panel').on('click', '.panel_element .theme_button', function() {
	$(document).on('click', '.theme_button', function(){
		var theme = $(this).attr('value');
			$.post('system/theme_manager.php', {theme: theme}, function(response) {
				themeReload();
				location.reload();
			});
		return false;
	});
	
	
	// bring the user in selected room and update userlist, chat log
	var targroomtime = 0;
	var oldroomtarget = '';
	$(document).on('click', '#chat_panel .roombutton, #chat_panel .roombutton1, #profile_panel .roombutton2, #os_panel .roombutton2, #show_chat .roombutton3, #history_container .roombutton3, #searchchat_panel .roombuttonsearch, #saved_rooms .saveroom, #hashtag_rooms .hashtagroom, #blog .newsrooms', function() {
		
		if ($(document).width() < 600){
				var roomyes = confirm("\u{203C} Перейти в другую чат-комнату? :-)");
			} else { var roomyes = true; }
		
		var panelTargetcloseS = $(this).attr("name");
		
		var optionSizecloseS = $('#'+panelTargetcloseS).css('width');
		var marginCheckS = parseInt($('#'+panelTargetcloseS).css('right'));
		
		
		var target = $(this).attr('id');
		var roomtarget = $(this).attr('value');
		var roomtargetkey = $(this).attr('valuekey');
		$('.roombutton').removeClass('hoverroom');
		$(this).addClass('hoverroom');

		if (roomyes) {
			if( targroomtime < Date.now()){
				if( oldroomtarget != roomtarget){
					
					$.post('system/room_target.php', { room_target: target, room_key: roomtargetkey }, function(response) {
						
						if (response == 1){
							$('#chat_error').html("<span class=\"error\">"+system.inRoom+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
							$('#recvoice').attr('value', 'none');
							$('#this_target').attr('value', 'none');
							$('#main_chat_type').attr('value', '1');
							$('.private_friend .span_private_target').text('none');
							$('#room_topic').removeClass('hide_this');
							$('#menu_private').hide();
							$('#content').val('');
							clogs = 0;
							chr = 0;
							checkScroll = 0;
							scrollCompare = 0;
							acSd = 0;
							//$('#show_chat ul').html('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
							$('#show_chat ul').html('');
							adjustTopic();
							welcome_reload();
							chat_reload();
							oldroomtarget = roomtarget;
							oldprofileTarget = '';
							return false;
						
							if (marginCheckS >= 1) {
								$('#'+panelTargetcloseS).animate({right:"-="+optionSizecloseS},200);
							}

							var checkMobile = $(window).width();
							if(checkMobile < 1025){
								var marginCheck = parseInt($('#chat_panel').css('right'));
								if(marginCheck >= 1){
									var optionSize = $('#chat_panel').css('width');
									$('#chat_panel').animate({right:"-="+optionSize},200);
									dataControl = "0";
								}	
							}
						
						}
						if(response == 2){
							$('#chat_error').html("<span class=\"error\">"+system.roomLock+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
							return false;
						}
						if(response == 3){
							$('#chat_error').html("<span class=\"error\">"+system.roomPrison+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
							return false;
						}
						if(response == 4){
							$('#chat_error').html("<span class=\"error\">"+system.roomOpen+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
							return false;
						}
						else {
							clogs = 0;
							chr = 0;
							$('#recvoice').attr('value', 'none');
							$('#this_target').attr('value', 'none');
							$('#main_chat_type').attr('value', '1');
							$('.private_friend .span_private_target').text('none');
							$('#room_topic').removeClass('hide_this');
							$('#menu_private').hide();
							$('#content').val('');
					
							dataControl = 7;
							$('#user_room').val(roomtarget);
							user_room = roomtarget;
							checkScroll = 0;
							scrollCompare = 0;
							acSd = 0;
							//$('#show_chat ul').html('<li id=\"idlog0\" class=\"ch_logs log1 public\">Идёт загрузка истории сообщений..</li>');
							$('#show_chat ul').html('');
							adjustTopic();
							welcome_reload();
							chat_reload();
							oldroomtarget = roomtarget;
							oldprofileTarget = '';
							
							if (marginCheckS >= 1) {
								$('#'+panelTargetcloseS).animate({right:"-="+optionSizecloseS},200);
							}
							var checkMobile = $(window).width();
							if(checkMobile < 1025){
								var marginCheck = parseInt($('#chat_panel').css('right'));
								if(marginCheck >= 1){
									var optionSize = $('#chat_panel').css('width');
									$('#chat_panel').animate({right:"-="+optionSize},200);
									dataControl = "0";
								}
							}
						
						}
					});	
				targroomtime = Date.now() + 10000;
				$('#chat_error').html("<span class=\"error\">Welcome</span>").hide().fadeIn(300).delay(1000).fadeOut();
				}
				else {
					$('#chat_error').html("<span class=\"error\">You are already in this room..</span>").hide().fadeIn(300).delay(1000).fadeOut();
				}	
			}
			else {
				$('#chat_error').html("<span class=\"error\">Oops .. Try again in 10 seconds ..</span>").hide().fadeIn(300).delay(1000).fadeOut();
			}
			return false;
			
		}
		return false;
		
	});
	
	
	// delete a user photo in the chat
	
	$(document).on('click', '#image_panel .deloneimage', function() {
		var id = $(this).attr('value');
		var act = "delete";
			$.post('system/deloneimg.php', {id: id, act: act}, function(response) {
			});
			setTimeout(function() {
				checkScroll = 0;
				chat_reload();
				showuploadReload();
			}, 3000);
			
	});
	
	
	// delete a specific log in the chat
	
	$(document).on('click', '#show_chat .delete_log', function() {
		var del_post = $(this).attr('value');
			$.post('system/delete_post.php', {del_post: del_post}, function(response) {	
			});
			checkScroll = 0;
			chat_reload();
	});
	
	
	// delete a specific log in blog
	
	$(document).on('click', '#blog_container .delpost', function() {
		var del_bpost = $(this).attr('value');
			$.post('system/delete_blogpost.php', {del_bpost: del_bpost}, function(response) {	
			});
			blogReload();
	});
	
	
	// update user a specific log in the chat
	
	$(document).on('click', '#show_chat .update_log', function() {
		var upd_post = $(this).attr('value');
			$.post('system/updateuser_post.php', {upd_post: upd_post}, function(response) {	
			});
			checkScroll = 0;
			chat_reload();
	});

	// support log
	var timesuppcat = 0;
	$(document).on('click', '#show_chat .support_log', function() {
		var supp_post = $(this).attr('value');
		if( timesuppcat < Date.now() ){
			$("#idlog"+supp_post).append("<span id='support-"+supp_post+"' class='supw'><h4><i class='fa fa-arrow-down'></i> Выберете причину жалобы:</h4><li class='support_usr_close' value='"+supp_post+"' cat=''><i class='fa fa-close'></i> Закрыть<hr></li><li class='support_usr' value='"+supp_post+"' cat='Spam'> <i class='fa fa-check'></i> Спам - Распространение рекламной информации в не предназначенных для этого местах. <hr></li><li class='support_usr' value='"+supp_post+"' cat='Childporn'> <i class='fa fa-check'></i> Детская порнография - Порнографический или эротический контент с участием детей. <hr></li><li class='support_usr' value='"+supp_post+"' cat='Extremism'> <i class='fa fa-check'></i> Экстремизм - Призывы унижать и применять физическое насилие по отношению к группам одной нации, вероисповедания, расы и так далее; подстрекательство к беспорядкам и террору. <hr></li><li class='support_usr' value='"+supp_post+"' cat='Drugs'> <i class='fa fa-check'></i> Пропаганда наркотиков - Призывы принимать наркотики, информация о способах их изготовления и приобретения. <hr></li><li class='support_usr' value='"+supp_post+"' cat='Insult'> <i class='fa fa-check'></i> Оскорбление - Умышленное унижение чести и достоинства личности.<hr></li><li class='support_usr' value='"+supp_post+"' cat='Adult'> <i class='fa fa-check'></i> Материал для взрослых - Порнографический или эротический контент.<hr></li><li class='support_usr_close' value='"+supp_post+"' cat=''><i class='fa fa-close'></i> Закрыть</li></span>");
			$("#idlog"+supp_post).find(".support_log").remove();
			timesuppcat = Date.now() + 5000;
		}
		else {
		}
	});
	
	
	
	// support log profile
	var timesuppcatp = 0;
	$(document).on('click', '#profile_panel .support_profile', function() {
		var supp_user = $(this).attr('value');

		if( timesuppcatp < Date.now() ){
			$("#idprof"+supp_user).append("<span id='supportprofile-"+supp_user+"' ><h4><i class='fa fa-arrow-down'></i> Выберете причину жалобы:</h4><li class='support_prof_close' value='"+supp_user+"' cat=''><i class='fa fa-close'></i> Закрыть<hr></li><li class='support_prof' value='"+supp_user+"' cat='Spam'><i class='fa fa-check'></i> Спам - Распространение рекламной информации в не предназначенных для этого местах. <hr></li><li class='support_prof' value='"+supp_user+"' cat='Childporn'><i class='fa fa-check'></i> Детская порнография - Порнографический или эротический контент с участием детей. <hr></li><li class='support_prof' value='"+supp_user+"' cat='Extremism'><i class='fa fa-check'></i> Экстремизм - Призывы унижать и применять физическое насилие по отношению к группам одной нации, вероисповедания, расы и так далее; подстрекательство к беспорядкам и террору. <hr></li><li class='support_prof' value='"+supp_user+"' cat='Drugs'><i class='fa fa-check'></i> Пропаганда наркотиков - Призывы принимать наркотики, информация о способах их изготовления и приобретения. <hr></li><li class='support_prof' value='"+supp_user+"' cat='Insult'><i class='fa fa-check'></i> Оскорбление - Умышленное унижение чести и достоинства личности.<hr></li><li class='support_prof' value='"+supp_user+"' cat='Adult'><i class='fa fa-check'></i> Материал для взрослых - Порнографический или эротический контент.</li></span><br>");
			$("#idprof"+supp_user).find(".support_profile").remove();
			timesuppcatp = Date.now() + 5000;
		}
		else {
		}
	});
	
	
	
	
	// support log to moders category
	var timesupp = 0;
	$(document).on('click', '#show_chat .support_usr', function() {
		var supp_post = $(this).attr('value');
		var supp_cat = $(this).attr('cat');
		if( timesupp < Date.now() ){
			$.post('system/support_log.php', {supp_post: supp_post, supp_cat: supp_cat}, function(response) {
			});
			$("#idlog"+supp_post).html("Спасибо. Сообщение отправлено для модерации.");
			timesupp = Date.now() + 60000;
			$('#chat_error').html("<span class=\"error\">"+system.support+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
		else {
			$('#chat_error').html("<span class=\"error\">"+system.errsupport+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
	});
	
	
	// support profile to moders category
	var timesuppprof = 0;
	$(document).on('click', '#profile_panel .support_prof', function() {
		var supp_id = $(this).attr('value');
		var supp_cat = $(this).attr('cat');
		if( timesuppprof < Date.now() ){
			$.post('system/support_log.php', {supp_id: supp_id, supp_cat: supp_cat}, function(response) {
			});
			$("#idprof"+supp_id).html('<p id="profile_panel" class="support_profile" "><i class="fa fa-exclamation-triangle"></i> ваша жалоба отправлена</p><br>');
			timesuppprof = Date.now() + 60000;
			$('#chat_error').html("<span class=\"error\">"+system.support+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
		else {
			$('#chat_error').html("<span class=\"error\">"+system.errsupport+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
	});
	

	//support log private 
	var timesuppcat = 0;
	$(document).on('click', '#show_chat .support_log_p', function() {
		var supp_post = $(this).attr('value');
		if( timesuppcat < Date.now() ){
			$("#idlog"+supp_post).append("<span id='support-"+supp_post+"' class='supw'><h4><i class='fa fa-arrow-down'></i> Выберете причину жалобы:</h4><li class='support_usr_close' value='"+supp_post+"' cat=''><i class='fa fa-close'></i> Закрыть<hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Spam'><i class='fa fa-check'></i> Спам - Распространение рекламной информации в не предназначенных для этого местах. <hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Childporn'><i class='fa fa-check'></i> Детская порнография - Порнографический или эротический контент с участием детей. <hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Extremism'><i class='fa fa-check'></i> Экстремизм - Призывы унижать и применять физическое насилие по отношению к группам одной нации, вероисповедания, расы и так далее; подстрекательство к беспорядкам и террору. <hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Drugs'><i class='fa fa-check'></i> Пропаганда наркотиков - Призывы принимать наркотики, информация о способах их изготовления и приобретения. <hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Insult'><i class='fa fa-check'></i> Оскорбление - Умышленное унижение чести и достоинства личности.<hr></li><li class='support_usr_p' value='"+supp_post+"' cat='Adult'><i class='fa fa-check'></i> Материал для взрослых - Порнографический или эротический контент.<hr></li><li class='support_usr_close' value='"+supp_post+"' cat=''><i class='fa fa-close'></i> Закрыть</li></span>");
			$("#idlog"+supp_post).find(".support_log_p").remove();
			timesuppcat = Date.now() + 5000;
		}
		else {
		}
	});
	
	// support log private category
	var timesupp = 0;
	$(document).on('click', '#show_chat .support_usr_p', function() {
		var supp_post = $(this).attr('value');
		var supp_cat = $(this).attr('cat');
		if( timesupp < Date.now() ){
			$.post('system/support_log_private.php', {supp_post: supp_post, supp_cat: supp_cat}, function(response) {
			});
			$("#idlog"+supp_post).html("Спасибо. Сообщение отправлено для модерации.");
			timesupp = Date.now() + 60000;
			$('#chat_error').html("<span class=\"error\">"+system.support+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
		else {
			$('#chat_error').html("<span class=\"error\">"+system.errsupport+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
	});
	
	
	// support log clear
	$(document).on('click', '#show_chat .support_usr_close', function() {
		var supp_post = $(this).attr('value');
			$("#support-"+supp_post).remove();
	});
	
	// support profile clear
	$(document).on('click', '#profile_panel .support_prof_close', function() {
		var supp_prof = $(this).attr('value');
			$("#idprof"+supp_prof).remove();
	});
	
	
	//ADVERTISIMENT PANEL 
	$(document).on('click', '#chat_panel .adchatpanel, #main_emoticon .emopanel', function() {
			var cat = $(this).attr('value');
			if( cat == 'vip' ){
				$('#chat_cinema').html("<span class=\"cinema\"><div id=\"popupadpanel\"><p id=\"popupadpaneltext\">"+system.infovip+"</p><i title='close' class='fa cinema_close fa-times-circle'></i></div></span>").hide().fadeIn(500);
			}
			else if( cat == 'app' ){
				$('#chat_cinema').html("<span class=\"cinema\"><div id=\"popupadpanel\"><p id=\"popupadpaneltext\">"+system.infoapp+"</p><i title='close' class='fa cinema_close fa-times-circle'></i></div></span>").hide().fadeIn(500);
			}
			else if( cat == 'guest' ){
				$('#chat_cinema').html("<span class=\"cinema\"><div id=\"popupadpanel\"><p id=\"popupadpaneltext\">"+system.infoguest+"</p><i title='close' class='fa cinema_close fa-times-circle'></i></div></span>").hide().fadeIn(500);
			}
			else if( cat == 'donate' ){
				$('#chat_cinema').html("<span class=\"cinema\"><div id=\"popupadpanel\"><p id=\"popupadpaneltext\">"+system.infodonate+"</p><i title='close' class='fa cinema_close fa-times-circle'></i></div></span>").hide().fadeIn(500);
			}
			else {
				}
			var checkMobile = $(window).width();
			if(checkMobile < 1025){
				var marginCheck = parseInt($('#chat_panel').css('right'));
				if(marginCheck >= 1){
					var optionSize = $('#chat_panel').css('width');
					$('#chat_panel').animate({right:"-="+optionSize},200);
					dataControl = "0";
				}
			}
			
	});
	
	// ignored from ignore list
	
	$(document).on('click', '#chat_panel .delete_ignore button', function() {
	
		var delete_ignore = $(this).val();
		
		$.post('system/remove_ignore.php', { delete_ignore: delete_ignore }, function(response) {
			showIgnore();
		});		
		return false;
	});
	
	// profile switcher panel
	
	$("#tools_panel").on('click', '.profile_button', function() {
		var vSection = $(this).attr('value');
		$( ".profile_zone" ).each(function() {
			$(this).hide();
		});
		$( ".profile_button" ).each(function() {
			$(this).removeClass('selected_element');
		});
		$('#'+vSection).show();
		$(this).addClass('selected_element');
	});
	
	
	// upload avatar to server
		$('#myForm').ajaxForm(function(response) {
			if(response == 1){
				$('.panel_error p').text(system.upload1).show();
			}
			else if(response == 2){
				$('.panel_error p').text(system.upload2).show();

			}
			else if(response == 3){
				$('.panel_error p').text(system.upload1).show();

			}
			else if(response == 4){
				$('.panel_error p').text(system.upload3).show();
			}
			else if(response == 6){
				$('.panel_error p').text(system.upload11).show();
			}
			else if(response > 5){
				$('.panel_error p').text(system.upload4+" "+response+' kb').show();

			}
			else if (response == 5){
					reload_avatar();
			}
			else{
				return false;
			}
		});	
		
		// change regions list when changing country in profile panel
		
		$(document).on('change', '#select_country', function() {
			var CountryTarget = $(this).val();
				$.post('system/load_region.php', {country: CountryTarget}, function(response) {	
						if(response != 0){
							$("#select_region").html(response);
						}
						else {
							$("#select_region").html("");
						}
				});
		});
		
		// friend list button action 
		
	// show options section in admin panel
	
	$("#chat_panel").on('click', '.friend_button', function() {
		var viewOptions = $(this).attr('value');
		if(viewOptions == 'pending_friend'){
			$('.friend_span').hide();
			rFriend = 2;
		}
		if(viewOptions == 'active_friend') {
			rFriend = 1;
		}
		$( ".friend_button" ).each(function() {
			$(this).removeClass('selected_element');
		});
		$(this).addClass('selected_element');
		reloadFriends();
	});
	
	$( window ).resize(function() {
		panelMargin();
		adsMargin();
		adjustHeight();
		checkScroll = 0;
		scrollCompare = 0;
		$("#picker_box").hide();
	});
	
});

function openUsermanual(){
	window.open("doc/info.php","_blank","toolbar=no, scrollbars=yes, resizable=no, top=100, left=100, width=800, height=600");
};


	// popup cinema
	$(document).on('click', '#chat_panel .iframe, #show_chat .iframe, #blog_panel .iframe', function() {
		var content = $(this).attr('value');
		
		if ($(document).width() < 600){
			$('#chat_cinema').html("<span class=\"error\">Сейчас здесь появится видео. Приятного просмотра! :-)</span>").hide().fadeIn(300).delay(3000).fadeOut();
			setTimeout(function() {
				$('#chat_cinema').html("<span class=\"cinema\"><iframe src='"+content+"' allow='autoplay' allowfullscreen='' width='300px' height='100%' frameborder='0'></iframe><i title='close' class='fa cinema_close fa-times-circle'></i></span>").hide().fadeIn(3000);
			}, 3000);
		} 
		else {
			
			$('#chat_cinema').html("<span class=\"error\">Сейчас здесь появится видео. Приятного просмотра! :-)</span>").hide().fadeIn(300).delay(3000).fadeOut();
			
			setTimeout(function() {
				$('#chat_cinema').html("<span class=\"cinema\"><iframe src='"+content+"' allow='autoplay' allowfullscreen='' width='300px' height='100%' frameborder='0'></iframe><i title='close' class='fa cinema_close fa-times-circle'></i></span>").hide().fadeIn(3000);
			}, 3000);
			
		}
		
		
		
		
			var checkMobile = $(window).width();
			if(checkMobile < 1025){
				var marginCheck = parseInt($('#chat_panel').css('right'));
				if(marginCheck >= 1){
					var optionSize = $('#chat_panel').css('width');
					$('#chat_panel').animate({right:"-="+optionSize},200);
					dataControl = "0";
				}
			}
	});
	
	
	//popup target description close 
	$(document).on('click', '#targetdescr_close', function() {
		$('.usabout').html('');
		$('#targetdescr').removeClass("usabout");
	});
	

	
	// popup cinema close
	$(document).on('click', '#chat_cinema .cinema_close', function() {
		$("#chat_cinema").html("");
		setTimeout(function() {
				$('#chat_cinema').html("<span class=\"error\">Спасибо за просмотр! :-)</span>").hide().fadeIn(300).delay(3000).fadeOut();
			}, 1000);
	});
	
	// LIKES USER
	var timelikes = 0;
	$(document).on('click', '#profile_panel .user_likes_button, #profile_panel .user_dislikes_button', function(){
		var name = $(this).attr('value');
		var act = $(this).attr('class');
		var count = $(this).attr('count');
		count = Number(count) + 1;
		if( timelikes < Date.now() ){
			$.post('system/likes.php', {name: name, act: act}, function(response) {
				if(response == 1 && act == 'user_likes_button'){
							$("#"+act).html("("+count+")");
							$(".user_dislikes_button").remove();
							$('#chat_error').html("<span class=\"error\">Successfully. Like "+name+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else if(response == 2 && act == 'user_dislikes_button'){
							$("#"+act).html("("+count+")");
							$(".user_likes_button").remove();
							$('#chat_error').html("<span class=\"error\">Successfully. don't like "+name+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else{
					return false;
				}
			});
			timelikes = Date.now() + 1000;
			$('#chat_error').html("<span class=\"error\">Unsuccessfully</span>").hide().fadeIn(300).delay(3000).fadeOut();
		}
			
	});
	
	// likes in blog
	var timepostlikes = 0;
	$(document).on('click', '#blog_container .likespost', function() {
		var id_bpost = $(this).attr('value');
		var cat_bpost = $(this).attr('cat');
		if( timepostlikes < Date.now() ){
			$.post('system/likes_blogpost.php', {id_bpost: id_bpost, cat_bpost: cat_bpost}, function(response) {	
			});
			blogReload();
			timepostlikes = Date.now() + 2000;
		}
	});
	
	// likes in blog search
	var timepostlikessearch = 0;
	$(document).on('click', '#blog_container .likespostserach', function() {
		var id_bpost = $(this).attr('value');
		var cat_bpost = $(this).attr('cat');
		var list_bpost = $(this).attr('list');
		var search_bpost = $(this).attr('search');
		if( timepostlikessearch < Date.now() ){
			if( id_bpost !='' && cat_bpost !='' && list_bpost == '' && search_bpost != ''){
				$.post('system/likes_blogpost.php', {id_bpost: id_bpost, cat_bpost: cat_bpost}, function(response) {	
				});
				$.ajax({
					url: "system/user_blog.php?data="+search_bpost,
					cache: false,
					success: function(response){
						$("#blog_panel .panel_element #blog_container").html(response);
					},
				});
			}
			else if( id_bpost !='' && cat_bpost !='' && list_bpost != '' && search_bpost == ''){
				$.post('system/likes_blogpost.php', {id_bpost: id_bpost, cat_bpost: cat_bpost}, function(response) {	
				});
				$.ajax({
					url: "system/user_blog.php?list="+list_bpost,
					cache: false,
					success: function(response){
						$("#blog_panel .panel_element #blog_container").html(response);
					},
				});
			}
			timepostlikessearch = Date.now() + 2000;
		}
	});
	
	
	// Saved user rooms
	var timesaved = 0;
	$(document).on('click', '.addsaveroom', function() {
		var info_room = $(this).attr('value');
		var cat_sroom = 'save';
		if( timesaved < Date.now() ){
			$.post('system/save_rooms.php', {info_room: info_room, cat_sroom: cat_sroom}, function(response) {	
			});
			welcome_reload();
			timesaved = Date.now() + 2000;
		}
	});
	
	// Dalete user saved rooms
	var timeclear = 0;
	$(document).on('click', '.clearsaveroom', function() {
		var info_room = $(this).attr('value');
		var cat_sroom = 'clear';
		if( timeclear < Date.now() ){
			$.post('system/save_rooms.php', {info_room: info_room, cat_sroom: cat_sroom}, function(response) {	
			});
			welcome_reload();
			timeclear = Date.now() + 2000;
		}
	});
	
	
/*
function random_html_color()
{
    return sprintf( '#%02X%02X%02X', rand(0, 255), rand(0, 255), rand(0, 255) );
}
*/
// voice record

//navigator.mediaDevices.getUserMedia({ audio: true})
/*
var constraints = { audio: true };
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}
if (navigator.mediaDevices.getUserMedia === undefined) {
	navigator.mediaDevices.getUserMedia = function(constraints) {
	var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	if (!getUserMedia) {
		return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
	}
	return new Promise(function(resolve, reject) {
		getUserMedia.call(navigator, constraints, resolve, reject);
	});
	}
}
*/

var firstvoice = '0';
$(document).on('click', '#recvoice', function(){
	if( firstvoice == '0' ){
		furstvoice();
	}
});
function furstvoice()
	{
	navigator.mediaDevices.getUserMedia({ audio: true, video: false })
		.then(stream => {
		$('#chat_error').html("<span class=\"error\">Voice message mode is activated.</span>").hide().fadeIn(300).delay(3000).fadeOut();
		$("#recvoice").addClass("start").hide().fadeIn(500);
			const mediaRecorder = new MediaRecorder(stream);
			this._userMediaInputStream = stream;
			
			$(document).on('click', '.start', function(){
				
				recordtimer();
				stream.getAudioTracks()[0].enabled = true;
				mediaRecorder.start();
				$("#recvoice").html("<i class='fa fa-microphone'></i>");
				$("#recvoice").removeClass("start");
				$("#recvoice").addClass("stop").hide().fadeIn(500);
				$('#content').attr('style', 'display:none');
				$('#send_image').attr('style', 'display:none');
				$('#send_stickers').attr('style', 'display:none');
				$('#emo_item').attr('style', 'display:none');
				$('#inputt_right').attr('style', 'display:none');
				$('#td_group').prepend("<td id='recalert' class='background_box log2'> Запись голосового сообщения.. Нажми на микрофон для отправки. <span id='voicetime'></span> <i class='fa fa-circle-o-notch fa-spin'></i> </td>");
				
			});
			
			let timer;  
			let xtime = 120; 
			function recordtimer(){
				$("#voicetime").html(' До автоотправки осталось '+xtime+' сек');
				xtime--;
					if (xtime<0){
						clearTimeout(timer);
						xtime = 120;
						mediaRecorder.stop();
						stream.getAudioTracks()[0].enabled = false;
						$("#recvoice").html("<i class='fa fa-microphone'></i>");
						$("#recvoice").removeClass("stop");
						$("#recvoice").addClass("start").hide().fadeIn(500);
					}
					else {
						timer = setTimeout(recordtimer, 1000);
					}
					
			}
		
			let audioChunks = [];
			mediaRecorder.addEventListener("dataavailable",function(event) {
				audioChunks.push(event.data);
				
			});

			$(document).on('click', '.stop', function(){
				
				mediaRecorder.stop();
				stream.getAudioTracks()[0].enabled = false;
				$("#recvoice").html("<i class='fa fa-microphone'></i>");
				$("#recvoice").removeClass("stop");
				$("#recvoice").addClass("start").hide().fadeIn(500);
				clearTimeout(timer);
				xtime = 120;
			});
		
			mediaRecorder.addEventListener("stop", function() {
				const audioBlob = new Blob(audioChunks, {
					type: 'audio/wav'
				});
			

				let fd = new FormData();
				fd.append('voice', audioBlob);
				sendVoice(fd);
				audioChunks = [];
			
			});
			firstvoice = 1;
		}).catch(err => $("#recvoice").remove());
	}
	
	
	
	async function sendVoice(form) {

		$('#content').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#send_image').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#send_stickers').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#emo_item').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#inputt_right').attr('style', 'display: table-cell').hide().fadeIn(500);
		$("#recalert").remove();

		var profileTarget = $('#recvoice').attr('value');
		const URL = 'voice.php?target='+profileTarget;
	
		let promise = await fetch(URL, {
			method: 'POST',
			body: form});
		if (promise.ok) {
			let response =  await promise.json();
		}
	}
	
	
	

// show and hide emoticons input
var checkScrollfocus = 0;
var scrollComparefocus = 0;
$('#content').on('focus', function () {

		// scroll bottom on keyboard
		var checkMobile = $(window).width();
		if(checkMobile < 1025){
			checkScrollfocus = $("#show_chat ul")[0].scrollHeight - $("#show_chat ul")[0].clientHeight;
			scrollComparefocus = $('#show_chat ul').scrollTop() + 200;
			if(scrollComparefocus >= checkScrollfocus ){
				setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 500);
			}
		}

	if ($(this).val()) {
		$('#send_image').attr('style', 'display:none');
		$('#send_stickers').attr('style', 'display:none');
		$('#recvoice').attr('style', 'display:none');

		if (!$('#textcount:visible').length){
			$('#td_group').append("<td id='textcount' class='background_box log2'></td>");
		}
		var maxsymbols = $('#content').attr('maxlength');
		var numbtext = maxsymbols - $(this).val().length;
		$("#textcount").html(numbtext);
		
		
		if ($(this).val().length > 25){
			var usertext = $(this).val();
			var usertextresult = usertext.replace(/<[^>]+>/g,'');
			$("#text_input").html(usertextresult);
			$("#text_input").addClass("text_input");
			$("#text_input").scrollTop($("#text_input")[0].scrollHeight);
		} 
		else { 
				$("#text_input").html(''); 
				$("#text_input").removeClass("text_input");
			}

	}
	else {
		$('#send_image').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#send_stickers').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#recvoice').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#textcount').remove();
		$("#text_input").html(''); 
		$("#text_input").removeClass("text_input");
	}
});
$('#content').on('input', function () {
	
	if ($(this).val()) {
		$('#send_image').attr('style', 'display:none');
		$('#send_stickers').attr('style', 'display:none');
		$('#recvoice').attr('style', 'display:none');
		
		
		if (!$('#textcount:visible').length){
			$('#td_group').append("<td id='textcount' class='background_box log2'></td>");
		}
		var maxsymbols = $('#content').attr('maxlength');
		var numbtext = maxsymbols - $(this).val().length;
		$("#textcount").html(numbtext);
		
		
		if ($(this).val().length > 25){
			var usertext = $(this).val();
			var usertextresult = usertext.replace(/<[^>]+>/g,'');
			$("#text_input").html(usertextresult);
			$("#text_input").addClass("text_input");
			$("#text_input").scrollTop($("#text_input")[0].scrollHeight);	
		} 
		else { 
				$("#text_input").html(''); 
				$("#text_input").removeClass("text_input");
			}

	
	}
	else {
		$('#send_image').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#send_stickers').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#recvoice').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#textcount').remove();
		$("#text_input").html(''); 
		$("#text_input").removeClass("text_input");
	}
});
  
$('#main_input').submit(function(event){
		$('#send_image').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#send_stickers').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#recvoice').attr('style', 'display: table-cell').hide().fadeIn(500);
		$('#textcount').remove();
		$("#text_input").html('');
		$("#text_input").removeClass("text_input");
});

	// scroll icon function down
	$(document).on('click', '#scrollinfo', function() {
		$("#show_chat ul").animate({ scrollTop: $('#show_chat ul').prop('scrollHeight') }, 'slow');
	});

	
	// scroll icon function up
	$(document).on('click', '#scrollinfoup', function() {
		$("#show_chat ul").animate({ scrollTop: 0 }, 'slow');
	});
	
	// GBOARD SUBMIT
	$('textarea').keyup(function() {
	  var val = this.value.toLowerCase();
	  if ( val.indexOf('gboard') != -1 ) {
			$('#main_input').submit();
			return
	  }
	});
	

	
	
	
	
	
	
	
	
	

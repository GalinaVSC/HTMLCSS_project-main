$(document).ready(function(){
	
	var UTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	document.cookie = "USTimezone="+UTimeZone+";secure;samesite=strict;max-age=3456000";
	

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
	} else {
		document.querySelector('textarea').addEventListener('keydown', (e) => {
			if (e.shiftKey && e.key === 'Enter') {
				e.preventDefault()
				emoticon($('#content')[0], "\n");
				return
			}
			else if (!e.shiftKey && e.key === 'Enter') {
				e.preventDefault()
				$('#main_input').submit();
				return
			}
		})
	}
	
	// add a friend to friend list on button click
	
	$("#wrap_topic").on('click', '.add_friend_button', function() {
		var target = $(this).attr('value');
			$.post('system/add_friend.php', {friend: target}, function(response) {	
				if(response == 2){
					$('#chat_error').html("<span class=\"error\">"+system.type2+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
				}
				else if(response == 3){
					$('#chat_error').html("<span class=\"error\">"+system.type3+"</span>").hide().fadeIn(300).delay(5000).fadeOut();			
				}
				else if(response == 203){
					$('#chat_error').html("<span class=\"error\">"+system.friend1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else if(response == 204){
					$('#chat_error').html("<span class=\"success\">"+system.friend2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else {
					return false;
				}
			});
	});
	
	$("#private_panel").on('click', '.add_friend_button', function() {
		var target = $(this).attr('value');
			$.post('system/add_friend.php', {friend: target}, function(response) {	
				if(response == 2){
					$('#chat_error').html("<span class=\"error\">"+system.type2+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
				}
				else if(response == 3){
					$('#chat_error').html("<span class=\"error\">"+system.type3+"</span>").hide().fadeIn(300).delay(5000).fadeOut();			
				}
				else if(response == 203){
					$('#chat_error').html("<span class=\"error\">"+system.friend1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else if(response == 204){
					$('#chat_error').html("<span class=\"success\">"+system.friend2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
				}
				else {
					return false;
				}
			});
	});
	
	
	// the user ignore private panel
	var updsubmitignore = 0;
	$(document).on('click', '#wrap_topic .user_ignore_button, #profile_panel .user_ignore_button', function(){
		if( updsubmitignore < Date.now() ){
			var optionTarget = $(this).attr('value');
			var optionEffect = "get_ignore";
			
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
						if(response == 106){
							$('.option_list').slideUp(100);
							$('#chat_error').html("<span class=\"success\">"+system.ing3+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						}
					},
				});	
			updsubmitignore = Date.now() + 10000;
		}
	});
	
	
	// open user options in user list
	
	$('#chat_panel').on('click', '.panel_element .users_option .open_user', function() {
		if($(this).next('.option_list').css('display') == 'none'){
				$('.option_list').slideUp(100);
				$(this).next().slideDown(100);
		}
		else {
			$(this).next('.option_list').slideUp(100);
		}
	});


	// paste link of image when clicking on scisor icon 
	
	$("#image_panel").on('click', '.copy_link', function(){
		var commandInput = $(this).attr('value');
		emoticon($('#content')[0], commandInput + " ");
		var optionSize = $('#image_panel').css('width');
		$('#image_panel').animate({right:"-="+optionSize},400);
	});
	

	// 2025 Paste 'user' in main input when username is clicked in main chat window
	$('#container_show_chat').on('click', '#show_chat .username', function() {
		var text = $(this).text().replace(/\s+/g, '');
		$(this).animate({opacity: 0.1}, 0).animate({opacity: 1}, 1000);
		if(text != ''){
			if ($('.contentimages:visible').length == 0){
				emoticon($('#content')[0], text + ' ');
			}
			else {
				emoticon($('.contentimages')[0], text + ' ');
			}
		} 
		else {
			if ($('.contentimages:visible').length == 0){
				var text = $(this).find('img').attr("alt").replace(/\s+/g, '');
				emoticon($('#content')[0], text + ' ');
			}
			else {
				var text = $(this).find('img').attr("alt").replace(/\s+/g, '');
				emoticon($('.contentimages')[0], text + ' ');
			}
		}
	});
	

	

	
	// Paste 'hashtag' in main input when hashtag is clicked in main chat window
	
	$(document).on('click', '#show_chat .hashtag, #room_topic .hashtag', function(){
		var text = $(this).text().replace(/\s/g, '');
		emoticon($('#content')[0], text + ' ');
	});
	
	// Marry
	
	$('#container_show_chat').on('click', '#show_chat .getmarry', function() {
		emoticon($('#content')[0], $(this).text() + '');
		$('#content').focus();
	});


	// Paste 'bottle' in main input when pole is clicked in main chat window
	
	$(document).on('click', '#show_chat .nextspin', function(){
		$('#content').val('').focus();
		emoticon($('#content')[0],'/spin');
		$('#main_input').submit();

	});
	
	// 2025 Paste 'option vote' in main input when pole is clicked in main chat window
	
	$(document).on('click', '#chat_panel .vote', function(){
		var text = $(this).attr('value');
		$('#content').val('');
		emoticon($('#content')[0],'/vote ' + text + ' ');
		$('#main_input').submit();
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
	
	
	// 2025 Paste 'comment poll' in main input when pole is clicked in main chat window
	
	$(document).on('click', '#chat_panel .comment_poll', function(){
		var text = $(this).attr('value');
		$('#content').val('');
		emoticon($('#content')[0],'/pollcomment id-' + text + ' ');
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

	// 2025 Paste 'sticker' in main input when sticker is clicked in main chat window
	var updsubmit = 0;
	$(document).on('click', '#stickers_panel .stickerid', function(){
		if( updsubmit < Date.now() ){
			var commandInput = $(this).attr('value');
			var commandPaste = commandInput;
			var optionSize = $('#main_option').css('width');
			$('#content').val('').val(commandPaste+' ');
			$('#main_input').submit();
						var checkMobile = $(window).width();
						if(checkMobile < 1025){
							var marginCheck = parseInt($('#stickers_panel').css('right'));
							if(marginCheck >= 1){
								var optionSize = $('#stickers_panel').css('width');
								$('#stickers_panel').animate({right:"-="+optionSize},200);
							}
						}
			updsubmit = Date.now() + 2500;
		}
	});
	
	
	// 2025 Paste 'delete present' in main input when sticker is clicked in main chat window
	var updtrashpresent = 0;
	$(document).on('click', '.trashpresent', function(){
		if( updtrashpresent < Date.now() ){
			var commandInput = $(this).attr('value');
			var commandPaste = commandInput;
			var optionSize = $('#main_option').css('width');
			emoticon($('#content')[0], '/deletepresent '+commandPaste+' (Внимание! Удаление подарка -1 баланс)');
			//$('#main_input').submit();
			var marginCheck = parseInt($('#profile_panel').css('right'));
				if(marginCheck >= 1){
					var optionSize = $('#profile_panel').css('width');
					$('#profile_panel').animate({right:"-="+optionSize},200);
				}
			updtrashpresent = Date.now() + 2500;
		}
	});
	
	
	// 2025 Paste 'premium sticker' in main input when sticker is clicked in main chat window
	var updsubmit = 0;
	$(document).on('click', '#premium_stickers_panel .stickerid', function(){
		if( updsubmit < Date.now() ){
			var commandInput = $(this).attr('value');
			var commandPaste = commandInput;
			var optionSize = $('#main_option').css('width');
			emoticon($('#content')[0], "/present"+' '+commandPaste+ ' ');
			
						var checkMobile = $(window).width();
						if(checkMobile < 1025){
							var marginCheck = parseInt($('#premium_stickers_panel').css('right'));
							if(marginCheck >= 1){
								var optionSize = $('#premium_stickers_panel').css('width');
								$('#premium_stickers_panel').animate({right:"-="+optionSize},200);
							}
						}
						
						var checkMobile = $(window).width();
						if(checkMobile < 1025){
							var marginCheck = parseInt($('#profile_panel').css('right'));
							if(marginCheck >= 1){
								var optionSize = $('#profile_panel').css('width');
								$('#profile_panel').animate({right:"-="+optionSize},200);
								$("#profile_panel .panel_element").html("");
							}
						}
						
						
			updsubmit = Date.now() + 2500;
		}
	});
	
	
	// Paste 'mood emoji' in main input when emoji is clicked in main chat window
	
	$(document).on('click', '#moods', function(){
		var idemoji = $(this).attr('value');
		$('#content').val('').val('/mood '+idemoji+' ');
		$('#main_input').submit();
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#tools_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#tools_panel').css('width');
							$('#tools_panel').animate({right:"-="+optionSize},200);
						}
					}
	});
	
	
	// 2025 Paste 'USER INTERESTS' in main input when sticker is clicked in main chat window
	var updsubmitui = 0;
	$(document).on('click', '#user_interests .uir', function(){
		if( updsubmitui < Date.now() ){
			var commandInput = $(this).attr('value');
			var commandPaste = commandInput;
			var optionSize = $('#main_option').css('width');
			$('#content').val('').val('/mynewinterest'+' '+commandPaste+' ');
			$('#main_input').submit();
						
			dataControl = "7";
			welcome_reload();
			
			 setTimeout(function() {$("#chat_panel").scrollTop("0"); }, 2000);

			updsubmitui = Date.now() + 2500;
		}
	});
	
	
	// 2025 Remove the device from the suggested list
	
	$(document).on('click', '#my_devices', function(){
		var iddevices = $(this).attr('value');
		$('#content').val('').val('/my_devices '+iddevices+' ');
		$('#main_input').submit();
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#tools_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#tools_panel').css('width');
							$('#tools_panel').animate({right:"-="+optionSize},200);
						}
					}
	});
	
	// Clear video avatar
	
	$(document).on('click', '#clear_videoavatar', function(){
		$('#content').val('').val('/vaclear');
		$('#main_input').submit();
		reload_avatar();
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#tools_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#tools_panel').css('width');
							$('#tools_panel').animate({right:"-="+optionSize},200);
						}
					}
	});
	
	// 2025 Paste 'photo' in main input when photo is clicked in main chat window
	
	$(document).on('click', '#image_panel .shareoneimage', function(){
		var commandInput = $(this).attr('value');
		var commandPaste = commandInput;
		var hname = location.hostname;
		var optionSize = $('#main_option').css('width');
		$('#content').val('').val('https://'+ hname +'/upload/full_'+commandPaste);
		$('#main_input').submit();
		
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#image_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#image_panel').css('width');
							$('#image_panel').animate({right:"-="+optionSize},200);
							$("#image_container").html("");
						}
					}
	});
	
	
	// 2025 Download VIP PRIVATE BACK
	
	$(document).on('click', '#image_panel .vpb', function(){
		var commandUserName = $(this).attr('name');
		var commandInput = $(this).attr('value');
		var commandPaste = commandInput;
		var hname = location.hostname;
		var optionSize = $('#main_option').css('width');
		$('#content').val('').val('/vipprivateback '+ commandUserName +' https://'+ hname +'/upload/full_'+commandPaste);
		$('#main_input').submit();
		
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#image_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#image_panel').css('width');
							$('#image_panel').animate({right:"-="+optionSize},200);
							$("#image_container").html("");
						}
					}
	});
	
	
	// 2025 Download VIP ROOM BACK
	
	$(document).on('click', '#image_panel .vrb', function(){
		var commandRoomName = $(this).attr('rname');
		var commandInput = $(this).attr('value');
		var commandPaste = commandInput;
		var hname = location.hostname;
		var optionSize = $('#main_option').css('width');
		$('#content').val('').val('/viproomback '+ commandRoomName +' https://'+ hname +'/upload/full_'+commandPaste);
		$('#main_input').submit();
		
					var checkMobile = $(window).width();
					if(checkMobile < 1025){
						var marginCheck = parseInt($('#image_panel').css('right'));
						if(marginCheck >= 1){
							var optionSize = $('#image_panel').css('width');
							$('#image_panel').animate({right:"-="+optionSize},200);
							$("#image_container").html("");
						}
					}
	});
	
	
	// 2025 Paste 'cite' in main input when citate is clicked in main chat window
	$('#container_show_chat').on('dblclick', '#show_chat .cite', function() {
		$('#content').val('');
		var target = $(this).attr('value').replace(/\s/g, ''); 
		$(this).animate({opacity: 0.1}, 0).animate({opacity: 1}, 1000);
		var text = $(this).text();
		let str = text;
		let arr = str.split(']');
		let lastElem = arr[arr.length - 1];
		emoticon($('#content')[0], "reply: [ "+target+" - "+lastElem+" ] ");
	});
	
	
	// Clear the input field by double-clicking on the field
	$('#content').on('dblclick', function() {
		if ($(document).width() < 600){	 
			$('#content').val('').focus();		
		}
	});
	

	// 2025 Paste reply to input box when reply is clicked
	
	$('#container_show_chat').on('click', '#show_chat .private_reply', function() {
			var private_target = $(this).attr('value');
			$('#content').val('');
			emoticon($('#content')[0], "/msg"+' '+private_target + ' ');
	});
	
	// 2025 paste command to main input
	
	$(document).on('click', '#help_panel .wrap_command', function(){
		$('#content').val('');
		var commandInput = $(this).attr('value');
		var commandPaste = commandInput;
		var optionSize = $('#main_option').css('width');
		$('#help_panel').animate({right:"-="+optionSize},400);
		emoticon($('#content')[0], commandPaste+' ');
		
	});

	
// USER Load Stickers 
			$("#stickers_panel").on('click', '#getsticker', function() {
				var getstickers = $(this).attr('value');
				$.ajax({  
					url: "system/stickers.php?pack="+ getstickers,  
					cache: false,  
					success: function(html){  
					$("#stickers_load").html(html);  
					}					
				});  
				setTimeout(function() { $("#stickers_panel").scrollTop($("#stickers_panel")[0].scrollHeight); }, 1000);
			});  


// USER Load Premium Stickers 
			$("#premium_stickers_panel").on('click', '#getsticker', function() {
				var getstickers = $(this).attr('value');
				$.ajax({  
					url: "system/premium_stickers.php?pack="+ getstickers,  
					cache: false,  
					success: function(html){  
					$("#premium_stickers_load").html(html);  
					}					
				});  
				setTimeout(function() { $("#premium_stickers_panel").scrollTop($("#premium_stickers_panel")[0].scrollHeight); }, 1000);
			}); 
	
// USER Load Tet-a-Tet 
			var updtet = 0;
			$('#btntet').click(function(){
				if( updtet < Date.now() ){
					$.ajax({  
						url: 'system/tet-a-tet.php',  
						cache: false,  
						success: function(html){  
						$("#tetatet_load").html(html);  
						}  
					});
				updtet = Date.now() + 5000;
				}
			});

// USER Load Tet-a-Tet 
			$('#btnsmiles').click(function(){  
				$.ajax({  
					url: 'system/smiles.php',  
					cache: false,  
					success: function(html){  
					$("#smiles_load").html(html);  
					}  
				});  
			});  
			
			
// USER Load STICKERS
			var updstick = 0;
			$('#send_stickers, #stickers_load').click(function(){
			if( updstick < Date.now() ){
					setTimeout(function() {
										$.ajax({  
											url: 'system/open_stickers.php',  
											cache: false,  
											success: function(html){  
											$("#open_stickers_load").html(html);  
											}  
										}); 
										updstick = Date.now() + 60000;
					}, 1000);
				}
			});  

			
// USER Load PREMIUM STICKERS
			var updstickprem = 0;
			$(document).on('click', '#premium_send_stickers, #premium_stickers_load', function(){
			if( updstickprem < Date.now() ){
					setTimeout(function() {
										$.ajax({  
											url: '../system/premium_open_stickers.php',  
											cache: false,  
											success: function(html){  
											$("#premium_open_stickers_load").html(html);  
											}  
										});									
										updstickprem = Date.now() + 60000;
					}, 5000);
					
				}
			});  
			

	// Send a global message or a private message in the main chat window
	var waitReply = 0;
	var lastMessage = '';
	var lastMessageDate = 0;
	var newMessageDate = 0;
	
	$('#main_input').submit(function(event){
		var message = $('#content').val();
		var bold = $('#bold_item').attr('value');
		var italic = $('#italic_item').attr('value');
		var underline = $('#underline_item').attr('value');
		var high = $('#high_pick').css('backgroundColor');
		var color = $('#text_pick').css('backgroundColor');
		var chatTarget = $('#this_target').attr('value');
		var chatType = $('#main_chat_type').attr('value');
		var postTarget = '1';
		var newMessageDate = Date.now();
		
		message = message.trim();
		
		if(chatType == '1'){
			postTarget = 'chat_process';
		}
		else if(chatType == '2'){
			postTarget = 'private_process';
		}
		else {
			event.preventDefault();
			return false;
		}
		
		if(emOn != 1){
			high = 'transparent';
			color = 'transparent';
			bold = '0';
			italic = '0';
			underline = '0';
		}
		if(message == ''){
			message = '';
		}
		else if (/^\s+$/.test($('#content').val())){
			message = '';
			$('#content').val('').focus();
		}
		else{
			
			if(waitReply == 0 && lastMessageDate < Date.now() - 2000 && message != ''){
				
				waitReply = 1;
				
				$('#content').focus();
				
				$.post('system/'+ postTarget +'.php', {content: message, bold: bold, italic: italic, underline: underline, high: high, color: color, target:chatTarget, lm:lastMessage, ldm:lastMessageDate, ndm:newMessageDate}, function(response) {
					if (response == 1){
						$('#chat_error').html("<span class=\"error\">"+ system.type1 +"</span>").hide().fadeIn(100).delay(5000).fadeOut();
						$('#content').val('').focus();
						waitReply = 0;	
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 2){
						$('#chat_error').html("<span class=\"error\">"+system.type2+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
					$('#content').val('').blur();
					waitReply = 0;
					chat_reload();
					checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 3){
						$('#chat_error').html("<span class=\"error\">"+system.type3+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 4){
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 5){
						$('#chat_error').html("<span class=\"error\">"+system.type4+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 6){
						$('#chat_error').html("<span class=\"error\">"+system.type5+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 7){
						$('#chat_error').html("<span class=\"success\">"+system.type6+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 8){
						$('#chat_error').html("<span class=\"error\">"+system.type7+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 9){
						$('#chat_error').html("<span class=\"error\">"+system.type8+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 10){
						$('#chat_error').html("<span class=\"error\">"+system.type9+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 11){
						$('#content').val('').blur();
						adjustTopic();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 12){
						$('#chat_error').html("<span class=\"error\">"+system.type10+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 13){
						$('#chat_error').html("<span class=\"error\">"+system.type11+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 14){
						$('#chat_error').html("<span class=\"error\">"+system.type12+"</span>").hide().fadeIn(300).delay(5000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 15){
						$('#chat_error').html("<span class=\"success\">"+system.type13+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 16){
						$('#chat_error').html("<span class=\"error\">"+system.type14+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}		
					else if (response == 17){
						$('#chat_error').html("<span class=\"error\">"+system.type17+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 18){
						$('#chat_error').html("<span class=\"success\">"+system.type18+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 19){
						$('#chat_error').html("<span class=\"error\">"+system.type19+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 20){
						$('#chat_error').html("<span class=\"success\">"+system.type20+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 21){
						$('#chat_error').html("<span class=\"error\">"+system.type21+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 22){
						$('#chat_error').html("<span class=\"error\">"+system.type22+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 23){
						$('#chat_error').html("<span class=\"success\">"+system.type23+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 24){
						$('#chat_error').html("<span class=\"success\">"+system.type24+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 25){
						$('#chat_error').html("<span class=\"error\">"+system.type25+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 26){
						$('#chat_error').html("<span class=\"error\">"+system.type26+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 27){
						$('#chat_error').html("<span class=\"error\">"+system.type27+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 28){
						$('#chat_error').html("<span class=\"success\">"+system.type28+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 29){
						$('#chat_error').html("<span class=\"success\">"+system.type29+"</span>").hide().fadeIn(300).delay(10000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 30){
						$('#chat_error').html("<span class=\"success\">"+system.type30+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 31){
						$('#chat_error').html("<span class=\"success\">"+system.type31+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 32){
						$('#chat_error').html("<span class=\"success\">"+system.type32+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 33){
						$('#chat_error').html("<span class=\"success\">"+system.type33+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 34){
						$('#chat_error').html("<span class=\"success\">"+system.type34+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 35){
						$('#chat_error').html("<span class=\"success\">"+system.type35+"</span>").hide().fadeIn(300).delay(3000).fadeOut(); setTimeout("document.location.reload(true)",4000);
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 36){
						$('#chat_error').html("<span class=\"success\">"+system.type36+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 38){
						$('#chat_error').html("<span class=\"success\">"+system.type38+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 40){
						$('#chat_error').html("<span class=\"success\">"+system.type40+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 41){
						$('#chat_error').html("<span class=\"success\">"+system.type41+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 42){
						$('#chat_error').html("<span class=\"success\">"+system.type42+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 43){
						$('#chat_error').html("<span class=\"success\">"+system.type43+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 44){
						$('#chat_error').html("<span class=\"success\">"+system.type44+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 45){
						$('#chat_error').html("<span class=\"success\">"+system.type45+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 46){
						$('#chat_error').html("<span class=\"success\">"+system.type46+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 47){
						$('#chat_error').html("<span class=\"success\">"+system.type47+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 48){
						$('#chat_error').html("<span class=\"success\">"+system.type48+"</span>").hide().fadeIn(300).delay(10000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 49){
						$('#chat_error').html("<span class=\"success\">"+system.type49+"</span>").hide().fadeIn(300).delay(10000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 50){
						$('#chat_error').html("<span class=\"success\">"+system.type50+"</span>").hide().fadeIn(300).delay(3000).fadeOut(); 
						$('#content').val('').blur();
						setTimeout("document.location.reload(true)",5000);
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 51){
						$('#chat_error').html("<span class=\"error\">"+system.type51+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 52){
						$('#chat_error').html("<span class=\"error\">"+system.type52+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 53){
						$('#chat_error').html("<span class=\"error\">"+system.type53+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 54){
						$('#chat_error').html("<span class=\"error\">"+system.type54+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 55){
						$('#chat_error').html("<span class=\"error\">"+system.type55+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 56){
						$('#chat_error').html("<span class=\"error\">"+system.type56+"</span>").hide().fadeIn(300).delay(20000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 99){
						openUsermanual();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 200){
						$('#chat_error').html("<span class=\"error\">"+system.ing1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 201){
						$('#chat_error').html("<span class=\"success\">"+system.ing2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 202){
						$('#chat_error').html("<span class=\"error\">"+system.type15+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 203){
						$('#chat_error').html("<span class=\"error\">"+system.friend1+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 204){
						$('#chat_error').html("<span class=\"success\">"+system.friend2+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if (response == 404){
						$('#chat_error').html("<span class=\"error\">"+system.errorOccur+"</span>").hide().fadeIn(300).delay(3000).fadeOut();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if(response == 999){
						location.reload();
						$('#content').val('').blur();
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					else if(response == 1111){
						$('#name').val('');
						$('#content').val('').focus();
						rlc = 1;
						waitReply = 0;
						chat_reload();
						checkScroll = 0;
						setTimeout(function() { $("#show_chat ul").scrollTop($("#show_chat ul")[0].scrollHeight); }, 350);
					}
					lastMessage = message;
					lastMessageDate = Date.now();
					
				});
			}
			if(lastMessageDate < Date.now() - 10000 && waitReply == 1){
				waitReply = 0;
				lastMessageDate = Date.now();
			}
		}
		return false;
	});
});


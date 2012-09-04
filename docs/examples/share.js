seajs.config({
	alias: {
		'jquery': '../../js/lib/jquery.js'
	}
});
seajs.use('jquery', function() {

	$(function(){

		$('#more_btn').bind("click", function(){
			if (!$(this).hasClass("song_less")) {
				$(this).html('- 更少').addClass("song_less");
				$('.share_btns').hide();
				$('#full_share').show();							
			} else {
				$(this).html('+ 更多').removeClass("song_less");
				$('#full_share').hide();
				$('.share_btns').show();
			}
		});

		var copy_clip =function(maintext){
			if(window.clipboardData && window.clipboardData.setData("Text", maintext)){
				alert("复制成功！ 按Ctrl+V 粘贴");return;
			}
			alert("按Ctrl+C复制链接地址，按Ctrl +V粘贴到聊天窗口发送给好友");
		};
		
		$('#shareurl').click(function(){$(this)[0].select();copy_clip($(this).val());});

	});

});

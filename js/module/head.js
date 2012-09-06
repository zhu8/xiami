
define(function(require, exports, module) {
//var $ = require('jquery');
$(function(){
    // 最近播放
    $("#recent_button").click(function(e){
        e.preventDefault();
        $('#recent_history').toggleClass('hidden');
        $(this).toggleClass("unfold").blur();
        $('#notifications').addClass('hidden');
        $('#notify_button').removeClass('unfold').blur();
        var $wrap = $('#recent_history').find('.recent_inner');
        if($.trim($wrap.html())==''){
            $wrap.addClass('loading');
            $.get('/ajax/recent',{},function(data){$wrap.html(data).removeClass('loading');});
        }
        e.preventDefault();
        return false;
    });
    
    // 通知菜单
    $("#notify_button").click(function(e){
        e.preventDefault();
        $('#notifications').toggleClass('hidden');
        $("#notify_button, #recent_button").toggleClass("unfold").blur();
        $('#recent_history').addClass('hidden');
        $('#recent_button').removeClass('unfold').blur();
        e.preventDefault();
        return false;
    });

    /* 用户下拉菜单 */
    $('#xUser_info .uico_more').hover(function(){
        var showUNav = function(){
            $('#xUser_info .uico_more').addClass('clickon');
            $('#xUser_info .more_drop').removeClass('hidden');
        };
        $(this).addClass('hoveron');
        this.Timer = setTimeout(showUNav,300)
    },function(){
        clearTimeout(this.Timer);
    }).click(function(){
        clearTimeout(this.Timer);
        $(this).addClass('clickon');
        $('#xUser_info .more_drop').removeClass('hidden');
    });

    $('#xUser_info').mouseleave(function(){
        $('#xUser_info .uico_more').removeClass('hoveron').removeClass('clickon');
        $('#xUser_info .more_drop').addClass('hidden');
    });
    /* 导航下拉菜单 */
    $('.nh_sys_menu').hover(function(){
        var OpenState = $(this).find('.nhsys_menu').css('display') != 'block';
        var self = this;
            this.Timer = null;
        var showMenu = function(){
            console.log('已经触发时针');
            $(self).addClass('nh_selected').siblings('li').removeClass('nh_selected');
            $(self).find('.nhsys_menu').css('display','block')
            .end().siblings('li').find('.nhsys_menu').css('display','none');
        }
        if(OpenState){self.Timer = setTimeout(showMenu,1000);}
        $(self).find('.show_nhsysMenu').click(function(){
            clearTimeout(self.Timer);
        });
    },function(){
        clearTimeout(this.Timer);
    });
    
    $('.show_nhsysMenu').click(function(){
        if(!($(this).parent().next().css('display')=='block')){
            $('.nhsys_menu:visible').hide();
            $('.nh_sys_menu').removeClass('nh_selected');
            $(this).parent().next().slideDown('fast');
            if($(this).hasClass('show_nhsysMenu')){
                $(this).parent().parent().addClass('nh_selected');
            }else{
                $(this).parent().parent().addClass('selected');
            }
            return false;
        }else{
            $('.nhsys_menu:visible').hide();
            $('.nh_sys_menu').removeClass('nh_selected');
            return false;
        }
    });
    
    $(document).click(function(e){
        $('.nhsys_menu:visible').hide();
        $('.nh_sys_menu').removeClass('nh_selected');
        $('#recent_history, #notifications').addClass('hidden');
        $("#recent_button, #notify_button").removeClass('unfold');
    });
    
});

});
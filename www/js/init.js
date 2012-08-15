seajs.config({
  alias: {
    'jquery': '../www/js/lib/jquery.js'
  },
  preload: ["jquery"]
});
// 将 jQuery 暴露到全局
// seajs.modify('jquery', function(require, exports) {
//   window.jQuery = window.$ = exports
// })

seajs.use('../www/js/module/head',function(){
    $(function(){
        console.log('oops, 全站替换使用有点难度。。。考虑。。。ing。。。:D');
    });
});
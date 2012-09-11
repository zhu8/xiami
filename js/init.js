seajs.config({
  alias: {
    'jquery': '../../js/lib/jquery.js'
  },
  preload: ["jquery"]
});
// 将 jQuery 暴露到全局
// seajs.modify('jquery', function(require, exports) {
//   window.jQuery = window.$ = exports
// })

seajs.use('../../js/module/head',function(){
    console.log('oops');
});
var mount = require('koa-mount');

/* istanbul ignore if  */
if(process.env.NODE_ENV !== 'test'){
  require('./lib/logger.js');
}

(function(){
  var app = require('./');
  //app.use(mount('/Koanect', require('../Koanect')));

  module.exports = app.listen(3000);
})();

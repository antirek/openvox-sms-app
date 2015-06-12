var osms = require('openvox-sms');

var sms = new osms({
  host: 'localhost', 
  port: 5038, 
  username: 'admin',
  secret: 'superadmin'
});

sms.on('connect', function () {
  sms.sendSMS({span: 1, number: '89135292926', text: 'hello'}, function (err, response) {
    console.log('Done!');
    sms.close(function(){
      console.log('close');
    });
  });
});
//

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 2 },
    button: {driver: 'button', pin: 3}
  },

  work: function(my){
      my.button.on('push', function () {
          console.log('Button Pushed')
          my.led.toggle();
      })
  }
}).start();
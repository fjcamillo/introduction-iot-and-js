//Demo One
//Materials
//LED and wires only

var Cylon = require("cylon");
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM2' }
  },

  devices: {
    led: { driver: 'led', pin: 2 }
  },

  work: function(my) {
    every((5).second(), function() {
      my.led.toggle();
    });
  }
}).start();

Cylon.api(
    'mqtt',
    {
    broker: 'mqtt://test.mosquitto.org',
    prefix: 'cybot', // Optional
  });
  
  Cylon.start();
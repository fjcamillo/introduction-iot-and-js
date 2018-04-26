//Demo One
//Materials
//LED and wires only

var Cylon = require("cylon");
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
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
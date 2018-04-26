var Cylon = require("cylon");

// Initialize the robot
Cylon.robot({
  // Change the port to the correct port for your Arduino.
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 13 },
    button: {driver: 'button', pin: 7}
  },

  work: function(my){
      my.button.on('push', function () {
          console.log('Button Pushed')
          my.led.toggle();
      })
  }
}).start();
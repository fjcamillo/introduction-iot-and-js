var Cylon = require('cylon');
Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },
  devices: {
    servo: { driver: 'servo', pin: 10 }
  },
  work: function(my) {
    var angle = 45 ;
    my.servo.angle(angle);
    every((1).second(), function() {
      angle = angle + 5 ;
      if (angle > 135) {
        angle = 45
      }
      my.servo.angle(angle);
      console.log('Current Servo Angle', angle)
    });
  }
}).start();


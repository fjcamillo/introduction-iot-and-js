var Cylon = require('cylon')

Cylon.robot({
    connections : {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/ttyACM0'
        }
    },
    devices: {
        lcd: {
            driver: 'lcd'
        }
    },
    work: function(my) {
        my.lcd.on('start', function(){
            my.lcd.print('Hello World');
        })
    }
}).start();
var Cylon = require('cylon')

Cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/ttyACM1'
        }
    },
    devices: {
        sensor: {
            driver: 'analog-sensor',
            pin: 3,
            lowerlimit: 100,
            upperlimit: 900
        }
    },
    work: function(my){

        var analogValue = 0

        every((1).second(), function(){
            analogValue = my.sensor.analogRead();
            console.log('READING TEMP SENSOR', analogValue);
        })
    }
}).start()
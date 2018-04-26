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
        },
        led: {
            driver: 'led',
            pin: 13
        }
    },
    work: function(my){

        let analogValue = 0
        let resistance = 100000
        let thermistor = 4275


        every((1).second(), function(){
            analogValue = my.sensor.analogRead();
            let R = 1023.0/analogValue-1
            R = R*resistance
            analogValue = 1.0/(Math.log(R/resistance)/thermistor+1/298.15)-273.15

            console.log('READING TEMP SENSOR', analogValue);

            if (analogValue>= 80) my.led.toggle()
        })
    }
}).start()
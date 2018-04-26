var Cylon = require('cylon')

Cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/ttyACM1'
        }
    },
    devices: {
        tempsensor: {
            driver: 'analog-sensor',
            pin: 3,
            lowerlimit: 100,
            upperlimit: 900
        },
        lightsensor: {
            driver: 'analog-sensor',
            pin: 2,
            lowerlimit: 100,
            upperlimit: 900
        }
    },
    work: function(my){

        let analogValue = 0
        let resistance = 100000
        let thermistor = 4275
        let lightSense = 0


        every((1).second(), function(){
            analogValue = my.tempsensor.analogRead();
            let R = 1023.0/analogValue-1
            R = R*resistance
            analogValue = 1.0/(Math.log(R/resistance)/thermistor+1/298.15)-273.15

            console.log('READING TEMP SENSOR', analogValue)

            lightSense = my.lightsensor.analogRead()
            console.log('READING LIGHT SENSOR', lightSense)
        })
    }
}).start()
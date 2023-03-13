function Motor1_Stop () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function Forward () {
    Motor1_Forward()
    Motor2_Forward()
}
function Coast () {
    Motor1_Coast()
    Motor2_Coast()
}
function TurnLeft () {
    Motor1_Backwards()
    Motor2_Forward()
}
function Motor2_Coast () {
    pins.analogWritePin(AnalogPin.P8, speed)
    pins.analogWritePin(AnalogPin.P2, speed)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        dice = randint(1, 4)
        if (dice == 1) {
            Forward()
        }
        if (dice == 2) {
            Backward()
        }
        if (dice == 3) {
            TurnRight()
        }
        if (dice == 4) {
            TurnLeft()
        }
        basic.pause(2000)
    }
    Stop()
})
function Motor1_Coast () {
    pins.analogWritePin(AnalogPin.P0, speed)
    pins.analogWritePin(AnalogPin.P1, speed)
}
function Motor2_Stop () {
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function Motor2_Forward () {
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P2, speed)
}
function Motor1_Forward () {
    pins.analogWritePin(AnalogPin.P0, speed)
    pins.analogWritePin(AnalogPin.P1, 0)
}
input.onButtonPressed(Button.AB, function () {
    Stop()
})
input.onButtonPressed(Button.B, function () {
	
})
function Motor2_Backwards () {
    pins.analogWritePin(AnalogPin.P8, speed)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function TurnRight () {
    Motor1_Forward()
    Motor2_Backwards()
}
function Stop () {
    Motor1_Stop()
    Motor2_Stop()
}
function Motor1_Backwards () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, speed)
}
function Backward () {
    Motor1_Backwards()
    Motor2_Backwards()
}
let dice = 0
let speed = 0
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    . # # # .
    . # . # .
    `)
speed = 1023
basic.forever(function () {
	
})

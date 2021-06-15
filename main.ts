input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
let counter = 0
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OLED12864_I2C.init(60)
OLED12864_I2C.on()
OLED12864_I2C.zoom(false)
basic.forever(function () {
    counter += 1
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        basic.pause(100)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        basic.pause(100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(100)
    }
    OLED12864_I2C.showString(
    0,
    0,
    "R:",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    0,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "L:",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    1,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "dis:",
    1
    )
    OLED12864_I2C.showNumber(
    5,
    3,
    OrientBit.getwheelDist(OrientBit.wheelSide.left),
    1
    )
    OLED12864_I2C.showString(
    0,
    4,
    "Time in ms:",
    1
    )
    OLED12864_I2C.showNumber(
    0,
    5,
    counter,
    1
    )
})

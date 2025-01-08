input.onButtonPressed(Button.A, function () {
    let lightMax = 0
    let lightMin = 0
    lightLevel = input.lightLevel()
    if (lightLevel < lightMin) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (lightLevel > lightMax) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # # #
            # # # # .
            # . # . #
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.showNumber(lightLevel)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(lightLevel)
    basic.showNumber(moisture)
    if (temperature >= 15 && temperature <= 20 && (lightLevel >= 60 && lightLevel <= 100 && (moisture >= 10 && moisture <= 20))) {
        basic.showString("" + (plantType[0]))
    } else if (temperature >= 20 && temperature <= 30 && (lightLevel >= 40 && lightLevel <= 100 && (moisture >= 30 && moisture <= 40))) {
        basic.showString("" + (plantType[1]))
    } else {
        basic.showString("X")
    }
})
input.onButtonPressed(Button.B, function () {
    let humidityMax = 0
    let humidityMin = 0
    moisture = pins.analogReadPin(AnalogPin.P0)
    if (moisture < humidityMin * 10) {
        basic.showLeds(`
            . # # # .
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (moisture > humidityMax * 10) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showNumber(moisture)
        basic.showIcon(IconNames.Yes)
    }
})
let temperature = 0
let lightLevel = 0
let moisture = 0
let plantType: string[] = []
let rose_optimum = 0
plantType = ["cactus", "rose"]
moisture = 0
lightLevel = 0
basic.forever(function () {
    temperature = input.temperature()
    if (temperature < 15) {
        basic.showIcon(IconNames.Chessboard)
    } else if (temperature > 20) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(5000)
})

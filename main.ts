radio.onReceivedNumber(function (receivedNumber) {
    radio_number = receivedNumber
    number_of_fallen_pins += 1
    soundExpression.hello.play()
})
let radio_number = 0
radio_number = 0
let number_of_fallen_pins = 0
radio.setGroup(55)
basic.clearScreen()
basic.showIcon(IconNames.Yes)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.pause(3500)
basic.clearScreen()
basic.forever(function () {
    if (radio_number == 1) {
        led.plot(4, 4)
    }
    if (radio_number == 2) {
        led.plot(3, 2)
    }
    if (radio_number == 3) {
        led.plot(2, 4)
    }
    if (radio_number == 4) {
        led.plot(1, 2)
    }
    if (radio_number == 5) {
        led.plot(0, 4)
    }
    if (radio_number == 6) {
        led.plot(2, 0)
    }
    if (number_of_fallen_pins == 6) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . # . # .
                . . . . .
                # . # . #
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
        for (let index = 0; index < 3; index++) {
            basic.showNumber(6)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.pause(100)
        }
        music.playMelody("E B C5 A B G A F ", 120)
        basic.showIcon(IconNames.Happy)
        WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    }
})

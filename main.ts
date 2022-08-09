basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) >= 10) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
})

basic.forever(function () {
    if (input.soundLevel() < 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

led.enable(true)
basic.forever(function () {
    led.toggle(1, 0)
    basic.pause(500)
    led.toggle(1, 0)
    basic.pause(500)
    led.plot(3, 4)
    basic.pause(500)
    led.unplot(3, 4)
    basic.pause(500)
})

input.onButtonPressed(Button.A, function () {
    basic.showString("lavate dientes :)")
    basic.showString("y la cara")
    basic.showString("saluda")
    basic.showString("baja adesayunar")
    basic.showString("piensa positivo")
    basic.showString("pasatela bien")
})
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("B A B A B A B A ", 150), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . # . .
    . . . . .
    . # # # .
    # . . . #
    `)
music.play(music.stringPlayable("B A B A B A B A ", 150), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A B A B A B A ", 150), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . # . .
    . . . . .
    # . . . #
    . # # # .
    `)
music.play(music.stringPlayable("B A B A B A B A ", 150), music.PlaybackMode.UntilDone)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.showString("Hello!")
basic.showNumber(700)
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . . . . .
    # . # . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . # . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # . # . .
    . . . . .
    # . . . #
    . # # # .
    `)

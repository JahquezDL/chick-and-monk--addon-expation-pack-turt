namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Bumper = SpriteKind.create()
    export const Button = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && sprite.y < otherSprite.y) {
        info.changeScoreBy(1)
        sprite.vy = -5 * pixelsToMeters
    } else {
        if (Monkey == sprite) {
            info.changeLifeBy(-1)
            Monkey.sayText("Owie D:<", 1500, true)
        } else if (Chicken == sprite) {
            info.player2.changeLifeBy(-1)
            Chicken.sayText("Youwch :(", 1500, true)
            animation.runImageAnimation(
            Chicken,
            assets.animation`Hit`,
            200,
            false
            )
        } else {
            info.player3.changeLifeBy(-1)
            animation.runImageAnimation(
            Turtle,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 7 7 7 7 . 
                . . . 3 3 3 a 3 3 3 3 7 f 7 f . 
                . . . 3 3 3 a 3 a 3 3 7 8 7 8 . 
                . . . 3 3 3 3 a 3 3 3 7 7 f 7 . 
                . . . 3 3 3 3 3 3 3 3 . f . f . 
                . . 7 7 7 7 7 . 7 7 7 7 . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 7 7 7 7 . 
                . . . 3 3 3 a 3 3 3 3 7 f 7 f . 
                . . . 3 3 3 a 3 a 3 3 7 8 7 8 . 
                . . . 3 3 3 3 a 3 3 3 7 7 f 7 . 
                . . . 3 3 3 3 3 3 3 3 . f . f . 
                . . 7 7 7 7 7 . 7 7 7 7 . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 7 7 . . . 
                . . . 3 3 3 a 3 3 3 3 7 f . . . 
                . . . 3 3 3 a 3 a 3 3 7 8 . . . 
                . . . 3 3 3 3 a 3 3 3 f 7 . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . 7 7 7 7 7 . 7 7 7 7 . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 a 3 3 . . . . . 
                . . . 3 3 3 3 a 3 3 3 . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f 1 1 . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 3 3 3 . . . . . 
                . . . 3 3 3 a 3 a 3 3 . . . . . 
                . . . 3 3 3 3 a 3 3 3 . . . . . 
                . . . 3 3 3 3 3 3 3 3 . . . . . 
                `],
            500,
            false
            )
            Turtle.sayText("OOF DX", 1500, true)
        }
    }
    sprites.destroy(otherSprite)
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(Snaily, -150)
    animation.runImageAnimation(
    Snaily,
    [img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333cc6c.cc..........
        c33333c55c6c55b.........
        c33333ff5c6c5ff.........
        cc3336ff5c6c5ff.........
        cc6666c553c355b.........
        c333333c55355b..........
        c3333ccb55555cc.........
        .c33c55b4555455c........
        ..bbc5bb4444b45b........
        .b54c4555b4b554c........
        .c5c4c555c4c555c........
        .c5c4c5555c5555c........
        .ccc..ccccccccc.........
        `,img`
        ........................
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c33333cc66cccb..........
        c3333c55c6c55b..........
        cc333ff5c6c5ff..........
        cc666ff5ccc5ff..........
        c33333c55355b...........
        c333ccb55555cc..........
        .c3c5cccccccc5c.........
        ..bc55555c5555c.........
        .b5c4555c4c555c.........
        .c54c555c4c554c.........
        .ccccccc444ccc..........
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c333ccccccc............
        c333c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55c55c5c55c.........
        c33c4cff5ccc5ff.........
        c33c5cff5ccc5ff.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ........................
        ........................
        ........................
        .....cc.................
        ....c36cccc.............
        ...cc633336cc...........
        ..c3333336666c..........
        ..c3333366666c..........
        ..cc333666cccc.cc.......
        ..cc66666c55ccc55c......
        ..c333366ff5ccc5ff......
        ..c333336ff5ccc5ff......
        ..c333333c5555bbbbbbbb..
        ...c54c3ccccc455555c55c.
        ...c5cccc45554555555c55c
        ...ccc.ccccccccccccccccc
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `],
    200,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(Monkey, -200)
    animation.runImageAnimation(
    Monkey,
    assets.animation`jump`,
    150,
    false
    )
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Turtle, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile3`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Chicken, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Snaily, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Monkey, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.player2.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(Monkey), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(Monkey), CollisionDirection.Bottom), assets.tile`bounce`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(Chicken), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(Chicken), CollisionDirection.Bottom), assets.tile`myTile`)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Chicken,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 f 1 1 . . . . . . . 
        . . . 4 4 4 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 f 1 1 . . . . . . . 
        . . . 4 4 4 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f 1 f 1 f 1 f 1 . . . . 
        . . . f 1 f 1 f 1 f 1 f . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (Monkey == otherSprite) {
        info.changeLifeBy(-1)
    } else if (Chicken == otherSprite) {
        info.player2.changeLifeBy(-1)
    } else {
        info.player3.changeLifeBy(-1)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Monkey,
    assets.animation`walk left`,
    150,
    true
    )
})
function MainMenuControl2 () {
	
}
info.onCountdownEnd(function () {
    controller.player3.moveSprite(Turtle, 150, 0)
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Turtle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 3 3 3 3 7 f 7 f 
        . . . 3 3 3 a 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 a 3 3 3 7 7 f 7 
        . . . 3 3 3 3 a 3 3 3 3 . . . . 
        . . . . 7 7 . . . 7 7 . . . . . 
        . . . 7 7 7 7 . 7 7 7 7 . . . . 
        . . . 7 7 7 . . . 7 7 7 . . . . 
        . . . 7 7 7 . . . 7 7 7 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 3 3 3 3 7 f 7 f 
        . . . 3 3 3 a 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 a 3 3 3 7 7 f 7 
        . . . 3 3 3 3 a 3 3 3 3 . . . . 
        . . . . 7 7 . . . . 7 7 . . . . 
        . . . 7 7 7 7 . . . 7 7 7 . . . 
        . . . 7 7 7 . . . . . 7 7 7 7 . 
        . . . 7 7 7 . . . . . . 7 7 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 3 3 3 3 7 f 7 f 
        . . . 3 3 3 a 3 3 3 3 3 7 7 7 7 
        . . . 3 3 3 a 3 a 3 3 3 7 7 f 7 
        . . . 3 3 3 3 a 3 3 3 3 . . . . 
        . . . 7 7 7 . . . . 7 7 . . . . 
        . . . . 7 7 7 . . 7 7 7 7 . . . 
        . . . . . 7 7 7 . . 7 7 7 . . . 
        . . . . . 7 7 7 . . 7 7 7 . . . 
        `],
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("Wait.. THE CHEST IS EATING US WAHHHHHHHH!!!")
    game.splash("To be continued...")
    game.over(true)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Chicken,
    assets.animation`Jump`,
    300,
    false
    )
    if (Chicken.isHittingTile(CollisionDirection.Bottom)) {
        Chicken.vy = -250
        Jump = true
    } else if (Jump == true) {
        Chicken.vy = -250
        Jump = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Monkey,
    assets.animation`walk right`,
    150,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Chicken,
    assets.animation`Right`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`STAKS`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    if (Monkey == sprite) {
        animation.runImageAnimation(
        Monkey,
        [img`
            .......fffff..............
            ......feeeeef.............
            .....feeeddddf............
            ....ffeedfddfdc...........
            ...fddeedfddfdc...........
            ...cdbeeddddeedc..........
            ...cdbeeddcddddc..........
            ....cfeeeddccccc..........
            .....ffeeeddddf...........
            ....feeeefffff............
            ff.feeeeeeff..............
            fe.feefeefeef.............
            fe.feeefeefeef............
            feffefbbfbdfdbf...........
            ffffebddfddfddf...........
            .fffffffffffff............
            `,img`
            .......fffff..............
            ......feeeeef.............
            .....feeeddddf............
            ....ffeedfddfdc...........
            ...fddeedfddfdc...........
            ...cdbeeddddeedc..........
            ...cdbeeddcddddc..........
            ....cfeeeddccccc..........
            .....ffeeeddddf...........
            ....feeeffeeef............
            ff.feeeeefffff............
            fe.feeffeefbdf............
            fe.feeeffefddff...........
            feffefbbeffffff...........
            ffffebddeeefddf...........
            .fffffffffffff............
            `,img`
            ......fffff...............
            .....feeeeef..............
            ....feedddddf.............
            ...ffedffddfff............
            ..fddeddddeeddc...........
            .fffdeddcddddcc...........
            fdbfdedddccccdc...........
            fddffeeddddddc............
            fffeffeeddddc.............
            ..feeefeefff..............
            .fffeeeeeeef..............
            .fefffeeeeeef.............
            .fefffffeeeeff............
            .fefffbbfeefdbf...........
            .ffffbddfeefddf...........
            ..fffffffffffff...........
            `,img`
            ......fffff...............
            .....feeeeef..............
            ....feddddddf.............
            ...ffdffddffdf............
            ..fdeddddeedddc...........
            ..ffeddcddddcdc...........
            ffffedddccccddc...........
            fdbffedddddddc............
            fddfffeeddddc.............
            fffeeefeefff..............
            .fffeeeeeeef..............
            .fefffeeeeeef.............
            .fefffffeeeeff............
            .fefffbbfeefdbf...........
            .ffffbddffffddf...........
            ..fffffffffffff...........
            `,img`
            ......................7777
            ......................7557
            .......fffff..........7557
            ......feeeeef.........7777
            .....feeeddddf....5555555.
            ....ffeedddddf....5557555.
            ...fddeedffdddc...5557755.
            ...cdbeeddddeedc..5577555.
            ...cdbeeddcddffc..5577555.
            ....feeefffefddf..5577555.
            ....fffffeeefddf..5557555.
            .ff.ffeeeeefffff..5557755.
            .fe.ffeeeffefff...5577755.
            .fefffbbffefdbf...5557555.
            .feffbddfeefddf...5555555.
            ..fffffffffffff...........
            `,img`
            ......................7777
            ......................7557
            .......fffff..........7557
            ......feeeeef.........7777
            .....feeeddddf....5555555.
            ....ffeedddddf....5557555.
            ...fddeedffdddc...5557755.
            ...cdbeeddddeedc..5577555.
            ...cdbeeddcddffc..5577555.
            ....feeefffefddf..5577555.
            ....fffffeeefddf..5557555.
            .ff.ffeeeeefffff..5557755.
            .fe.ffeeeffefff...5577755.
            .fefffbbffefdbf...5557555.
            .feffbddfeefddf...5555555.
            ..fffffffffffff...........
            `,img`
            .......fffff..............
            ......feeeeef.............
            .....feeeddddf............
            ....ffeeddfddf............
            ...fddeeddfdddc...........
            ...cdbeeddddeedc..........
            ...cdbeeddcddddc..........
            ...fcfeedddffffc..........
            ....feeeefffdbf...........
            ....feefffefddf...........
            .ff.fffeeeefff............
            .fe.ffeeeefeef............
            .fefffffffeeeff...........
            .fefffbbfeefdbf...........
            .ffffbddeeffddf...........
            ..fffffffffffff...........
            `],
        200,
        false
        )
        Monkey.sayText("I did it", 1500, true)
        info.changeScoreBy(20)
    } else if (Chicken == sprite) {
        animation.runImageAnimation(
        Chicken,
        [img`
            ................
            ...5577777755777
            ...7777777777777
            ...5575555575777
            ...5557777755777
            ................
            ....11f11f11....
            ....11111111....
            ....11444411....
            ....11111111....
            ....11111111....
            ....11111111....
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ..411111111114..
            ..444444.44444..
            `,img`
            ................
            ...5577777755777
            ...7777777777777
            ...5575555575777
            ...5557777755777
            ................
            ....11f11f11....
            ....11111111....
            ....11444411....
            ....11111111....
            ....11111111....
            ....11111111....
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ...1111111111...
            ..411111111114..
            ..444444.44444..
            `],
        300,
        false
        )
        Chicken.sayText("Mine all mine", 1500, true)
        info.player2.changeScoreBy(20)
    } else {
        animation.runImageAnimation(
        Turtle,
        [img`
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 7 7 7 7 5 5 5 . . . 
            . . . 5 7 7 7 7 7 7 7 7 5 . . . 
            . . . 5 5 7 5 5 5 5 5 7 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 c 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 c 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            `,img`
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 7 7 7 7 5 5 5 . . . 
            . . . 5 7 7 7 7 7 7 7 7 5 . . . 
            . . . 5 5 7 5 5 5 5 5 7 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 c 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 c 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 c 3 3 3 3 3 . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            `],
        300,
        false
        )
        Turtle.sayText("I Found it", 1500, true)
        info.player3.changeScoreBy(20)
    }
    game.showLongText("You found Sacred BANANA Credits", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setWallAt(location, false)
})
controller.combos.attachCombo("BBAB", function () {
    Snaily = sprites.create(img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `, SpriteKind.Player)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `, SpriteKind.Player))
    controller.player4.moveSprite(Snaily, 50, 0)
    Snaily.ay = 500
})
info.player3.onLifeZero(function () {
    if (!(info.player1.hasLife()) && !(info.player2.hasLife())) {
        music.play(music.createSong(hex`0078000408010204001c00100500640000041e000004000000000000000000000000000a0400041f0004000800012a08000c0001270c00100001241000140001201400200002191d05001c000f0a006400f4010a0000040000000000000000000000000000000002060014002000011b`), music.PlaybackMode.InBackground)
        game.gameOver(false)
    } else {
        music.play(music.createSong(hex`0078000408010603001c0001dc00690000045e0100040000000000000000000005640001040003060018002000011d04001c00100500640000041e000004000000000000000000000000000a040004180004000800012a08000c0001270c001000012410002000012005001c000f0a006400f4010a0000040000000000000000000000000000000002180004000800011908000c00011b0c001000011d10002000012006001c00010a006400f401640000040000000000000000000000000000000002060018002000012407001c00020a006400f401640000040000000000000000000000000000000003060018002000012a08001c000e050046006603320000040a002d0000006400140001320002010002070018002000021927`), music.PlaybackMode.InBackground)
        game.showLongText("Turt has Died", DialogLayout.Bottom)
        sprites.destroy(Turtle)
    }
})
controller.combos.attachCombo("BAABB", function () {
    controller.moveSprite(Monkey, 100, 100)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Monkey,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f f e e e e e f . f f 
        . . f d b f e e f f e e f . e f 
        . f f d d f e f f e e e f . e f 
        . f f f f f f e b b f e f f e f 
        . f d d f e e e d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d e e f . . . . 
        . . f f f d d f f d e f f . . . 
        . c d d e e d d d d e d d f . . 
        . c c d d d d c d d e d f f f . 
        . c d c c c c d d d e d f b d f 
        . . c d d d d d d e e f f d d f 
        . . . c d d d d e e f f e f f f 
        . . . . f f f e e f e e e f . . 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f e e f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d d e f . . . . 
        . . f d f f d d f f d f f . . . 
        . c d d d e e d d d d e d f . . 
        . c d c d d d d c d d e f f . . 
        . c d d c c c c d d d e f f f f 
        . . c d d d d d d d e f f b d f 
        . . . c d d d d e e f f f d d f 
        . . . . f f f e e f e e e f f f 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f f f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d f d d e e f f . . . . 
        . c d d d f d d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c f f f f d d d e e f c f . . . 
        . f b d f f f e e e e f . . . . 
        . f d d f e f f f e e f . . . . 
        . . f f f e e e e f f f . f f . 
        . . f e e f e e e e f f . e f . 
        . f f e e e f f f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f e e d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite, location) {
    game.splash("Another FAKE!")
    game.splash("Wait Where are we!?")
    game.splash("Level 3 Dungeon")
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020204001c00100500640000041e000004000000000000000000000000000a0400043e0004000800012a08000c0001270c001000012a10001400012714001800012418001c00011d20002400012428002c0002242a30003400012038003c00021d2a05001c000f0a006400f4010a00000400000000000000000000000000000000023c0004000800011d08000c0001240c001000011d10001400012014001800012418001c00012720002400012a28002c00011d30003400012a38003c000124`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    tiles.setCurrentTilemap(tilemap`level5`)
    animation.runMovementAnimation(
    Monkey,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    Chicken,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    Turtle,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.player3.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.setDialogFrame(img`
        ...cc......................cc....
        ..c55c..bbbb...bbbbb......c55c...
        .cb55bcbdddbbbbbdddbbbbbbcb55bc..
        b555555bbdddb111bdddb11db555555b.
        bb5555bbdbdb11111bdb1111bb5555bb.
        cb5555bcddd11111ddd11111cb5555bc.
        .c5bb5c1111d111d111d111ddc5bb5c..
        .cbbbbc111111111111111111cbbbbc..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdb1d111111111111111111111111b..
        .bb111d11111111111111111111111b..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdbb1111111111111111111111111b..
        .bbbd1111111111111111111111111b..
        ..bcc111111111111111111111dccdb..
        ..c55c111d111d111d111d1111c55cb..
        .cb55bcdd11111ddd11111dddcb55bc..
        b555555b11111bdb11111bdbb555555b.
        bb5555bbb111bdddb111bdddbb5555bb.
        cb5555bcdbbbbbdddbbbbbddcb5555bc.
        .c5bb5c.bb...bbbbb...bbbbc5bb5c..
        .cbbbbc..................cbbbbc..
        .................................
        `)
    game.showLongText("Tip: Monk can climb walls and wall jump. Chick has a High Jump, and Turt is super fast!!!", DialogLayout.Bottom)
    game.setDialogFrame(img`
        ..................................................................
        ............fff........fff.............fff..............ffff......
        ...........fddbf......fbdbf...........fbdbf............fbddf......
        ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
        ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
        ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
        .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
        .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
        .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
        .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
        ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
        ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
        ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
        ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
        ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
        ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
        ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
        ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
        .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
        .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
        .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
        ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
        ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
        .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
        .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
        .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
        ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
        ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
        ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
        .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
        .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
        .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
        ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
        .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
        ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
        .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
        .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
        ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
        .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
        .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
        .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
        ......fddbf............fbdbf...........fbdbf......fbddf...........
        ......ffff..............fff.............fff........fff............
        ..................................................................
        `)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setWallAt(location, false)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(Snaily), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(Snaily), CollisionDirection.Bottom), assets.tile`skyblock`)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Chicken,
    assets.animation`Left`,
    500,
    true
    )
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Turtle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f 3 3 . . . . . . 
        . . . . . . . f 3 3 . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 a 3 3 3 3 3 7 7 7 
        . . . 3 3 3 3 a 3 3 3 3 3 f 7 f 
        . . . 3 3 3 3 a 3 3 3 3 3 7 7 7 
        . . . 3 3 3 3 a 3 a 3 3 3 7 f f 
        . . . 3 3 3 3 3 a 3 3 3 3 7 7 7 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f 3 3 . . . . . . 
        . . . . . . . f 3 3 . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 a 3 3 3 3 3 . . . 
        . . . 3 3 3 3 a 3 3 3 3 3 . . . 
        . . . 3 3 3 3 a 3 3 3 3 3 . . . 
        . . . 3 3 3 3 a 3 a 3 3 3 . . . 
        . . . 3 3 3 3 3 a 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        `],
    500,
    false
    )
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Snaily,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . c c c c 6 3 c . . . 
        . . . . . c 6 6 3 3 3 6 c . . . 
        . . . . c 6 6 3 3 3 3 3 3 c . . 
        b c c c 6 6 c c 3 3 3 3 3 3 c . 
        b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
        f f 5 c 6 c 5 f f 6 3 3 3 c c . 
        f f 5 c c c 5 f f 6 6 6 6 c c . 
        . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
        . c 5 5 5 5 4 c c c 3 3 3 3 c . 
        . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
        . c 5 b 4 4 b b 5 c b b c . . . 
        . c c 5 4 c 5 5 5 c c 5 c . . . 
        . . . c c 5 5 5 5 c c c c . . . 
        . . . . c c c c c c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
        c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
        b 5 4 b 4 4 4 c 5 5 5 b c c . . 
        c 4 5 5 b 4 4 c 5 5 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
        c 5 5 5 5 c 4 c c c c c c 5 c . 
        . c c c c c c . . . . . c c c . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite, location) {
    game.splash("It was a FAKE! Where is the real treasure!?")
    game.splash("Level 2 Jungle")
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020700001c00010a006400f4016400000400000000000000000000000000050000045a0004000800012a08000c0001270c001000012410001400012714001800012a18001c0001271c002000012420002400012724002800012a28002c0001272c003000012430003400012734003800012a38003c0001273c004000012402001c000c960064006d019001000478002c010000640032000000000a06000518000c001000012a1c002000012a2c003000012a3c004000012a03001c0001dc00690000045e0100040000000000000000000005640001040003180010001400012020002400012030003400012038003c00012004001c00100500640000041e000004000000000000000000000000000a040004180008000c00011920002400011b30003400011938003c00011b05001c000f0a006400f4010a00000400000000000000000000000000000000022a0000000400011d08000c0001200c001000012414001800012420002400012428002c00012438003c00012408001c000e050046006603320000040a002d0000006400140001320002010002190018001c00021d2028002c00012030003400011d38003c00011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80040000400050001060c000d000102140015000204082000210002020a2400250001062800290001032c002d000108340035000108380039000305080a3c003d000106`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    Monkey,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    Chicken,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    Turtle,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    Monkey.say("Level 2!", 500)
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        Chargin_Chuck = sprites.create(img`
            . . . . 2 2 2 2 2 e . . . . . . 
            . . . 2 2 2 2 d 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 e f f c c . . . 
            . . e e 2 2 e f f f f b c . . . 
            . e e e f e 2 b f f f d c . . . 
            e e 2 2 d f 2 1 1 1 1 b c . . . 
            e e 2 2 d f e e c c c . . . . . 
            b 1 1 d e 2 2 e e c . . . . . . 
            . f f e 2 2 2 2 e . . . . . . . 
            . . f f d d 2 2 f f d d . . . . 
            . . f f d d e e f f d d . . . . 
            . . . f f f f . . . . . . . . . 
            . . e e e f f f . . . . . . . . 
            . . e e e e f f f . . . . . . . 
            `, SpriteKind.Bumper)
        tiles.placeOnTile(Chargin_Chuck, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        Chargin_Chuck.vx = -50
    }
})
info.player1.onLifeZero(function () {
    if (!(info.player2.hasLife()) && !(info.player3.hasLife())) {
        music.play(music.createSong(hex`0078000408010204001c00100500640000041e000004000000000000000000000000000a0400041f0004000800012a08000c0001270c00100001241000140001201400200002191d05001c000f0a006400f4010a0000040000000000000000000000000000000002060014002000011b`), music.PlaybackMode.InBackground)
        game.gameOver(false)
    } else {
        music.play(music.createSong(hex`0078000408010603001c0001dc00690000045e0100040000000000000000000005640001040003060018002000011d04001c00100500640000041e000004000000000000000000000000000a040004180004000800012a08000c0001270c001000012410002000012005001c000f0a006400f4010a0000040000000000000000000000000000000002180004000800011908000c00011b0c001000011d10002000012006001c00010a006400f401640000040000000000000000000000000000000002060018002000012407001c00020a006400f401640000040000000000000000000000000000000003060018002000012a08001c000e050046006603320000040a002d0000006400140001320002010002070018002000021927`), music.PlaybackMode.InBackground)
        game.showLongText("Monk has Died", DialogLayout.Bottom)
        sprites.destroy(Monkey)
        scene.cameraFollowSprite(Chicken)
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(Turtle), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(Turtle), CollisionDirection.Bottom), assets.tile`myTile3`)
})
info.player2.onLifeZero(function () {
    if (!(info.player1.hasLife()) && !(info.player3.hasLife())) {
        music.play(music.createSong(hex`0078000408010204001c00100500640000041e000004000000000000000000000000000a0400041f0004000800012a08000c0001270c00100001241000140001201400200002191d05001c000f0a006400f4010a0000040000000000000000000000000000000002060014002000011b`), music.PlaybackMode.InBackground)
        game.gameOver(false)
    } else {
        music.play(music.createSong(hex`0078000408010603001c0001dc00690000045e0100040000000000000000000005640001040003060018002000011d04001c00100500640000041e000004000000000000000000000000000a040004180004000800012a08000c0001270c001000012410002000012005001c000f0a006400f4010a0000040000000000000000000000000000000002180004000800011908000c00011b0c001000011d10002000012006001c00010a006400f401640000040000000000000000000000000000000002060018002000012407001c00020a006400f401640000040000000000000000000000000000000003060018002000012a08001c000e050046006603320000040a002d0000006400140001320002010002070018002000021927`), music.PlaybackMode.InBackground)
        game.showLongText("Chick has Died", DialogLayout.Bottom)
        sprites.destroy(Chicken)
        scene.cameraFollowSprite(Turtle)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite, location) {
    if (Monkey == sprite) {
        info.changeLifeBy(-1)
        Monkey.sayText("Owie D:<", 1500, true)
    } else if (Chicken == sprite) {
        info.player2.changeLifeBy(-1)
        Chicken.sayText("Youwch :(", 1500, true)
        animation.runImageAnimation(
        Chicken,
        assets.animation`Hit`,
        200,
        false
        )
    } else {
        info.player3.changeLifeBy(-1)
        animation.runImageAnimation(
        Turtle,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 7 7 7 7 . 
            . . . 3 3 3 a 3 3 3 3 7 f 7 f . 
            . . . 3 3 3 a 3 a 3 3 7 8 7 8 . 
            . . . 3 3 3 3 a 3 3 3 7 7 f 7 . 
            . . . 3 3 3 3 3 3 3 3 . f . f . 
            . . 7 7 7 7 7 . 7 7 7 7 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 7 7 7 7 . 
            . . . 3 3 3 a 3 3 3 3 7 f 7 f . 
            . . . 3 3 3 a 3 a 3 3 7 8 7 8 . 
            . . . 3 3 3 3 a 3 3 3 7 7 f 7 . 
            . . . 3 3 3 3 3 3 3 3 . f . f . 
            . . 7 7 7 7 7 . 7 7 7 7 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 7 7 . . . 
            . . . 3 3 3 a 3 3 3 3 7 f . . . 
            . . . 3 3 3 a 3 a 3 3 7 8 . . . 
            . . . 3 3 3 3 a 3 3 3 f 7 . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . 7 7 7 7 7 . 7 7 7 7 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 a 3 3 . . . . . 
            . . . 3 3 3 3 a 3 3 3 . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f 1 1 . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 3 3 3 . . . . . 
            . . . 3 3 3 a 3 a 3 3 . . . . . 
            . . . 3 3 3 3 a 3 3 3 . . . . . 
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            `],
        500,
        false
        )
        Turtle.sayText("OOF DX", 1500, true)
    }
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Snaily,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    200,
    true
    )
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Turtle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 f 7 3 3 3 a 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 7 f 3 3 3 a 3 a 3 3 . . . . 
        7 f f 7 3 3 3 3 a 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 7 7 . . . . 7 7 . . . . . 
        . . . 7 7 . . . . 7 7 . . . . . 
        . . . 7 7 . . . . 7 7 . . . . . 
        . . . 7 7 . . . . 7 7 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 f 7 3 3 3 a 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 7 f 3 3 3 a 3 a 3 3 . . . . 
        7 f f 7 3 3 3 3 a 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 7 . . . 7 7 . . . . . . 
        . . . 7 7 . . . 7 7 . . . . . . 
        . . 7 7 7 . . . 7 7 . . . . . . 
        . . 7 7 . . . . 7 7 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 f 7 3 3 3 a 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 7 f 3 3 3 a 3 a 3 3 . . . . 
        7 f f 7 3 3 3 3 a 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 7 . . . 7 7 7 . . . . . 
        . . . 7 7 . . 7 7 7 . . . . . . 
        . . 7 7 7 . 7 7 7 . . . . . . . 
        . . 7 7 . . 7 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 f 7 3 3 3 a 3 3 3 3 . . . . 
        7 7 7 7 3 3 3 a 3 3 3 3 . . . . 
        f 7 7 f 3 3 3 a 3 a 3 3 . . . . 
        7 f f 7 3 3 3 3 a 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 7 7 . . . 7 7 7 . . . . . 
        . . . 7 7 . . 7 7 7 . . . . . . 
        . . . 7 7 . 7 7 7 . . . . . . . 
        . . . 7 7 . 7 7 . . . . . . . . 
        `],
    150,
    true
    )
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(Turtle, -175)
    animation.runImageAnimation(
    Turtle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 a 3 3 3 . . . 
        . . . . 3 3 3 3 a 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 a 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 a 3 3 a 3 3 . . . . 
        . . 3 3 3 3 3 a 3 a 3 . . . . . 
        . 3 3 3 3 3 3 3 a 3 . . . . . . 
        . . 3 3 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 . . . . . . . . 
        . . . . 3 3 3 . . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 a 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 a 3 3 a 3 3 . . . . 
        . . 3 3 3 3 3 a 3 a 3 . . . . . 
        . 3 3 3 3 3 3 3 a 3 . . . . . . 
        . . 3 3 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 . . . . . . . . 
        . . . . 3 3 3 . . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 a 3 3 . . . . . 
        . . . . . 3 3 a 3 a 3 . . . . . 
        . . . . . 3 3 a 3 3 3 . . . . . 
        . . . . . 3 3 a 3 3 3 . . . . . 
        . . . . . 3 3 a 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . 3 3 3 . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 a 3 3 3 3 . . . . . . 
        . . 3 3 a 3 a 3 3 3 3 . . . . . 
        . 3 3 3 a 3 3 a 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 a 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 a 3 3 3 . . . 
        . . . . 3 3 3 3 a 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 a 3 3 3 3 3 7 7 7 
        . . . . 3 3 3 a 3 3 3 3 3 f 7 f 
        . . . . 3 3 3 a 3 a 3 3 3 7 7 7 
        . . . . 3 3 3 3 a 3 3 3 3 7 f 7 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . 7 7 . . 7 7 . . . . . 
        . . . . 7 7 7 . 7 7 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
controller.combos.attachCombo("AABB", function () {
    controller.player3.moveSprite(Turtle, 300, 0)
    controller.player2.moveSprite(Chicken, 150, 0)
    controller.moveSprite(Monkey, 200, 0)
    info.startCountdown(20)
})
let projectile: Sprite = null
let Snaily: Sprite = null
let Chargin_Chuck: Sprite = null
let Jump = false
let Turtle: Sprite = null
let Chicken: Sprite = null
let Monkey: Sprite = null
let pixelsToMeters = 0
music.play(music.createSong(assets.song`Theme song`), music.PlaybackMode.LoopingInBackground)
game.setDialogFrame(img`
    ..................................................................
    ............fff........fff.............fff..............ffff......
    ...........fddbf......fbdbf...........fbdbf............fbddf......
    ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
    ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
    ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
    .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
    .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
    .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
    .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
    ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
    ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
    ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
    ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
    ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
    ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
    ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
    ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
    .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
    .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
    .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
    ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
    .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
    ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
    .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
    .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
    ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
    .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
    .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
    .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
    ......fddbf............fbdbf...........fbdbf......fbddf...........
    ......ffff..............fff.............fff........fff............
    ..................................................................
    `)
game.setDialogCursor(assets.image`stand`)
game.setDialogTextColor(2)
game.splash("OH NO! Ape Tron has stolen your treasure YOU (MONK) Have to get it back with the help of Chick and Turt!!!")
game.splash("Level 1 Tropics")
music.stopAllSounds()
pixelsToMeters = 30
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
Monkey = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(Monkey, 100, 0)
Monkey.ay = 500
Chicken = sprites.create(assets.image`Chicken`, SpriteKind.Player)
Turtle = sprites.create(assets.image`Turtle`, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`stand`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Chicken`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Turtle`, SpriteKind.Player))
scene.cameraFollowSprite(Monkey)
controller.player2.moveSprite(Chicken, 75, 0)
Chicken.ay = 400
info.setLife(3)
info.player2.setLife(3)
info.player3.setLife(3)
splitScreen.splitScreenCameraFollow(Chicken)
Turtle.ay = 500
controller.player3.moveSprite(Turtle, 150, 0)
music.play(music.createSong(assets.song`Monkey Mayhem`), music.PlaybackMode.LoopingInBackground)
Jump = false
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    Chargin_Chuck = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.Bumper)
    tiles.placeOnTile(Chargin_Chuck, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    Chargin_Chuck.vx = -50
}
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value.isHittingTile(CollisionDirection.Left)) {
            animation.runImageAnimation(
            Chargin_Chuck,
            [img`
                . . . . 2 2 2 2 2 e . . . . . . 
                . . . 2 2 2 2 d 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 e f f c c . . . 
                . . e e 2 2 e f f f f b c . . . 
                . e e e f e 2 b f f f d c . . . 
                e e 2 2 d f 2 1 1 1 1 b c . . . 
                e e 2 2 d f e e c c c . . . . . 
                b 1 1 d e 2 2 e e c . . . . . . 
                . f f e 2 2 2 2 e . . . . . . . 
                . . f f d d 2 2 f f d d . . . . 
                . . f f d d e e f f d d . . . . 
                . . . f f f f . . . . . . . . . 
                . . e e e f f f . . . . . . . . 
                . . e e e e f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 e . . . . 
                . . . . . 2 2 2 2 d 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 e f f c c . 
                . . . . e e 2 2 e f f f f b c . 
                . . . e e e f e 2 b f f f d c . 
                . . e e 2 2 d f 2 1 1 1 1 b c . 
                . . e e 2 2 d f e e c c c . . . 
                . . b 1 1 d e 2 e e c . . . . . 
                . . f f f f d d f . . . . . . . 
                f f f f f f d d . . . . . . . . 
                f f f . f f f e . . . . . . . . 
                f f . . . . e e e . . . . . . . 
                . . . . . . e e e e . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 e . . . . 
                . . . . . 2 2 2 2 d 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 2 2 e . . . 
                . . . . e 2 2 2 2 2 e f f c c . 
                . . . . e e 2 2 e f f f f b c . 
                . . e e e f e 2 2 b f f f d c . 
                . e e 2 2 d f e 2 1 1 1 1 b c . 
                . e e 2 2 d f e e e c c c . . . 
                . b 1 1 e e 2 2 e e c . . . . . 
                . . f d d 2 2 2 f f f d d . . . 
                e e f d d e e e . f f d d . . . 
                e e e f f f f f . . . . . . . . 
                e e . . . . f f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 2 2 e . . . 
                . . . . . . 2 2 2 2 d 2 2 e . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . . . e 2 2 2 2 2 e f f c c 
                . . . . . e e 2 2 e f f f f b c 
                . . . e e e f e 2 2 b f f f d c 
                . . e e 2 2 d f e 2 1 1 1 1 b c 
                . . e e 2 2 d f e e e c c c . . 
                . . b 1 1 d e 2 2 e e c . . . . 
                . . . f f f d d 2 2 f d d . . . 
                . . . . f f d d e e f d d . . . 
                . . . . . f f f f f . . . . . . 
                . . . . e e e f f . . . . . . . 
                . . . . e e e e f f . . . . . . 
                `],
            100,
            false
            )
            value.vx = randint(30, 60)
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            animation.runImageAnimation(
            Chargin_Chuck,
            [img`
                . . . . . . e 2 2 2 2 2 . . . . 
                . . . . . e 2 2 d 2 2 2 2 . . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . . . e 2 2 2 2 2 2 2 e . . 
                . . . c c f f e 2 2 2 2 2 e . . 
                . . . c b f f f f e 2 2 e e . . 
                . . . c d f f f b 2 e f e e e . 
                . . . c b 1 1 1 1 2 f d 2 2 e e 
                . . . . . c c c e e f d 2 2 e e 
                . . . . . . c e e 2 2 e d 1 1 b 
                . . . . . . . e 2 2 2 2 e f f . 
                . . . . d d f f 2 2 d d f f . . 
                . . . . d d f f e e d d f f . . 
                . . . . . . . . . f f f f . . . 
                . . . . . . . . f f f e e e . . 
                . . . . . . . f f f e e e e . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . e 2 2 2 2 2 . . . . . . 
                . . . e 2 2 d 2 2 2 2 . . . . . 
                . . . e 2 2 2 2 2 2 2 e . . . . 
                . . . e 2 2 2 2 2 2 2 e . . . . 
                . c c f f e 2 2 2 2 2 e . . . . 
                . c b f f f f e 2 2 e e . . . . 
                . c d f f f b 2 e f e e e . . . 
                . c b 1 1 1 1 2 f d 2 2 e e . . 
                . . . c c c e e f d 2 2 e e . . 
                . . . . . c e e 2 e d 1 1 b . . 
                . . . . . . . f d d f f f f . . 
                . . . . . . . . d d f f f f f f 
                . . . . . . . . e f f f . f f f 
                . . . . . . . e e e . . . . f f 
                . . . . . . e e e e . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . e 2 2 2 2 2 . . . . . . 
                . . . e 2 2 d 2 2 2 2 . . . . . 
                . . . e 2 2 2 2 2 2 2 e . . . . 
                . . . e 2 2 2 2 2 2 2 e . . . . 
                . c c f f e 2 2 2 2 2 e . . . . 
                . c b f f f f e 2 2 e e . . . . 
                . c d f f f b 2 2 e f e e e . . 
                . c b 1 1 1 1 2 e f d 2 2 e e . 
                . . . c c c e e e f d 2 2 e e . 
                . . . . . c e e 2 2 e e 1 1 b . 
                . . . d d f f f 2 2 2 d d f . . 
                . . . d d f f . e e e d d f e e 
                . . . . . . . . f f f f f e e e 
                . . . . . . . f f f . . . . e e 
                . . . . . . f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . e 2 2 2 2 2 . . . . . . . 
                . . e 2 2 d 2 2 2 2 . . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                c c f f e 2 2 2 2 2 e . . . . . 
                c b f f f f e 2 2 e e . . . . . 
                c d f f f b 2 2 e f e e e . . . 
                c b 1 1 1 1 2 e f d 2 2 e e . . 
                . . c c c e e e f d 2 2 e e . . 
                . . . . c e e 2 2 e d 1 1 b . . 
                . . . d d f 2 2 d d f f f . . . 
                . . . d d f e e d d f f . . . . 
                . . . . . . f f f f f . . . . . 
                . . . . . . . f f e e e . . . . 
                . . . . . . f f e e e e . . . . 
                `],
            100,
            false
            )
            value.vx = randint(-60, -30)
        }
    }
})
game.onUpdate(function () {
    if (Monkey.isHittingTile(CollisionDirection.Left) || Monkey.isHittingTile(CollisionDirection.Right) && Monkey.vy >= 0) {
        Monkey.vy = 0
        Monkey.ay = 0
    } else {
        Monkey.ay = 350
    }
})
forever(function () {
	
})
forever(function () {
	
})

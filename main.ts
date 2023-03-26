controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 4 4 2 . . . . . . . 
        . . . . 2 4 5 5 4 2 . . . . . . 
        . . . . 2 4 5 5 4 2 . . . . . . 
        . . . . 2 4 4 4 4 2 . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(100)
    if (mySprite3.overlapsWith(myEnemy)) {
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.changeScoreBy(1)
    }
    pause(500)
})
let s2: Sprite = null
let mySprite3: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let s1 = sprites.create(img`
    . . . . . . . . 2 . . . . . . . 
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
    `, SpriteKind.Projectile)
info.setScore(0)
info.setLife(5)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . e . . 2 4 4 4 2 . . e . . . 
    . . 4 . 2 4 4 4 4 4 2 . 4 . . . 
    . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
    . 2 4 2 2 2 4 4 4 2 2 2 4 2 . . 
    . . e . . . e e e . . . e . . . 
    . e 5 e . e 5 5 5 e . e 5 e . . 
    . . 4 . . . 4 5 4 . . . 4 . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myEnemy = sprites.create(img`
    . . . . . . . 4 . . . . . . . . 
    . . 4 . . . 4 5 4 . . . 4 . . . 
    . b 5 b . b 5 5 5 b . b 5 b . . 
    . . b . . . b b b . . . b . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 6 6 6 6 6 8 6 6 6 6 6 8 . . 
    . . 8 8 6 6 6 8 6 6 6 8 8 . . . 
    . . . c 8 6 6 8 6 6 8 c . . . . 
    . . . a . 8 6 8 6 8 . a . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(72, 15)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . e . . 2 4 4 4 2 . . e . . . 
    . . 4 . 2 4 4 4 4 4 2 . 4 . . . 
    . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
    . 2 4 2 2 2 4 4 4 2 2 2 4 2 . . 
    . . e . . . e e e . . . e . . . 
    . e 5 e . e 5 5 5 e . e 5 e . . 
    . 4 5 4 . . 4 5 4 . . 4 5 4 . . 
    . . 4 . . . . 4 . . . . 4 . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . e . . 2 4 4 4 2 . . e . . . 
    . . 4 . 2 4 4 4 4 4 2 . 4 . . . 
    . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
    . 2 4 2 2 2 4 4 4 2 2 2 4 2 . . 
    . . e . . . e e e . . . e . . . 
    . e 5 e . e 5 5 5 e . e 5 e . . 
    . . 4 . . 4 5 5 5 4 . . 4 . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . e . . 2 4 4 4 2 . . e . . . 
    . . 4 . 2 4 4 4 4 4 2 . 4 . . . 
    . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
    . 2 4 2 2 2 4 4 4 2 2 2 4 2 . . 
    . . e . . . e e e . . . e . . . 
    . e 5 e . e 5 5 5 e . e 5 e . . 
    . 4 5 4 . 4 5 5 5 4 . 4 5 4 . . 
    . . 4 . . . 4 5 4 . . . 4 . . . 
    . . . . . . . 4 . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 2 4 2 2 . . . . . . 
    . . e . . 2 4 4 4 2 . . e . . . 
    . . 4 . 2 4 4 4 4 4 2 . 4 . . . 
    . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
    . 2 4 2 2 2 4 4 4 2 2 2 4 2 . . 
    . . e . . . e e e . . . e . . . 
    . e 5 e . e 5 5 5 e . e 5 e . . 
    . . 4 . . 4 5 5 5 4 . . 4 . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
myEnemy,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . 4 . . . 4 5 4 . . . 4 . . . 
    . b 5 b . b 5 5 5 b . b 5 b . . 
    . . b . . . b b b . . . b . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 6 6 6 6 6 8 6 6 6 6 6 8 . . 
    . . 8 8 6 6 6 8 6 6 6 8 8 . . . 
    . . . c 8 6 6 8 6 6 8 c . . . . 
    . . . a . 8 6 8 6 8 . a . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 4 4 . . . 4 . . . 
    . 4 5 4 . 4 5 5 5 4 . 4 5 4 . . 
    . b 5 b . b 5 5 5 b . b 5 b . . 
    . . b . . . b b b . . . b . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 6 6 6 6 6 8 6 6 6 6 6 8 . . 
    . . 8 8 6 6 6 8 6 6 6 8 8 . . . 
    . . . c 8 6 6 8 6 6 8 c . . . . 
    . . . a . 8 6 8 6 8 . a . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    `,img`
    . . . . . . . 4 . . . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . 4 . . 4 5 5 5 4 . . 4 . . . 
    . b 5 b . b 5 5 5 b . b 5 b . . 
    . . b . . . b b b . . . b . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 6 6 6 6 6 8 6 6 6 6 6 8 . . 
    . . 8 8 6 6 6 8 6 6 6 8 8 . . . 
    . . . c 8 6 6 8 6 6 8 c . . . . 
    . . . a . 8 6 8 6 8 . a . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 . . . 4 4 4 . . . 4 . . . 
    . 4 5 . . 4 5 5 5 4 . 4 5 4 . . 
    . b 5 b . b 5 5 5 b . b 5 b . . 
    . . b . . . b b b . . . b . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 6 6 6 6 6 8 6 6 6 6 6 8 . . 
    . . 8 8 6 6 6 8 6 6 6 8 8 . . . 
    . . . c 8 6 6 8 6 6 8 c . . . . 
    . . . a . 8 6 8 6 8 . a . . . . 
    . . . . . 8 6 6 6 8 . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    `],
500,
true
)
forever(function () {
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
    if (s1.overlapsWith(mySprite)) {
        s2 = sprites.createProjectileFromSprite(assets.image`s1`, mySprite, 0, -20)
        sprites.destroy(s1, effects.spray, 500)
    }
    pause(20)
})
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    s1 = sprites.createProjectileFromSprite(assets.image`s1`, myEnemy, 0, 20)
})

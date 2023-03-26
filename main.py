def on_a_pressed():
    global mySprite3
    mySprite3 = sprites.create_projectile_from_sprite(img("""
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
        """),
        mySprite,
        0,
        -100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.fire, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(100)
    if mySprite3.overlaps_with(myEnemy):
        sprites.destroy(myEnemy, effects.rings, 500)
        sprites.destroy(mySprite3)
        info.change_score_by(1)
    pause(500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite3: Sprite = None
myEnemy: Sprite = None
mySprite: Sprite = None
info.set_score(0)
info.set_life(5)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
myEnemy = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
animation.run_image_animation(mySprite,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    500,
    True)
animation.run_image_animation(myEnemy,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    500,
    True)

def on_forever():
    controller.move_sprite(mySprite)
forever(on_forever)

def on_forever2():
    pass
forever(on_forever2)

def on_forever3():
    pass
forever(on_forever3)

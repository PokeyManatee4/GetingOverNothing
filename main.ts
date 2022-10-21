scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    statusbar.value += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readNumber("camera") == 0) {
        blockSettings.writeNumber("camera", 1)
    } else {
        blockSettings.writeNumber("camera", 0)
    }
})
let statusbar: StatusBarSprite = null
game.splash("Getting Over Nothing(3D)")
game.splash("Nothing but hoes(3D)")
let mySprite = Render.getRenderSpriteVariable()
let myEnemy = sprites.create(assets.image`playeridle`, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(myEnemy)
statusbar.setLabel("HP")
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`hackground`)
let myDart = darts.create(assets.image`starissue`, SpriteKind.Enemy)
mySprite.setScale(1, ScaleAnchor.Middle)
myDart.throwDart()
blockSettings.writeNumber("camera", 0)
game.onUpdate(function () {
    console.log(blockSettings.readNumber("camera"))
    scene.cameraFollowSprite(mySprite)
    myEnemy.x = mySprite.x
    myEnemy.y = mySprite.y
    if (blockSettings.readNumber("camera") == 1) {
        Render.setViewMode(ViewMode.tilemapView)
    } else {
        Render.setViewMode(ViewMode.raycastingView)
    }
    if (statusbar.value == 0) {
        game.over(false)
    } else {
    	
    }
    console.log(statusbar.value)
})

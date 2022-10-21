// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020202020202020300000302020202020202030000000200000000020000000302020000000002000000000200000000020200000000020000000002000000000202030000000000000000000000000302020202020202030000030202020202020200000000020000000002000000000202000000000200000000020000000002020000000002000000000200000000020200000003020000000002030000000202000202020200000000020202020002020000000000000000000000000000020203000000000200000200000000030202020202020203000003020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 . . . 2 . . . . 2 . . . 2 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . 2 2 2 2 . . . . 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . 2 . . 2 . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.crowd0,sprites.builtin.brick,sprites.castle.saplingPine], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

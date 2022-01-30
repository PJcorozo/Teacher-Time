// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060b060000000000000000000000000002010101030000000000000000000000080808080400000000000000000000000808080504000000000006060b0000000c080805040b07000a000201010505050505080505010101010105080808080808080805050505050908080805050505050505050505`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . 2 2 . 
. . . . . . . . . . . . . 2 2 . 
. . . . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.saplingPine,sprites.swamp.swampTile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.castle.saplingOak,sprites.castle.shrub], TileScale.Sixteen);
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

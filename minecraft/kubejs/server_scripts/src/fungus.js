ServerEvents.recipes(event => {
    event.remove("create:crushing/nether_wart_block");
    event.recipes.create.crushing([Item.of("minecraft:crimson_fungus", 1).withChance(0.5), Item.of("minecraft:nether_wart", 1).withChance(0.25)], "minecraft:nether_wart_block");
    event.recipes.create.crushing(Item.of("minecraft:warped_fungus", 1).withChance(0.5), "minecraft:warped_wart_block");
    event.recipes.create.crushing(Item.of("garnished:sepia_fungus", 1).withChance(0.5), "garnished:sepia_wart_block");
});
//priority: 3
MoreJSEvents.villagerTrades(event => {
    event.removeModdedTrades("minecraft:farmer", 1);
    event.addTrade("minecraft:farmer", 1, [Item.of("farmersdelight:onion", 26)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("farmersdelight:tomato", 26)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("corn_delight:corn", 24)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("culturaldelights:cucumber", 22)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("culturaldelights:eggplant", 15)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("culturaldelights:white_eggplant", 20)], "minecraft:emerald");
    event.addTrade("minecraft:farmer", 1, [Item.of("culturaldelights:avocado", 20)], "minecraft:emerald");
});
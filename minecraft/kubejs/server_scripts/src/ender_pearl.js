ServerEvents.recipes(event => {
    event.replaceInput({
        output: "garnished:crushed_ender_pearl"
    }, "minecraft:ender_pearl", "ends_delight:ender_pearl_grain");

    event.recipes.create.crushing([
        Item.of("ends_delight:ender_pearl_grain", 4),
         Item.of("ends_delight:ender_pearl_grain", 4).withChance(0.5)],
          "minecraft:ender_pearl", 100);
});
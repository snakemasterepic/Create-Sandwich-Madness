ServerEvents.recipes(event => {
    event.remove("farmersdelight:cooking/apple_cider");
    event.remove("create_central_kitchen:mixing/apple_cider");
    event.recipes.farmersdelight.cooking(["minecraft:apple", "minecraft:apple", "minecraft:sugar"], "garnished:apple_cider", 1, 200, "minecraft:glass_bottle");
    event.remove("garnished:mixing/apple_cider");
    event.recipes.create.mixing(Fluid.of("garnished:apple_cider", 250), [Item.of("minecraft:apple", 2), "minecraft:sugar"]).heated();
});
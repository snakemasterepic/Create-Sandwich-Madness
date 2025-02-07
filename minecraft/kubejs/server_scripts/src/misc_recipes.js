ServerEvents.recipes(event => {
    // Enchanted golden apple recipe.
    event.recipes.create.filling(
        "minecraft:enchanted_golden_apple",
         [Fluid.of("create_enchantment_industry:hyper_experience", 100), "minecraft:golden_apple"]
    );
    // Renewable diamonds
    event.recipes.create.compacting('minecraft:diamond', [Item.of("minecraft:coal_block", 9)]).superheated();

    // Renewable Gilded Blackstone & netherite
    event.recipes.create.compacting("minecraft:gilded_blackstone", ["minecraft:blackstone", Item.of("minecraft:gold_ingot", 2)]).heated();

    // Renewable netherite
    event.recipes.create.compacting("minecraft:ancient_debris", [Item.of("minecraft:gilded_blackstone", 9), Fluid.of("minecraft:lava", 1000)]).superheated();

    // Blaze rods
    event.recipes.create.compacting("minecraft:blaze_rod", ["minecraft:stick"]).superheated();
});
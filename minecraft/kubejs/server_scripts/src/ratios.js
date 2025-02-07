ServerEvents.recipes(event => {
    event.remove("createfood:create/compacting/sugar_cane_fluid_from_compacting");
    event.recipes.create.compacting(Fluid.of("createfood:sugar_cane_juice", 250), [Item.of("minecraft:sugar_cane", 1)]);

    event.remove("createfood:create/compacting/cream_cheese_from_compacting_cream_cheese");
    event.recipes.create.compacting("createfood:cream_cheese", [Fluid.of("createfood:cream_cheese", 250)]);
    event.remove("createfood:minecraft/crafting/cream_cheese_bucket_from_crafting");
    event.shapeless("createfood:cream_cheese_bucket", ["minecraft:bucket", Item.of("createfood:cream_cheese", 4)]);

    event.remove("createfood:create/mixing/gelatin_from_mixing_water");    
    event.recipes.create.mixing(
        Item.of("createfood:gelatin", 4),
        [
            Item.of("minecraft:bone", 2),
            Fluid.of("minecraft:water", 125)
        ]).heated();

    event.remove("createfood:farmersdelight/cooking/sugar_cane_juice_bucket_from_cooking");
    event.recipes.farmersdelight.cooking(
        [
            "minecraft:sugar_cane",
            "minecraft:sugar_cane",
            "minecraft:sugar_cane",
            "minecraft:sugar_cane"
        ],
        "createfood:sugar_cane_juice_bucket",
        0.5, 40,
        "minecraft:bucket");

    event.remove("createfood:create/compacting/marshmallow_from_compacting_heated");
    event.recipes.create.compacting(
        "createfood:marshmallow",
        [
            "minecraft:sugar",
            "createfood:gelatin",
            Fluid.of("minecraft:water", 125)
        ]).heated();

    
    event.remove("createfood:create/mixing/cheesecake_filling_fluid_from_mixing_sour_cream");
    event.recipes.create.mixing(
        Fluid.of("createfood:cheesecake_filling", 1000),
        [
            Fluid.of("createfood:sour_cream", 250),
            Item.of("minecraft:egg", 2),
            Item.of("createfood:cream_cheese", 4),
            "#forge:sugar",
            "createfood:salt"
        ]);
});
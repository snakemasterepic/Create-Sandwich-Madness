ServerEvents.recipes(event => {
    const chorusFruits = IngredientHelper.or(["minecraft:chorus_fruit", "createfood:chorus_fruit_slice", "ends_delight:chorus_fruit_grain"]);

    event.recipes.create.mixing(Fluid.of("kubejs:chorus_sauce", 250), ["minecraft:chorus_fruit", "ends_delight:chorus_succulent"]).heated();
    event.recipes.create.mixing(Fluid.of("kubejs:chorus_sauce", 250), ["createfood:chorus_fruit_slice", "ends_delight:chorus_succulent"]).heated();
    event.recipes.create.mixing(Fluid.of("kubejs:chorus_sauce", 250), ["ends_delight:chorus_fruit_grain", "ends_delight:chorus_succulent"]).heated();

    event.recipes.create.filling("ends_delight:chorus_sauce", ["minecraft:bowl", Fluid.of("kubejs:chorus_sauce", 250)]);
    event.recipes.create.emptying(["minecraft:bowl", Fluid.of("kubejs:chorus_sauce", 250)], "ends_delight:chorus_sauce");

    event.recipes.create.mixing(Item.of("ends_delight:raw_ender_sausage", 2), [Fluid.of("kubejs:chorus_sauce", 250), "#forge:raw_dragon_meat", "ends_delight:enderman_gristle"]);

    event.recipes.create.mixing(Fluid.of("create_central_kitchen:chorus_fruit_milk_tea", 250), [Fluid.of("minecraft:milk", 250), chorusFruits]).heated();
    event.recipes.create.mixing(Fluid.of("create_central_kitchen:chorus_fruit_bubble_tea", 250), [Fluid.of("minecraft:milk", 250), chorusFruits, "ends_delight:ender_pearl_grain"]).heated();
    event.recipes.create.mixing(Fluid.of("create_central_kitchen:chorus_fruit_wine", 250), [Ingredient.of(chorusFruits, 2), "minecraft:sugar"]).heated();
    event.recipes.create.mixing(Fluid.of("create_central_kitchen:chorus_flower_tea", 250), ["minecraft:ghast_tear", "ends_delight:dried_chorus_flower"]).heated();

    event.remove("ends_delight:food/chorus_fruit_wine");
    event.recipes.farmersdelight.cooking(["minecraft:sugar", chorusFruits, chorusFruits], "ends_delight:chorus_fruit_wine", 1, 200, "minecraft:glass_bottle");
    event.recipes.farmersdelight.cooking(["ends_delight:chorus_succulent", "createfood:chorus_fruit_slice"], "ends_delight:chorus_sauce", 0.35, 200, "minecraft:bowl");
    event.replaceInput("ends_delight:food/chorus_fruit_grain", "minecraft:chorus_fruit", "createfood:chorus_fruit_slice");
});
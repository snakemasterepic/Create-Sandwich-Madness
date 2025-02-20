//priority: 10
ServerEvents.recipes(event => {
    event.remove({
        output: [
            "farmersdelight:vegetable_noodles",
            "farmersdelight:chicken_soup"
        ]
    });

    event.recipes.farmersdelight.cooking([
        "some_assembly_required:chopped_carrot",
        "minecraft:brown_mushroom",
        "#forge:pasta",
        "#forge:crops/cabbage",
        "#forge:vegetables"
    ], "farmersdelight:vegetable_noodles",
    1, 200,
    "minecraft:bowl");
    event.recipes.farmersdelight.cooking([
        "#forge:raw_chicken",
        "some_assembly_required:chopped_carrot",
        "#forge:crops/cabbage",
        "#forge:vegetables"
    ], "farmersdelight:chicken_soup",
    1, 200,
    "minecraft:bowl");

    event.replaceInput({
        output: [
            "garnished:salad",
            "farmersdelight:fried_rice",
            "ends_delight:ender_bamboo_rice",
            "farmersdelight:vegetable_soup",
            "farmersdelight:beef_stew",
            "ends_delight:dragon_meat_stew_block",
            "minecraft:rabbit_stew",
            "farmersdelight:mushroom_rice",
            "farmersdelight:kelp_roll"
        ]
    }, "minecraft:carrot", "some_assembly_required:chopped_carrot");
    event.replaceInput({
        output: [
            "farmersdelight:ratatouille",
            "farmersdelight:stuffed_pumpkin_block",
            "farmersdelight:fish_stew",
            "farmersdelight:steak_and_potatoes",
            "farmersdelight:grilled_salmon",
            "farmersdelight:roast_chicken_block",
            "farmersdelight:shepherds_pie_block",
            "ends_delight:grilled_shulker_block"
        ]
    }, "farmersdelight:onion", "some_assembly_required:sliced_onion");
    event.replaceInput({
        output: [
            "ends_delight:steamed_dragon_egg_block",
            "culturaldelights:poached_eggplants",
            "ends_delight:ender_bamboo_rice",
            "farmersdelight:fried_rice",
            "ends_delight:stir_fried_shulker_meat",
            "culturaldelights:spicy_curry",
            "ends_delight:shulker_omelette_mixture"
        ]
    }, "farmersdelight:onion", "createfood:diced_onion");
    event.replaceInput({
        output: [
            "farmersdelight:fruit_salad"
        ]
    }, "minecraft:apple", "createfood:apple_slice");
    event.replaceInput({
        output: [
            "farmersdelight:ratatouille",
            "minecraft:beetroot_soup",
            "farmersdelight:vegetable_soup",
            "farmersdelight:mixed_salada",
            "farmersdelight:roasted_mutton_chops",
            "culturaldelights:chicken_roll",
            "farmersdelight:mixed_salad"
        ]
    }, "minecraft:beetroot", "some_assembly_required:chopped_beetroot");
    event.replaceInput({
        output: [
            "farmersdelight:mixed_salad",
            "farmersdelight:roasted_mutton_chops",
            "culturaldelights:hearty_salad",
            "ends_delight:roasted_dragon_steak",
            "ends_delight:end_mixed_salad",
            "ends_delight:assorted_salad",
            "ends_delight:dragon_leg_with_sauce_block",
            "ends_delight:grilled_shulker_block",
            "farmersdelight:ratatouille",
            "farmersdelight:baked_cod_stew",
            "ends_delight:stir_fried_shulker_meat",
            "ends_delight:dragon_meat_stew_block",
            "culturaldelights:smoked_tomato"
        ]
    }, "farmersdelight:tomato", "some_assembly_required:tomato_slices");
});

ServerEvents.compostableRecipes(event => {
    event.add("culturaldelights:cucumber_seeds", 0.3);
    event.add("culturaldelights:cucumbers", 0.65);
    event.add("culturaldelights:cut_cucumber", 0.5);
    event.add("culturaldelights:eggplant_seeds", 0.3);
    event.add("culturaldelights:eggplant", 0.65);
    event.add("culturaldelights:cut_eggplant", 0.5);
    
});

ServerEvents.tags("item", event => {
    event.add("forge:vegetables", "some_assembly_required:chopped_beetroot");
    event.add("forge:vegetables", "some_assembly_required:chopped_carrot");
    event.add("forge:vegetables", "some_assembly_required:sliced_onion");
    event.add("forge:vegetables", "some_assembly_required:tomato_slices");
    event.add("forge:apple", "some_assembly_required:apple_slices");
});
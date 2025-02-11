//priority: 10
ServerEvents.recipes(event => {
    event.replaceInput({
        output: []
    }, "farmersdelight:tomato", "some_assembly_required:tomato_slices");
    event.replaceInput({
        output: [
            "garnished:salad",
            "farmersdelight:vegetable_noodles",
            "farmersdelight:fried_rice",
            "ends_delight:ender_bamboo_rice",
            "farmersdelight:vegetable_soup",
            "farmersdelight:beef_stew",
            "ends_delight:dragon_meat_stew",
            "minecraft:rabbit_stew",
            "farmersdelight:chicken_soup",
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
            "ends_delight:grilled_shulker"

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

ServerEvents.tags("item", event => {
    event.add("forge:vegetables", "some_assembly_required:chopped_beetroot");
    event.add("forge:vegetables", "some_assembly_required:chopped_carrot");
    event.add("forge:vegetables", "some_assembly_required:sliced_onion");
    event.add("forge:vegetables", "some_assembly_required:tomato_slices");
    event.add("forge:apple", "some_assembly_required:apple_slices");
});
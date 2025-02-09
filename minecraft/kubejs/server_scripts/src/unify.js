ServerEvents.recipes(event => {
    // Toast
    event.replaceInput({
        input: "toast_slice"
    }, "toast_slice", "some_assembly_required:toasted_bread_slice");

    // Remove sweet berry cheesecake recipes from Farmer's Delight in favor of Create Food
    event.remove([{
        output: "farmersdelight:sweet_berry_cheesecake",
        input: "minecraft:milk_bucket"
    }, {
        output: "farmersdelight:sweet_berry_cheesecake",
        input: "farmersdelight:sweet_berry_cheesecake_slice"
    }]);

    event.shapeless("farmersdelight:sweet_berry_cheesecake", [Item.of("farmersdelight:sweet_berry_cheesecake_slice", 4)]);

    // Recipe conflict for sliced onion and diced onion
    event.replaceInput({
        output: "createfood:diced_onion"
    }, "farmersdelight:onion", "some_assembly_required:sliced_onion");

    // Meatballs
    event.replaceInput({
        output: "farmersdelight:pasta_with_meatballs"
    }, "farmersdelight:minced_beef", "small_meatballs");

    // Apple Slice
    event.remove("createfood:farmersdelight/cutting/apple_slice_from_cutting");

    event.shapeless(Item.of("createfood:apple_slice", 4), ["some_assembly_required:apple_slices"]);

    event.shaped("some_assembly_required:apple_slices", [
        "AA",
        "AA"
    ], {
        A: "createfood:apple_slice"
    });

    // Cookie Consistency
    event.remove("minecraft:cookie");
    event.remove("farmersdelight:sweet_berry_cookie");
    event.remove("farmersdelight:honey_cookie");

    const rawCookies = [
        "createfood:raw_butterscotch_chips_cookie",
        "createfood:raw_butterscotch_chips_chocolate_cookie",
        "createfood:raw_caramel_chips_cookie",
        "createfood:raw_caramel_chips_chocolate_cookie",
        "createfood:raw_toffee_chips_cookie",
        "createfood:raw_toffee_chips_chocolate_cookie",
        "createfood:raw_dark_chips_cookie",
        "createfood:raw_dark_chips_chocolate_cookie",
        "createfood:raw_cookie",
        "createfood:raw_chocolate_cookie",
        "createfood:raw_white_chips_cookie",
        "createfood:raw_white_chips_chocolate_cookie",
        "createfood:raw_honey_cookie",
        "createfood:raw_sweet_berry_cookie"
    ];

    for (let cookie of rawCookies) {
        event.remove({
            type: "minecraft:crafting_shapeless",
            output: cookie
        });
    }

    // Cake Consistency
    event.remove("minecraft:cake");
    event.remove("farmersdelight:cake_from_milk_bottle");
    event.remove("create:crafting/curiosities/cake");

    // Sweet Roll Consistency
    event.remove("create:filling/sweet_roll");

    // Pie Consistency
    event.remove("farmersdelight:chocolate_pie");
    event.remove("farmersdelight:apple_pie");

    // Popsicle Consistency

    event.remove("createfood:minecraft/crafting/apple_popsicle_from_crafting");
    event.remove("createfood:minecraft/crafting/berry_popsicle_from_crafting");
    event.remove("createfood:minecraft/crafting/glow_berry_popsicle_from_crafting");

    const popsicles = [
        {
            flavor: "some_assembly_required:apple_slices",
            popsicle: "createfood:apple_popsicle"
        }, {
            flavor: "minecraft:sweet_berries",
            popsicle: "createfood:berry_popsicle"
        }, {
            flavor: "minecraft:glow_berries",
            popsicle: "createfood:glow_berry_popsicle"
        }
    ];

    for (let popsicle of popsicles) {
        event.shaped(popsicle.popsicle, [
            " AA",
            "BAA",
            "CB "
        ], {
            A: popsicle.flavor,
            B: "minecraft:ice",
            C: "minecraft:stick"
        });
    }

    event.replaceInput({
        output: "ends_delight:chorus_fruit_popsicle"
    }, "ends_delight:chorus_fruit_grain", "#forge:chorus_fruit");

    event.remove("create_central_kitchen:emptying/dragon_breath_emptying");
    event.remove("create_central_kitchen:mixing/dragon_breath_soda");

    event.recipes.create.mixing(Fluid.of("create_central_kitchen:dragon_breath_soda", 250), [Fluid.of("garnished:dragon_breath", 250), "minecraft:sugar"]);

    event.remove("createfood:create/mixing/cream_cheese_fluid_from_mixing_heated_milk_vinegar");
    event.recipes.create.mixing(Fluid.of("createfood:cream_cheese", 1000), [Fluid.of("minecraft:milk", 500), Fluid.of("createfood:vinegar", 250), "createfood:salt"]).heated();
    event.recipes.create.mixing(Fluid.of("createfood:cream_cheese", 1000), [Fluid.of("minecraft:milk", 250), Fluid.of("createfood:vinegar", 250), "createfood:butter"]);

    event.remove("createfood:create/filling/milk_bottle_from_filling");

    event.remove({
        output: "garnished:honeyed_sweet_berries"
    });

    event.replaceInput({
        input: "garnished:honeyed_sweet_berries"
    }, "garnished:honeyed_sweet_berries", "createfood:honeyed_berries");

    event.remove("create:crushing/crimsite");
    event.remove("create:crushing/ochrum");
    event.remove("create:crushing/veridium");
    event.remove("create:crushing/asurine");

    event.replaceInput({
        input: "createfood:toast_slice"
    }, "createfood:toast_slice", "some_assembly_required:toasted_bread_slice");

    // Cultural Delight
    event.shapeless("culturaldelights:pork_wrap", [
        "corn_delight:tortilla",
        "#forge:cooked_pork",
        "createfood:apple_slice",
        "#forge:crops/cabbage"
    ]);

    event.shapeless("farmersdelight:mutton_wrap", [
        "corn_delight:tortilla",
        "#forge:cooked_mutton",
        "createfood:diced_onion",
        "#forge:crops/cabbage"
    ]);
    
    event.shapeless("culturaldelights:beef_burrito", [
        "corn_delight:tortilla",
        "#forge:cooked_beef",
        "#culturaldelights:avocados",
        "farmersdelight:cooked_rice"
    ]);

    event.recipes.farmersdelight.cooking([
            "corn_delight:tortilla_raw",
            "corn_delight:tortilla_raw",
            "#culturaldelights:avocados",
            "some_assembly_required:tomato_slices",
            "createfood:diced_onion"
        ],
        Item.of("culturaldelights:empanada",2),
        0.1,
        100
    );

    event.replaceInput({
        input: "garnished:ender_egg_shell"
    }, "garnished:ender_egg_shell", "ends_delight:half_dragon_egg_shell");

    event.remove({
        output: "culturaldelights:corn_cob_crate"
    });

    // Not a problem
    event.remove({
        output: "create_enchantment_industry:experience_rotor"
    });

});
ServerEvents.recipes(event => {

    event.remove("create:crushing/diorite");
    event.remove("create:crushing/tuff");

    const juices = [
        {
            flavor: "apple",
            fruit: "minecraft:apple"
        }, {
            flavor: "berry",
            fruit: "minecraft:sweet_berries"
        }, {
            flavor: "chorus_fruit",
            fruit: "minecraft:chorus_fruit"
        }, {
            flavor: "glow_berry",
            fruit: "minecraft:glow_berries"
        }
    ]

    for (let juice of juices) {
        event.remove("createfood:create/compacting/"+juice.flavor+"_juice_fluid_from_compacting"+(juice.flavor == "apple" ? "_water" : ""));
        event.remove("createfood:minecraft/crafting/"+juice.flavor+"_juice_bottle_from_crafting_alt");
        event.remove("createfood:create/mixing/"+juice.flavor+"_juice_fluid_from_mixing");
        event.recipes.create.compacting(Fluid.of("createfood:"+juice.flavor+"_juice", 250), [juice.fruit, Fluid.of("minecraft:water", 250)]);
    }

    event.remove({
        output: "farmersdelight:dumplings"
    });

    event.recipes.create.mixing(Item.of("createfood:dumpling_wrappers", 2), ["create:dough", Fluid.of("minecraft:water", 1000)]);
    event.recipes.farmersdelight.cooking(["createfood:dumpling_wrappers", "#forge:crops/cabbage", "#forge:onion", "#forge:raw_beef"], Item.of("farmersdelight:dumplings", 2), 1.0, 10);
    event.recipes.farmersdelight.cooking(["createfood:dumpling_wrappers", "#forge:crops/cabbage", "#forge:onion", "#forge:raw_pork"], Item.of("farmersdelight:dumplings", 2), 1.0, 10);
    event.recipes.farmersdelight.cooking(["createfood:dumpling_wrappers", "#forge:crops/cabbage", "#forge:onion", "#forge:raw_chicken"], Item.of("farmersdelight:dumplings", 2), 1.0, 10);
    event.recipes.farmersdelight.cooking(["createfood:dumpling_wrappers", "#forge:crops/cabbage", "#forge:onion", "minecraft:brown_mushroom"], Item.of("farmersdelight:dumplings", 2), 1.0, 200);

    // Subset conflicts resolved with added ingredients
    event.shapeless(Item.of("createfood:chocolate_sugar_dough", 3), [Item.of("createfood:sugar_dough", 3), "createfood:cocoa_powder"]);

    event.remove("createfood:create/mixing/condensed_milk_from_mixing_heated_milk");
    event.recipes.create.mixing(Fluid.of("createfood:condensed_milk", 250), [Fluid.of("minecraft:milk", 250), "#forge:sugar"]).heated();

    const chips = [
        "chocolate",
        "dark_chocolate",
        "white_chocolate",
        "butterscotch",
        "caramel",
        "toffee"
    ];

    for (let chip of chips) {
        let waffle = "createfood:"+chip+"_chip_waffle";
        let chipItem = "createfood:"+chip+"_chips";
        event.recipes.create.compacting(waffle, ["createfood:waffle", chipItem]);
        event.recipes.create.item_application(waffle, ["createfood:waffle", chipItem]);
    }

    // A lot of conflicts and duplicate recipes.  Fortunately, these are not necessary.
    event.remove({type: "minecraft:crafting_shaped", mod: "createfood"});

    // Too many subset conflicts
    event.recipes.create.mixing("garnished:baklava", [Fluid.of("create:honey", 250), "garnished:venerable_dough", Item.of("garnished:sweetened_walnut", 3)]).heated();
    event.recipes.create.mixing("garnished:cackling_pie", [
        Fluid.of("create:chocolate", 250),
        Fluid.of("create:honey", 250),
        Item.of("garnished:sweetened_chestnut", 2),
        Item.of("garnished:hazelnut", 3),
        Item.of("garnished:garnish_compound" ,2)
    ]).heated();

    event.recipes.create.mixing(
        "garnished:aching_tenebrous_clump",
        [
            Fluid.of("createfood:hot_chocolate", 1000),
            Item.of("garnished:chestnut", 4),
            "garnished:raw_tenebrous_meat"
        ]).heated();

    event.recipes.create.mixing(Fluid.of("createfood:hot_chocolate", 1000), Fluid.of("create:chocolate", 1000)).heated();
    event.recipes.create.mixing(Fluid.of("createfood:hot_dark_chocolate", 1000), Fluid.of("createfood:dark_chocolate", 1000)).heated();
    event.recipes.create.mixing(Fluid.of("createfood:hot_white_chocolate", 1000), Fluid.of("createfood:white_chocolate", 1000)).heated();
    event.remove("createfood:create/mixing/chocolate_fluid_from_mixing_alt");
    event.remove("createfood:create/mixing/dark_chocolate_fluid_from_mixing_alt");
    event.remove("createfood:create/mixing/white_chocolate_fluid_from_mixing_alt");

    // Pressing as the first stage conflicts with cookie crumbs
    event.remove({
        output: "garnished:cashew_cookie"
    });

    event.recipes.create.sequenced_assembly(
        ["garnished:cashew_cookie"],
        "minecraft:cookie",
        [
            event.recipes.create.deploying(
                "garnished:incomplete_cashew_cookie",
                ["garnished:incomplete_cashew_cookie", "garnished:cashew"]
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_cashew_cookie",
                ["garnished:incomplete_cashew_cookie", "garnished:cashew"]
            ),
            event.recipes.create.pressing(
                "garnished:incomplete_cashew_cookie",
                "garnished:incomplete_cashew_cookie"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_cashew_cookie",
                ["garnished:incomplete_cashew_cookie", "minecraft:sugar"]
            )
        ],
        "garnished:incomplete_cashew_cookie",
        1
    );

    // A conflict appears after we modify mutton wrap
    event.remove({
        output: "corn_delight:taco"
    });

    event.shapeless("corn_delight:taco", [
        "corn_delight:tortilla",
        "#forge:crops/cabbage",
        "createfood:diced_onion",
        IngredientHelper.or([
            "minecraft:cooked_beef",
            "farmersdelight:beef_patty",
            "minecraft:cooked_porkchop",
            "farmersdelight:cooked_bacon",
            "minecraft:cooked_chicken",
            "farmersdelight:cooked_chicken_cuts",
            "minecraft:cooked_cod",
            "farmersdelight:cooked_cod_slice",
            "minecraft:cooked_salmon",
            "farmersdelight:cooked_salmon_slice",
            "createfood:breakfast_sausages"
        ])
    ]);
});
//priority: 17
ServerEvents.recipes(event => {
    event.shaped(Item.of("kubejs:empty_jar", 4),[
        "A A",
        "AAA"
    ], {
        A: "minecraft:glass"
    });

    const jarFluids = [
        "createfood:apple_cream_frosting",
        "createfood:apple_jam",
        "createfood:apple_milkshake",
        "createfood:berry_cream_frosting",
        "createfood:berry_jam",
        "createfood:berry_milkshake",
        "createfood:blackstrap_molasses",
        "createfood:chocolate_cream_frosting",
        "createfood:chocolate_milkshake",
        "createfood:chorus_fruit_cream_frosting",
        "createfood:chorus_fruit_jam",
        "createfood:chorus_fruit_milkshake",
        "createfood:cream_frosting",
        "createfood:glow_berry_cream_frosting",
        "createfood:glow_berry_jam",
        "createfood:glow_berry_milkshake",
        "createfood:melon_cream_frosting",
        "createfood:melon_jam",
        "createfood:melon_milkshake",
        "createfood:milkshake",
        "createfood:molasses",
        "createfood:ube_cream_frosting"
    ];

    const emptyJar = "kubejs:empty_jar";

    for (let jarFluid of jarFluids) {
        let jarItem = jarFluid + "_bottle";
        let jarBucket = jarFluid + "_bucket";
        event.remove([{
            output: jarItem,
            type: "minecraft:crafting_shapeless"
        }, {
            output: jarBucket,
            type: "minecraft:crafting_shapeless"
        }, {
            input: jarItem,
            type: "create:emptying"
        }, {
            output: jarItem,
            type: "create:filling"
        }, {
            output: jarItem,
            input: "farmersdelight:milk_bottle"
        }]);

        event.shapeless("2x "+jarItem, [jarBucket, emptyJar, emptyJar]);
        event.shapeless(jarBucket, ["minecraft:bucket", jarItem, jarItem]);

        event.recipes.create.filling(jarItem, [Fluid.of(jarFluid, 500), emptyJar]);
        event.recipes.create.emptying([Fluid.of(jarFluid, 500), emptyJar], jarItem);

        event.replaceInput({
            output: jarItem
        }, "minecraft:glass_bottle", emptyJar);
    }

    event.recipes.create.filling("kubejs:mayonnaise_jar", [Fluid.of("kubejs:mayonnaise", 500), emptyJar]);
    event.recipes.create.emptying([Fluid.of("kubejs:mayonnaise", 500), emptyJar], "kubejs:mayonnaise_jar");
    event.recipes.create.filling("kubejs:peanut_butter_jar", [Fluid.of("kubejs:peanut_butter", 500), emptyJar]);
    event.recipes.create.emptying([Fluid.of("kubejs:peanut_butter", 500), emptyJar], "kubejs:peanut_butter_jar");

    const jams = [
        ["createfood:apple_jam_bottle", "#forge:apple"],
        ["createfood:berry_jam_bottle", "minecraft:sweet_berries"],
        ["createfood:chorus_fruit_jam_bottle", "minecraft:chorus_fruit"],
        ["createfood:glow_berry_jam_bottle", "minecraft:glow_berries"],
        ["createfood:melon_jam_bottle", "#forge:melon"]
    ];

    for (let jam of jams) {
        event.remove({
            output: jam[0],
            type: "farmersdelight:cooking"
        });

        event.recipes.farmersdelight.cooking([jam[1], "#forge:sugar"], jam[0], 0.45, 250, emptyJar);
    }

    const creamFrostings = [
        ["createfood:apple_cream_frosting", "#forge:apple"],
        ["createfood:berry_cream_frosting", "minecraft:sweet_berries"],
        ["createfood:chocolate_cream_frosting", "createfood:cocoa_powder"],
        ["createfood:chorus_fruit_cream_frosting", "minecraft:chorus_fruit"],
        ["createfood:glow_berry_cream_frosting", "minecraft:glow_berries"],
        ["createfood:melon_cream_frosting", "#forge:melon"]
    ];

    for (let creamFrosting of creamFrostings) {
        let bucket = creamFrosting[0]+"_bucket";
        event.remove([{
            output: Fluid.of(creamFrosting[0]),
            type: "create:mixing"
        }, {
            output: bucket,
            type: "create:mixing"
        }]);

        event.recipes.create.mixing(Fluid.of(creamFrosting[0], 1000), [
            Item.of("createfood:cream_cheese", 2),
            Ingredient.of("#forge:sugar", 2),
            Ingredient.of(creamFrosting[1], 2)
        ]);

        event.recipes.create.mixing(Fluid.of(creamFrosting[0], 1000), [
            Fluid.of("createfood:cream_frosting", 1000),
            Ingredient.of(creamFrosting[1], 2)
        ]);
    }

    event.remove([{
        output: Fluid.of("createfood:cream_frosting"),
        type: "create:mixing"
    }, {
        output: "createfood:cream_frosting_bucket",
        type: "create:mixing"
    }]);

    event.recipes.create.mixing(Fluid.of("createfood:cream_frosting", 1000), [
        Item.of("createfood:cream_cheese", 2),
        Ingredient.of("#forge:sugar", 2)
    ]);
});
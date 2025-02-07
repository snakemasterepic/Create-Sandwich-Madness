ServerEvents.recipes(event => {
    event.replaceInput({
        output: "garnished:sturdy_waffle"
    }, "#forge:dough", "createfood:waffle");

    event.replaceInput({
        output: [
            "corn_delight:nachos_block",
            "farmersdelight:shepherds_pie_block"
        ]
    }, "minecraft:milk_bucket", "createfood:cheese_block");

    event.replaceInput([{
        output: "farmersdelight:stuffed_potato"
    }], "#forge:milk", "createfood:cheese_slice");

    // Caramel popcorn should require caramel
    event.remove({
        output: "corn_delight:caramel_popcorn"
    });

    event.recipes.farmersdelight.cooking(
        [
            "corn_delight:popcorn",
            "kubejs:measuring_cup_caramel"],
            "corn_delight:caramel_popcorn",
            0.35, 200);
    
    event.recipes.create.filling(
        "corn_delight:caramel_popcorn",
        [
            "corn_delight:popcorn",
            Fluid.of("createfood:caramel", 125)
        ]);
    
    event.recipes.create.filling(
        "corn_delight:classic_corn_dog",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "corn_delight:corn_dog"]
    );

    event.remove("garnished:compacting/prickly_pear");
    event.recipes.create.compacting("garnished:prickly_pear", "minecraft:cactus");
    
    event.recipes.create.mixing("culturaldelights:pickle", ["culturaldelights:cucumber", Fluid.of("createfood:vinegar", 250), "createfood:salt"]);
    
    event.recipes.farmersdelight.cooking(
        [
            "farmersdelight:milk_bottle",
            "farmersdelight:milk_bottle"
        ],
        "createfood:milk_powder",
        0.25, 70);

    event.remove({
        type: "create:mixing",
        input: [
            "minecraft:bucket",
            "minecraft:glass_bottle",
            "kubejs:empty_jar",
            "farmersdelight:milk_bottle"
        ]
    });

    event.remove("createfood:minecraft/crafting/shaped/vegetable_oil_bucket_from_crafting");

    event.recipes.create.mixing(Fluid.of("createfood:slime", 1000), ["minecraft:slime_block"]).heated();

    // Soul roots need to be renewable (AFAICT they aren't)
    event.recipes.create.haunting(["garnished:soul_roots"], ["minecraft:grass"]);

    event.recipes.create.milling("garnished:incandescent_petal", "garnished:incandescent_lily");
    event.recipes.create.milling("garnished:pansophical_petal", "garnished:pansophical_daisy");

    event.remove("farmersdelight:pie_crust");
    event.remove("farmersdelight:integration/create/mixing/pie_crust_from_mixing");
    event.remove("farmersdelight:integration/create/filling/chocolate_pie");

    const colors = [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "white",
        "light_gray",
        "gray",
        "black",
        "brown"
    ];

    for (let color of colors) {
        let fluid = color === "white" ? "createfood:gelatin_mix" : "createfood:"+color+"_gelatin_mix";
        let dye = "minecraft:"+color+"_dye";
        for (let color2 of colors) {
            if (color2 === color) {
                continue;
            }

            let fluid2 = color2 === "white" ? "createfood:gelatin_mix" : "createfood:"+color2+"_gelatin_mix";
            event.recipes.create.mixing(Fluid.of(fluid, 1000), [Fluid.of(fluid2, 1000), dye]);
        }
    }

    // Create Food already has this covered
    event.remove("farmersdelight:cooking/squid_ink_pasta");
});
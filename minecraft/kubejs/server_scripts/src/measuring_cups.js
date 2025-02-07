ServerEvents.recipes(event => {
    event.shaped("kubejs:measuring_cup", [
        "A A",
        " A "
    ], {
        A: "minecraft:iron_nugget"
    });

    const measuringCupFluids = [
        "createfood:apple_cream_frosting",
        "createfood:apple_jam",
        "createfood:berry_cream_frosting",
        "createfood:berry_jam",
        "createfood:caramel",
        "createfood:chocolate_cream_frosting",
        "createfood:chorus_fruit_cream_frosting",
        "createfood:chorus_fruit_jam",
        "createfood:cream_frosting",
        "createfood:glow_berry_cream_frosting",
        "createfood:glow_berry_jam",
        "createfood:melon_cream_frosting",
        "createfood:melon_jam",
        "createfood:molasses",
        "kubejs:peanut_butter",
        "createfood:sour_cream",
        "createfood:vegetable_oil",
        "createfood:vinegar",
        "kubejs:mayonaise",
    ];

    const jarFluids = [
        "createfood:apple_cream_frosting",
        "createfood:apple_jam",
        "createfood:berry_cream_frosting",
        "createfood:berry_jam",
        "createfood:chocolate_cream_frosting",
        "createfood:chorus_fruit_cream_frosting",
        "createfood:chorus_fruit_jam",
        "createfood:cream_frosting",
        "createfood:glow_berry_cream_frosting",
        "createfood:glow_berry_jam",
        "createfood:melon_cream_frosting",
        "createfood:melon_jam",
        "createfood:molasses",
    ];

    const measuringCup = "kubejs:measuring_cup";

    for (let fluid of measuringCupFluids) {
        let cup = "kubejs:measuring_cup_" + fluid.split(":")[1];
        let bucket = fluid + "_bucket";
        event.shapeless("8x "+cup, [bucket, "8x "+measuringCup]);
        event.shapeless(bucket, ["minecraft:bucket", "8x "+cup]);

        event.recipes.create.filling(cup, [Fluid.of(fluid, 125), measuringCup]);
        event.recipes.create.emptying([Fluid.of(fluid, 125), measuringCup], cup);

        if (jarFluids.indexOf(fluid) != -1) {
            let jar = fluid+"_bottle";
            event.shapeless("4x "+cup, [jar, "4x "+measuringCup]);
            event.shapeless(jar, ["kubejs:empty_jar", "4x "+cup]);
            event.shapeless(bucket, ["minecraft:bucket", jar, "4x "+cup]);
        }
    }
})
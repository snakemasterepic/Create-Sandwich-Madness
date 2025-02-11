//priority: 18
ServerEvents.recipes(event => {
    const ice_creams = [
        "createfood:ice_cream",
        "createfood:apple_ice_cream",
        "createfood:berry_ice_cream",
        "createfood:chocolate_ice_cream",
        "createfood:chorus_fruit_ice_cream",
        "createfood:glow_berry_ice_cream",
        "createfood:melon_ice_cream"
    ]

    event.shapeless("kubejs:ice_cream_scoop", ["minecraft:stick"]);

    for (let ice_cream of ice_creams) {
        let scoop = ice_cream + "_stick";
        let bowl = ice_cream + "_bowl";
        let bucket = ice_cream + "_bucket";
        let cone = ice_cream+"_cone";
        event.remove([{
            output: scoop
        }, {
            output: bowl
        }, {
            input: scoop
        }, {
            input: bowl
        }, {
            output: cone
        }]);

        event.recipes.create.filling(scoop, ["kubejs:ice_cream_scoop", Fluid.of(ice_cream, 50)]);
        event.recipes.create.emptying(["kubejs:ice_cream_scoop", Fluid.of(ice_cream, 50)], scoop);

        event.recipes.create.filling(bowl, ["minecraft:bowl", Fluid.of(ice_cream, 250)]);
        event.recipes.create.emptying(["minecraft:bowl", Fluid.of(ice_cream, 250)], bowl);

        event.recipes.create.filling(cone, ["createfood:waffle_cone", Fluid.of(ice_cream, 250)]);

        event.shapeless(bowl, ["minecraft:bowl", Item.of(scoop, 5)]);
        event.shapeless(Item.of(scoop, 5), [bowl, Item.of("kubejs:ice_cream_scoop", 5)]);
    }

    event.remove([{
        output: "createfood:chocolate_graham_cracker_ice_cream"
    }, {
        output: "createfood:ice_cream_sandwich"
    }, {
        output: "createfood:chocolate_graham_cracker_neapolitan_scoop_1"
    }, {
        output: "createfood:chocolate_graham_cracker_neapolitan_scoop_2"
    }, {
        output: "createfood:chocolate_graham_cracker_neapolitan_scoop_3"
    }, {
        output: "createfood:ice_cream_sandwich_neapolitan"
    }]);

    event.shapeless("createfood:chocolate_graham_cracker_ice_cream", ["createfood:chocolate_graham_cracker", Item.of("createfood:ice_cream_stick", 3)]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_ice_cream", 5), [Item.of("createfood:chocolate_graham_cracker", 5), Item.of("createfood:ice_cream_bowl", 3)]);
    event.shapeless("createfood:ice_cream_sandwich", [Item.of("createfood:chocolate_graham_cracker", 2), Item.of("createfood:ice_cream_stick", 3)]);
    event.shapeless("createfood:ice_cream_sandwich", ["createfood:chocolate_graham_cracker_ice_cream", "createfood:chocolate_graham_cracker"]);

    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_1", ["createfood:chocolate_graham_cracker", "createfood:chocolate_ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_1", 5), [Item.of("createfood:chocolate_graham_cracker", 5), "createfood:chocolate_ice_cream_bowl"]);
    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_2", ["createfood:chocolate_graham_cracker", "createfood:chocolate_ice_cream_stick", "createfood:ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_2", 5), [Item.of("createfood:chocolate_graham_cracker", 5), "createfood:chocolate_ice_cream_bowl", "createfood:ice_cream_bowl"]);
    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_3", ["createfood:chocolate_graham_cracker", "createfood:chocolate_ice_cream_stick", "createfood:ice_cream_stick", "createfood:berry_ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_3", 5), [Item.of("createfood:chocolate_graham_cracker", 5), "createfood:chocolate_ice_cream_bowl", "createfood:ice_cream_bowl", "createfood:berry_ice_cream_bowl"]);
    event.shapeless("createfood:ice_cream_sandwich_neapolitan", [Item.of("createfood:chocolate_graham_cracker", 2), "createfood:chocolate_ice_cream_stick", "createfood:ice_cream_stick", "createfood:berry_ice_cream_stick"]);
    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_2", ["createfood:chocolate_graham_cracker_neapolitan_scoop_1", "createfood:ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_2", 5), [Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_1", 5), "createfood:ice_cream_bowl"]);
    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_3", ["createfood:chocolate_graham_cracker_neapolitan_scoop_1", "createfood:ice_cream_stick", "createfood:berry_ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_3", 5), [Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_1", 5), "createfood:ice_cream_bowl", "createfood:berry_ice_cream_bowl"]);
    event.shapeless("createfood:ice_cream_sandwich_neapolitan", ["createfood:chocolate_graham_cracker_neapolitan_scoop_1", "createfood:chocolate_graham_cracker", "createfood:ice_cream_stick", "createfood:berry_ice_cream_stick"]);
    event.shapeless("createfood:chocolate_graham_cracker_neapolitan_scoop_3", ["createfood:chocolate_graham_cracker_neapolitan_scoop_2", "createfood:berry_ice_cream_stick"]);
    event.shapeless(Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_3", 5), [Item.of("createfood:chocolate_graham_cracker_neapolitan_scoop_2", 5), "createfood:berry_ice_cream_bowl"]);
    event.shapeless("createfood:ice_cream_sandwich_neapolitan", ["createfood:chocolate_graham_cracker_neapolitan_scoop_2", "createfood:chocolate_graham_cracker", "createfood:berry_ice_cream_stick"]);
    event.shapeless("createfood:ice_cream_sandwich_neapolitan", ["createfood:chocolate_graham_cracker_neapolitan_scoop_3", "createfood:chocolate_graham_cracker"]);

    event.recipes.create.filling("createfood:chocolate_graham_cracker_ice_cream", ["createfood:chocolate_graham_cracker", Fluid.of("createfood:ice_cream", 150)]);
    event.recipes.create.deploying("createfood:ice_cream_sandwich", ["createfood:chocolate_graham_cracker_ice_cream", "createfood:chocolate_graham_cracker"]);
    
    event.recipes.create.filling("createfood:chocolate_graham_cracker_neapolitan_scoop_1", ["createfood:chocolate_graham_cracker", Fluid.of("createfood:chocolate_ice_cream", 50)]);
    event.recipes.create.filling("createfood:chocolate_graham_cracker_neapolitan_scoop_2", ["createfood:chocolate_graham_cracker_neapolitan_scoop_1", Fluid.of("createfood:ice_cream", 50)]);
    event.recipes.create.filling("createfood:chocolate_graham_cracker_neapolitan_scoop_3", ["createfood:chocolate_graham_cracker_neapolitan_scoop_2", Fluid.of("createfood:berry_ice_cream", 50)]);
    event.recipes.create.deploying("createfood:ice_cream_sandwich_neapolitan", ["createfood:chocolate_graham_cracker_neapolitan_scoop_3", "createfood:chocolate_graham_cracker"]);

    event.recipes.create.mixing(Fluid.of("createfood:apple_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "#forge:apple"]);
    event.recipes.create.mixing(Fluid.of("createfood:berry_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "minecraft:sweet_berries"]);
    event.recipes.create.mixing(Fluid.of("createfood:chocolate_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "createfood:cocoa_powder"]);
    event.recipes.create.mixing(Fluid.of("createfood:chorus_fruit_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "#forge:chorus_fruit"]);
    event.recipes.create.mixing(Fluid.of("createfood:glow_berry_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "minecraft:glow_berries"]);
    event.recipes.create.mixing(Fluid.of("createfood:melon_milkshake", 1000), [Fluid.of("createfood:milkshake", 1000), "#forge:melon"]);
});
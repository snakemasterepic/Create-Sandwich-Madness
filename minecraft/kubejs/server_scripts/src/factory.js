
ServerEvents.recipes(event => {
    event.replaceInput({
        output: "create:brass_hand"
    }, "create:brass_sheet", "create:copper_sheet");

    event.remove({
        output: "create:deployer"
    });

    event.shaped("create:deployer", [
        "A",
        "B",
        "C"
    ], {
        A: "create:shaft",
        B: "create:andesite_casing",
        C: "create:brass_hand"
    });

    event.remove({
        output: "create:sequenced_gearshift"
    });

    event.shapeless("create:sequenced_gearshift", ["create:gearshift", "create_connected:control_chip"]);

    event.remove({
        output: "create:elevator_pulley"
    });

    event.shapeless("create:elevator_pulley", ["create:rope_pulley", "create_connected:control_chip"]);

    event.remove({
        output: "create:controls"
    });

    event.shaped("create:controls", [
        " A ",
        "BCD"
    ], {
        A: "minecraft:lever",
        B: "create_connected:control_chip",
        C: "create:railway_casing",
        D: "create:precision_mechanism"
    });

    event.remove({
        output: "create_power_loader:empty_brass_chunk_loader"
    });

    event.recipes.create.mechanical_crafting("create_power_loader:empty_brass_chunk_loader", [
        "AAAAA",
        "A   A",
        "A B A",
        "CDFEC",
        "CCFCC"
    ], {
        A: "#forge:glass",
        B: "minecraft:respawn_anchor",
        C: "create:brass_casing",
        D: "create:precision_mechanism",
        E: "create_connected:control_chip",
        F: "create:shaft"
    });

    event.replaceInput({
        output: "create:wand_of_symmetry"
    }, "create:precision_mechanism", "create_connected:control_chip");

    event.replaceInput({
        output: "create_connected:overstress_clutch"
    }, "create:electron_tube", "create:stressometer");

    // Flip around the item vault and silo recipes for the way that is more visually intuitive
    event.remove("create:crafting/kinetics/item_vault");
    event.remove("create_connected:crafting/kinetics/item_silo");
    event.shaped("create:item_vault", ["ABA"], {
        A: "create:iron_sheet",
        B: "minecraft:barrel"
    });
    event.shaped("create_connected:item_silo", ["A", "B", "A"], {
        A: "create:iron_sheet",
        B: "minecraft:barrel"
    });

    event.shaped("createfood:cloth_filter", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:stick",
        B: "minecraft:string"
    });

    event.replaceInput({
        output: "create:weighted_ejector"
    }, "create:golden_sheet", "create:precision_mechanism");
});

ServerEvents.tags("item", event => {
    event.remove("create:blaze_burner_fuel/special", "garnished:peanut_oil_bucket");
    event.add("create:blaze_burner_fuel/regular", "garnished:peanut_oil_bucket");
});
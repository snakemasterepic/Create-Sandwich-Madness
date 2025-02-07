const sets = [
    ["minecraft:oak_planks", "createcasing:oak_cogwheel", "createcasing:oak_large_cogwheel"],
    ["minecraft:birch_planks", "createcasing:birch_cogwheel", "createcasing:birch_large_cogwheel"],
    ["minecraft:spruce_planks", "create:cogwheel", "create:large_cogwheel"],
    ["minecraft:jungle_planks", "createcasing:jungle_cogwheel", "createcasing:jungle_large_cogwheel"],
    ["minecraft:acacia_planks", "createcasing:acacia_cogwheel", "createcasing:acacia_large_cogwheel"],
    ["minecraft:dark_oak_planks", "createcasing:dark_oak_cogwheel", "createcasing:dark_oak_large_cogwheel"],
    ["minecraft:mangrove_planks", "createcasing:mangrove_cogwheel", "createcasing:mangrove_large_cogwheel"],
    ["minecraft:cherry_planks", "createcasing:cherry_cogwheel", "createcasing:cherry_large_cogwheel"],
    ["minecraft:bamboo_planks", "createcasing:bamboo_cogwheel", "createcasing:bamboo_large_cogwheel"],
    ["minecraft:crimson_planks", "createcasing:crimson_cogwheel", "createcasing:crimson_large_cogwheel"],
    ["minecraft:warped_planks", "createcasing:warped_cogwheel", "createcasing:warped_large_cogwheel"],
];

ServerEvents.recipes(event => {
    
    event.replaceInput({
        input: "create:cogwheel"
    }, "create:cogwheel", "#kubejs:cogwheels");

    event.replaceInput({
        input: "create:large_cogwheel"
    }, "create:large_cogwheel", "#kubejs:large_cogwheels");

    event.remove({
        output: "create:cogwheel",
        type: "minecraft:crafting"
    });

    event.remove({
        output: "create:large_cogwheel"
    });

    event.remove("create:sequenced_assembly/precision_mechanism");
    event.recipes.create.sequenced_assembly(
        ["create:precision_mechanism"],
        "create:golden_sheet",
        [
            event.recipes.create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#kubejs:cogwheels"]),
            event.recipes.create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#kubejs:large_cogwheels"]),
            event.recipes.create.deploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "minecraft:iron_nugget"]),
        ],
        "create:incomplete_precision_mechanism",
        5
    );

    for (let set of sets) {
        event.shapeless(set[1], ["create:shaft", set[0]]);
        event.shapeless(set[2], ["create:shaft", "2x "+set[0]]);
        event.shapeless(set[2], [set[1], set[0]]);
    }
});

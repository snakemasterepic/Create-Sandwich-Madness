
ServerEvents.recipes(event => {
    // Do not use createfood's bread slices (except for pumpernickel)
    event.remove({
        output: 'createfood:bread_slice'
    });

    // Overhaul burger buns (we have to anyway because of a conflict)
    event.remove({
        output: "some_assembly_required:burger_bun"
    });

    event.smelting("some_assembly_required:burger_bun", "kubejs:raw_burger_bun");
    event.smoking("some_assembly_required:burger_bun", "kubejs:raw_burger_bun");
    event.shapeless("2x kubejs:raw_burger_bun", ["createfood:salt_dough", "#forge:seeds"]);

    event.remove("createfood:farmersdelight/cutting/pumpernickel_bread_slice_from_cutting");
    event.recipes.farmersdelight.cutting("createfood:pumpernickel_bread", "#farmersdelight:tools/knives", Item.of("createfood:pumpernickel_bread_slice", 4));
});

ServerEvents.tags("item", event => {
    // Ensure that sandwich quests require the exact sandwich.
    event.add("ftbquests:match_nbt", "some_assembly_required:sandwich");
    event.add("ftbquests:match_nbt", "minecraft:shulker_box");
    // Extra bread
    event.add("some_assembly_required:sandwich_bread", "createfood:pumpernickel_bread_slice");
    event.add("some_assembly_required:sandwich_bread", "createfood:pumpernickel_toast_slice");
});
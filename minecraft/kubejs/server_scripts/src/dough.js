//priority: 25
ServerEvents.recipes(event => {
    event.remove([{
        input: "farmersdelight:wheat_dough"
    }, {
        output: "farmersdelight:wheat_dough"
    }]);

    event.shapeless("farmersdelight:wheat_dough", [Item.of("minecraft:wheat", 2), "minecraft:water_bucket"]);
    event.shapeless(Item.of("farmersdelight:wheat_dough", 2), [Item.of("minecraft:wheat", 4), "minecraft:water_bucket"]);
    event.shapeless(Item.of("farmersdelight:wheat_dough", 3), [Item.of("minecraft:wheat", 6), "minecraft:water_bucket"]);
    event.shapeless(Item.of("farmersdelight:wheat_dough", 4), [Item.of("minecraft:wheat", 8), "minecraft:water_bucket"]);
    event.remove("minecraft:bread");
    event.smelting("minecraft:bread", "farmersdelight:wheat_dough", 0.2);
    event.smoking("minecraft:bread", "farmersdelight:wheat_dough", 0.2);
    event.campfireCooking("minecraft:bread", "farmersdelight:wheat_dough", 0, 600);
    
    event.replaceInput([{
        output: "createfood:butter_dough"
    }, {
        output: "createfood:chocolate_sugar_dough"
    }, {
        output: "createfood:pumpernnickel_dough"
    }, {
        output: "createfood:salt_dough"
    }, {
        output: "createfood:sugar_dough"
    }], "minecraft:wheat", "create:wheat_flour");
});

ServerEvents.tags("item", event => {
    event.removeAllTagsFrom("farmersdelight:wheat_dough");
})
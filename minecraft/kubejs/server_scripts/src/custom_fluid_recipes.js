//priority: 26
ServerEvents.recipes(event => {

    event.remove("garnished:mixing/peanut_oil");

    event.recipes.create.mixing(
        Fluid.of("garnished:peanut_oil", 250),
        [
            Item.of("garnished:cracked_peanut", 1),
            Fluid.of("minecraft:water", 250)
        ]).heated();
    
    event.recipes.create.mixing(
        Fluid.of("kubejs:flowing_peanut_butter", 1000),
        [
            Item.of("garnished:cracked_peanut", 2),
            Item.of("createfood:salt", 1),
            Fluid.of("garnished:peanut_oil", 500),
            Fluid.of("createfood:vegetable_oil", 125)
        ]).heated();
    
    event.recipes.create.mixing(
        Fluid.of("kubejs:mayonnaise", 1000),
        [
            Item.of("minecraft:egg", 4),
            Fluid.of("createfood:vegetable_oil", 1000),
            Fluid.of("createfood:vinegar", 125)
        ]);
});
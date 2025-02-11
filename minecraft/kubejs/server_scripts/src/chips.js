//priority: 33
ServerEvents.recipes(event => {
    event.remove({
        output: "createfood:potato_chips"
    });

    event.recipes.create.mixing("createfood:potato_chips", ["createfood:sliced_potato", Fluid.of("createfood:vegetable_oil", 125)]).heated();

    event.shapeless("createfood:tortilla_chip_bowl", ["minecraft:bowl", Item.of("corn_delight:tortilla_chip", 2)]);
});
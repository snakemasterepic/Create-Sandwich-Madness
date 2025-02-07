ServerEvents.recipes(event => {
    event.remove([
        {
            output: "createfood:dark_chocolate_glazed_berries"
        }, {
            output: "createfood:white_chocolate_glazed_berries"
        }, {
            output: "createfood:honeyed_berries"
        }, {
            output: "createfood:caramel_glazed_berries"
        }
    ]);
    event.recipes.create.filling("createfood:dark_chocolate_glazed_berries", ["minecraft:sweet_berries", Fluid.of("createfood:dark_chocolate", 250)]);
    event.recipes.create.filling("createfood:white_chocolate_glazed_berries", ["minecraft:sweet_berries", Fluid.of("createfood:white_chocolate", 250)]);
    event.recipes.create.filling("createfood:honeyed_berries", ["minecraft:sweet_berries", Fluid.of("create:honey", 250)]);
    event.recipes.create.filling("createfood:caramel_glazed_berries", ["minecraft:sweet_berries", Fluid.of("createfood:caramel", 250)]);

    event.replaceInput({output: "garnished:nut_mix"}, "garnished:honeyed_sweet_berries", "garnished:garnished_sweet_berries");
    event.replaceInput({output: "garnished:chocolate_glazed_nut_mix"}, "garnished:honeyed_sweet_berries", "create:chocolate_glazed_berries");
    event.replaceInput({output: "garnished:salad"}, "garnished:honeyed_sweet_berries", "minecraft:sweet_berries");
});
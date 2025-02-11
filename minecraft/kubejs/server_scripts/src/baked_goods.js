//priority: 36
ServerEvents.recipes(event => {
    event.remove("createfood:create/filling/sweet_roll_from_filling_cream_frosting");
    event.remove("createfood:create/filling/chocolate_sweet_roll_from_filling_cream_frosting");
    event.remove("createfood:create/filling/chocolate_frosted_sweet_roll_from_filling_chocolate_cream_frosting");
    event.remove("createfood:create/filling/chocolate_frosted_chocolate_sweet_roll_from_filling_chocolate_cream_frosting");
    event.remove("createfood:create/filling/honeyed_sweet_roll_from_filling_honey");
    event.remove("createfood:create/filling/honeyed_chocolate_sweet_roll_from_filling_honey");
    event.remove("createfood:create/filling/caramel_glazed_sweet_roll_from_filling_caramel");
    event.remove("createfood:create/filling/caramel_glazed_chocolate_sweet_roll_from_filling_caramel");
    event.remove("createfood:minecraft/crafting/sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/chocolate_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/honeyed_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/honeyed_chocolate_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/caramel_glazed_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/caramel_glazed_chocolate_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/chocolate_frosted_sweet_roll_from_crafting");
    event.remove("createfood:minecraft/crafting/chocolate_frosted_chocolate_sweet_roll_from_crafting");

    event.recipes.create.filling("create:sweet_roll", ["createfood:sweet_roll_base", Fluid.of("createfood:cream_frosting", 250)]);
    event.recipes.create.filling("createfood:chocolate_sweet_roll", ["createfood:chocolate_sweet_roll_base", Fluid.of("createfood:cream_frosting", 250)]);
    event.recipes.create.filling("createfood:honeyed_sweet_roll", ["createfood:sweet_roll_base", Fluid.of("create:honey", 250)]);
    event.recipes.create.filling("createfood:honeyed_chocolate_sweet_roll", ["createfood:chocolate_sweet_roll_base", Fluid.of("create:honey", 250)]);
    event.recipes.create.filling("createfood:caramel_glazed_sweet_roll", ["createfood:sweet_roll_base", Fluid.of("createfood:caramel", 250)]);
    event.recipes.create.filling("createfood:caramel_glazed_chocolate_sweet_roll", ["createfood:chocolate_sweet_roll_base", Fluid.of("createfood:caramel", 250)]);
    event.recipes.create.filling("createfood:chocolate_frosted_sweet_roll", ["createfood:sweet_roll_base", Fluid.of("createfood:chocolate_cream_frosting", 250)]);
    event.recipes.create.filling("createfood:chocolate_frosted_chocolate_sweet_roll", ["createfood:chocolate_sweet_roll_base", Fluid.of("createfood:chocolate_cream_frosting", 250)]);

    const frostings = [
        "apple",
        "berry",
        "chorus_fruit",
        "glow_berry",
        "melon"
    ];

    for (let frosting of frostings) {
        event.remove("createfood:create/filling/"+frosting+"_cream_frosted_sweet_roll_from_filling_"+frosting+"_cream_frosting");
        event.remove("createfood:create/filling/"+frosting+"_cream_frosted_chocolate_sweet_roll_from_filling_"+frosting+"_cream_frosting");
        event.remove("createfood:minecraft/crafting/"+frosting+"_cream_frosted_sweet_roll_from_crafting");
        event.remove("createfood:minecraft/crafting/"+frosting+"_cream_frosted_chocolate_sweet_roll_from_crafting");

        let fluid = "createfood:"+frosting+"_cream_frosting";

        event.recipes.create.filling("createfood:"+frosting+"_cream_frosted_sweet_roll", ["createfood:sweet_roll_base", Fluid.of(fluid, 250)]);
        event.recipes.create.filling("createfood:"+frosting+"_cream_frosted_chocolate_sweet_roll", ["createfood:chocolate_sweet_roll_base", Fluid.of(fluid, 250)]);
    }
});
ServerEvents.recipes(event => {
    event.remove("create:mixing/chocolate");

    event.remove("garnished:mixing/chocolate_from_hazelnut");
    event.remove("create:compacting/chocolate");
    event.remove("createfood:create/compacting/bar_of_dark_chocolate_from_compacting_dark_chocolate");
    event.remove("createfood:create/mixing/dark_chocolate_fluid_from_mixing_melting");
    event.remove("createfood:create/mixing/dark_chocolate_fluid_from_mixing_melting_alt");
    event.remove("createfood:create/compacting/bar_of_white_chocolate_from_compacting_white_chocolate");
    event.remove("createfood:create/mixing/white_chocolate_fluid_from_mixing_melting");
    event.remove("createfood:create/mixing/white_chocolate_fluid_from_mixing_melting_alt");
    event.remove("createfood:create/mixing/chocolate_fluid_from_mixing_melting");
    event.remove("createfood:create/mixing/cacao_butter_bucket_from_mixing_heated");
    event.remove("createfood:farmersdelight/cooking/cacao_butter_bucket_from_cooking");
    event.remove("createfood:create/compacting/cacao_butter_from_compacting_cacao_butter");
    
    event.recipes.create.compacting("create:bar_of_chocolate", [Fluid.of("create:chocolate", 250)]);
    event.recipes.create.compacting(Item.of("createfood:cacao_butter"), [Fluid.of("createfood:cacao_butter", 250)]);
    event.recipes.create.mixing(Fluid.of("createfood:cacao_butter", 250), [Item.of("createfood:cacao_butter", 1)]).heated();
    event.recipes.farmersdelight.cooking(["createfood:cacao_butter", "createfood:cacao_butter", "createfood:cacao_butter", "createfood:cacao_butter"], "createfood:cacao_butter_bucket", 0.5, 40, "minecraft:bucket");
    event.recipes.create.mixing(Fluid.of("create:chocolate", 125), ["createfood:hollow_chocolate"]).heated();
    event.recipes.create.compacting("createfood:bar_of_dark_chocolate", [Fluid.of("createfood:dark_chocolate", 250)]);
    event.recipes.create.mixing(Fluid.of("createfood:dark_chocolate", 250), ["createfood:bar_of_dark_chocolate"]).heated();
    event.recipes.create.mixing(Fluid.of("createfood:dark_chocolate", 125), ["createfood:hollow_dark_chocolate"]).heated();
    event.recipes.create.compacting("createfood:bar_of_white_chocolate", [Fluid.of("createfood:white_chocolate", 250)]);
    event.recipes.create.mixing(Fluid.of("createfood:white_chocolate", 250), ["createfood:bar_of_white_chocolate"]).heated();
    event.recipes.create.mixing(Fluid.of("createfood:white_chocolate", 125), ["createfood:hollow_white_chocolate"]).heated();

    event.remove("createfood:farmersdelight/cooking/chocolate_bottle_from_cooking");
    event.recipes.farmersdelight.cooking(["createfood:hollow_chocolate", "createfood:hollow_chocolate"], "createfood:chocolate_bottle", 0.25, 100, "minecraft:glass_bottle");
    event.remove("createfood:farmersdelight/cooking/dark_chocolate_bottle_from_cooking");
    event.recipes.farmersdelight.cooking(["createfood:hollow_dark_chocolate", "createfood:hollow_dark_chocolate"], "createfood:dark_chocolate_bottle", 0.25, 100, "minecraft:glass_bottle");
    event.remove("createfood:farmersdelight/cooking/white_chocolate_bottle_from_cooking");
    event.recipes.farmersdelight.cooking(["createfood:hollow_white_chocolate", "createfood:hollow_white_chocolate"], "createfood:white_chocolate_bottle", 0.25, 100, "minecraft:glass_bottle");

    event.remove("createfood:create/filling/graham_cracker_chocolate_from_filling_chocolate");
    event.recipes.create.filling("createfood:graham_cracker_chocolate", ["createfood:graham_cracker", Fluid.of("create:chocolate", 125)]);

    event.remove("createfood:create/pressing/cocoa_powder_from_pressing");
    event.recipes.create.pressing(Item.of("createfood:cocoa_powder", 4), "createfood:pressed_cocoa");
});
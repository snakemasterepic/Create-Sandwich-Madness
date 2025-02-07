ServerEvents.recipes(event => {
    event.remove("farmersdelight:cooking/pasta_with_meatballs");

    event.recipes.farmersdelight.cooking(
        [
            "#forge:pasta",
            "farmersdelight:tomato_sauce",
            "createfood:small_meatballs"
        ],
        "farmersdelight:pasta_with_meatballs",
        1, 200,
        "minecraft:bowl");
    
    event.recipes.farmersdelight.cooking(
        [
            "#forge:pasta",
            "farmersdelight:tomato_sauce",
            "createfood:small_strider_meatballs"
        ],
        "createfood:pasta_plate_strider_meatballs_tomato_sauce",
        1, 200,
        "minecraft:bowl");

    event.recipes.farmersdelight.cooking(
        [
            "#forge:pasta",
            "farmersdelight:tomato_sauce",
            "createfood:small_endermite_meatballs"
        ],
        "createfood:pasta_plate_endermite_meatballs_tomato_sauce",
        1, 200,
        "minecraft:bowl");

        
    
    event.recipes.create.filling(
        "createfood:pasta_plate_tomato_sauce",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pasta_plate"]
    );

    event.recipes.create.filling(
        "farmersdelight:pasta_with_meatballs",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pasta_plate_meatballs"]
    );

    event.recipes.create.filling(
        "farmersdelight:pasta_with_mutton_chop",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pasta_plate_mutton_chop"]
    );

    event.recipes.create.filling(
        "createfood:pasta_plate_strider_meatballs_tomato_sauce",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pasta_plate_strider_meatballs"]
    );

    event.recipes.create.filling(
        "createfood:pasta_plate_endermite_meatballs_tomato_sauce",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pasta_plate_endermite_meatballs"]
    );
});
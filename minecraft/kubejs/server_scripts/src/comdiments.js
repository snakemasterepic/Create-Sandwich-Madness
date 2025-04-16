//priority: 29
ServerEvents.recipes(event => {
    const condiments = [
        {
            condiment: "create:chocolate",
            servingSize: 250,
            originalContainer: "createfood:chocolate_bottle"
        },
        {
            condiment: "create_central_kitchen:tomato_sauce",
            servingSize: 250,
            originalContainer: "farmersdelight:tomato_sauce",
        },
        {
            condiment: "createfood:apple_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_apple_cream_frosting"
        },
        {
            condiment: "createfood:apple_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:apple_ice_cream_stick"
        },
        {
            condiment: "createfood:apple_jam",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_apple_jam"
        },
        {
            condiment: "createfood:apple_milkshake",
            servingSize: 500,
            originalContainer: "createfood:apple_milkshake_bottle"
        },
        {
            condiment: "createfood:berry_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_berry_cream_frosting"
        },
        {
            condiment: "createfood:berry_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:berry_ice_cream_stick"
        },
        {
            condiment: "createfood:berry_jam",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_berry_jam"
        },
        {
            condiment: "createfood:berry_milkshake",
            servingSize: 500,
            originalContainer: "createfood:berry_milkshake_bottle"
        },
        {
            condiment: "createfood:chocolate_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_chocolate_cream_frosting"
        },
        {
            condiment: "createfood:chocolate_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:chocolate_ice_cream_stick"
        },
        {
            condiment: "createfood:chocolate_milkshake",
            servingSize: 500,
            originalContainer: "createfood:chocolate_milkshake_bottle"
        },
        {
            condiment: "createfood:chorus_fruit_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_chorus_fruit_cream_frosting"
        },
        {
            condiment: "createfood:chorus_fruit_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:chorus_fruit_ice_cream_stick"
        },
        {
            condiment: "createfood:caramel",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_caramel"
        },
        {
            condiment: "createfood:chorus_fruit_jam",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_chorus_fruit_jam"
        },
        {
            condiment: "createfood:chorus_fruit_milkshake",
            servingSize: 500,
            originalContainer: "createfood:chorus_fruit_milkshake_bottle"
        },
        {
            condiment: "createfood:dark_chocolate",
            servingSize: 250,
            originalContainer: "createfood:dark_chocolate_bottle"
        },
        {
            condiment: "createfood:fruit_smoothie",
            servingSize: 250,
            originalContainer: "createfood:fruit_smoothie_bottle"
        },
        {
            condiment: "createfood:cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_cream_frosting"
        },
        {
            condiment: "createfood:glow_berry_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_glow_berry_cream_frosting"
        },
        {
            condiment: "createfood:glow_berry_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:glow_berry_ice_cream_stick"
        },
        {
            condiment: "createfood:glow_berry_jam",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_glow_berry_jam"
        },
        {
            condiment: "createfood:glow_berry_milkshake",
            servingSize: 500,
            originalContainer: "createfood:glow_berry_milkshake_bottle"
        },
        {
            condiment: "createfood:ice_cream",
            servingSize: 50,
            originalContainer: "createfood:ice_cream_stick"
        },
        {
            condiment: "createfood:melon_cream_frosting",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_melon_cream_frosting"
        },
        {
            condiment: "createfood:melon_ice_cream",
            servingSize: 50,
            originalContainer: "createfood:melon_ice_cream_stick"
        },
        {
            condiment: "createfood:melon_jam",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_melon_jam"
        },
        {
            condiment: "createfood:melon_milkshake",
            servingSize: 500,
            originalContainer: "createfood:melon_milkshake_bottle"
        },
        {
            condiment: "createfood:milkshake",
            servingSize: 500,
            originalContainer: "createfood:milkshake_bottle"
        },
        {
            condiment: "createfood:sour_cream",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_sour_cream"
        },
        {
            condiment: "createfood:vegetable_oil",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_vegetable_oil"
        },
        {
            condiment: "createfood:vinegar",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_vinegar"
        },
        {
            condiment: "createfood:white_chocolate",
            servingSize: 250,
            originalContainer: "createfood:white_chocolate_bottle"
        },
        {
            condiment: "createfood:yogurt",
            servingSize: 250,
            originalContainer: "createfood:yogurt_bottle"
        },
        {
            condiment: "kubejs:peanut_butter",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_peanut_butter"
        },
        {
            condiment: "createfood:apple_juice",
            servingSize: 250,
            originalContainer: "createfood:apple_juice_bottle"
        },
        {
            condiment: "createfood:berry_juice",
            servingSize: 250,
            originalContainer: "createfood:berry_juice_bottle"
        },
        {
            condiment: "createfood:chorus_fruit_juice",
            servingSize: 250,
            originalContainer: "createfood:chorus_fruit_juice_bottle"
        },
        {
            condiment: "createfood:glow_berry_juice",
            servingSize: 250,
            originalContainer: "createfood:glow_berry_juice_bottle"
        },
        {
            condiment: "kubejs:chorus_sauce",
            servingSize: 250,
            originalContainer: "ends_delight:chorus_sauce"
        },
        {
            condiment: "create_central_kitchen:chorus_fruit_milk_tea",
            servingSize: 250,
            originalContainer: "ends_delight:chorus_fruit_milk_tea"
        },
        {
            condiment: "create_central_kitchen:chorus_fruit_bubble_tea",
            servingSize: 250,
            originalContainer: "ends_delight:bubble_tea"
        },
        {
            condiment: "create_central_kitchen:chorus_fruit_wine",
            servingSize: 250,
            originalContainer: "ends_delight:chorus_fruit_wine"
        },
        {
            condiment: "create_central_kitchen:chorus_flower_tea",
            servingSize: 250,
            originalContainer: "ends_delight:chorus_flower_tea"
        },
        {
            condiment: "create:tea",
            servingSize: 250,
            originalContainer: "create:builders_tea"
        },
        {
            condiment: "garnished:sweet_tea",
            servingSize: 250,
            originalContainer: "garnished:sweet_tea"
        },
        {
            condiment: "create_central_kitchen:dragon_breath_soda",
            servingSize: 250,
            originalContainer: "ends_delight:dragon_breath_soda"
        },
        {
            condiment: "kubejs:mayonnaise",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_mayonnaise"
        },
        {
            condiment: "createfood:molasses",
            servingSize: 125,
            originalContainer: "kubejs:measuring_cup_molasses"
        },
    ];

    for (let condiment of condiments) {
        event.custom({
            type: "some_assembly_required:sandwich_spouting", 
            fluid: {
                amount: condiment.servingSize,
                fluid: condiment.condiment,
                nbt: {}
            },
            result: {
                item: condiment.originalContainer
            }
        });
    }
});
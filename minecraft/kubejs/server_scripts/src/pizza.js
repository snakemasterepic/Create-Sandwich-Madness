ServerEvents.recipes(event => {
    event.recipes.create.filling(
        "createfood:pizza_dough_tomato_sauce",
        [Fluid.of("create_central_kitchen:tomato_sauce", 250), "createfood:pizza_dough"]
    );

    const two_topping_pizzas = [
        [
            "createfood:raw_sausage_mushroom_pizza",
            "createfood:breakfast_sausages",
            "createfood:raw_mushroom_pizza"
        ],
        [
            "createfood:raw_sausage_fish_pizza",
            "createfood:breakfast_sausages",
            "createfood:raw_fish_pizza"
        ],
        [
            "createfood:raw_sausage_onion_pizza",
            "createfood:breakfast_sausages",
            "createfood:raw_onion_pizza"
        ],
        [
            "createfood:raw_sausage_bacon_pizza",
            "createfood:breakfast_sausages",
            "createfood:raw_bacon_pizza"
        ],
        [
            "createfood:raw_mushroom_fish_pizza",
            "#forge:mushrooms",
            "createfood:raw_fish_pizza"
        ],
        [
            "createfood:raw_mushroom_onion_pizza",
            "#forge:mushrooms",
            "createfood:raw_onion_pizza"
        ],
        [
            "createfood:raw_mushroom_bacon_pizza",
            "#forge:mushrooms",
            "createfood:raw_bacon_pizza"
        ],
        [
            "createfood:raw_fish_onion_pizza",
            "#forge:cooked_fishes",
            "createfood:raw_onion_pizza"
        ],
        [
            "createfood:raw_fish_bacon_pizza",
            "#forge:cooked_fishes",
            "createfood:raw_bacon_pizza"
        ],
        [
            "createfood:raw_onion_bacon_pizza",
            "#forge:onion",
            "createfood:raw_bacon_pizza"
        ]
    ];

    // Two-topping pizzas in either order
    for (let pizza of two_topping_pizzas) {
        event.shapeless(pizza[0], [pizza[2], pizza[1]]);
        event.recipes.create.item_application(pizza[0], [pizza[2], pizza[1]]);
        // event.recipes.create.deploying(pizza[0], [pizza[2], pizza[1]]);
    }
});
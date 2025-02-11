//priority: 19
ServerEvents.recipes(event => {
    // Switching  salt compound to salt does not work for sequenced recipes for some reason, so we need to do that manually.
    event.remove([{
        output: "garnished:phantom_steak"
    }, {
        output:"garnished:senile_sweet_scoria"
    }, {
        output: "garnished:senile_sweet_blackstone"
    }, {
        output: "garnished:senile_sweet_basalt"
    }, {
        output: "garnished:senile_sweet_scorchia"
    }]);

    event.recipes.create.sequenced_assembly(
        ["garnished:phantom_steak"],
        "minecraft:cooked_beef",
        [
            event.recipes.create.pressing(
                "garnished:incomplete_phantom_steak",
                "garnished:incomplete_phantom_steak"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_phantom_steak",
                 ["garnished:incomplete_phantom_steak", "#minecraft:soul_fire_base_blocks"]),
            event.recipes.create.deploying(
                "garnished:incomplete_phantom_steak",
                 ["garnished:incomplete_phantom_steak", "createfood:salt"]),
            event.recipes.create.deploying(
                "garnished:incomplete_phantom_steak",
                 ["garnished:incomplete_phantom_steak", "garnished:garnish_powder"])
        ],
        "garnished:incomplete_phantom_steak",
        2
    );

    event.recipes.create.sequenced_assembly(
        ["garnished:senile_sweet_scoria"],
        "create:scoria",
        [
            event.recipes.create.pressing(
                "garnished:incomplete_senile_sweet_scoria",
                "garnished:incomplete_senile_sweet_scoria"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scoria",
                ["garnished:incomplete_senile_sweet_scoria", "createfood:salt"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scoria",
                ["garnished:incomplete_senile_sweet_scoria", "garnished:garnish_powder"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scoria",
                ["garnished:incomplete_senile_sweet_scoria", "garnished:senile_spread"]),
        ],
        "garnished:incomplete_senile_sweet_scoria",
        1
    );

    event.recipes.create.sequenced_assembly(
        ["garnished:senile_sweet_blackstone"],
        "minecraft:blackstone",
        [
            event.recipes.create.pressing(
                "garnished:incomplete_senile_sweet_blackstone",
                "garnished:incomplete_senile_sweet_blackstone"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_blackstone",
                ["garnished:incomplete_senile_sweet_blackstone", "createfood:salt"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_blackstone",
                ["garnished:incomplete_senile_sweet_blackstone", "garnished:garnish_powder"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_blackstone",
                ["garnished:incomplete_senile_sweet_blackstone", "garnished:senile_spread"]),
        ],
        "garnished:incomplete_senile_sweet_blackstone",
        1
    );

    event.recipes.create.sequenced_assembly(
        ["garnished:senile_sweet_scorchia"],
        "create:scorchia",
        [
            event.recipes.create.pressing(
                "garnished:incomplete_senile_sweet_scorchia",
                "garnished:incomplete_senile_sweet_scorchia"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scorchia",
                ["garnished:incomplete_senile_sweet_scorchia", "createfood:salt"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scorchia",
                ["garnished:incomplete_senile_sweet_scorchia", "garnished:garnish_powder"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_scorchia",
                ["garnished:incomplete_senile_sweet_scorchia", "garnished:senile_spread"]),
        ],
        "garnished:incomplete_senile_sweet_scorchia",
        1
    );

    event.recipes.create.sequenced_assembly(
        ["garnished:senile_sweet_basalt"],
        "minecraft:basalt",
        [
            event.recipes.create.pressing(
                "garnished:incomplete_senile_sweet_basalt",
                "garnished:incomplete_senile_sweet_basalt"
            ),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_basalt",
                ["garnished:incomplete_senile_sweet_basalt", "createfood:salt"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_basalt",
                ["garnished:incomplete_senile_sweet_basalt", "garnished:garnish_powder"]),
            event.recipes.create.deploying(
                "garnished:incomplete_senile_sweet_basalt",
                ["garnished:incomplete_senile_sweet_basalt", "garnished:senile_spread"]),
        ],
        "garnished:incomplete_senile_sweet_basalt",
        1
    );

    event.recipes.create.filling(
        "kubejs:garnish_bottle",
        ["minecraft:glass_bottle", Fluid.of("garnished:garnish", 250)]
    );

    event.recipes.create.emptying(
        ["minecraft:glass_bottle", Fluid.of("garnished:garnish", 250)],
        "kubejs:garnish_bottle",
    );

    event.shapeless(Item.of("kubejs:garnish_bottle", 4), ["garnished:garnish_bucket", Item.of("minecraft:glass_bottle", 4)]);
    event.shapeless("garnished:garnish_bucket", ["minecraft:bucket", Item.of("kubejs:garnish_bottle", 4)]);
    event.recipes.create.milling(Item.of("garnished:garnish_compound", 2), ["garnished:solidified_garnish"]);

    event.recipes.create.mixing("garnished:venerable_dough", ["garnished:nut_flour", Fluid.of("minecraft:water", 250)]);
    event.shapeless("garnished:venerable_dough", [Item.of("garnished:nut_flour", 4), "minecraft:water_bucket"]);
});
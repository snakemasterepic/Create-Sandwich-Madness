//priority: 24
ServerEvents.recipes(event => {
    event.remove("garnished:crushing/ender_dragon_egg_shell");
    event.recipes.create.crushing([
        Item.of("ends_delight:half_dragon_egg_shell", 2),
        Item.of("garnished:frail_ender_egg_shell", 1),
        Item.of("garnished:dimmed_scale", 3).withChance(.2),
        Item.of("ends_delight:liquid_dragon_egg", 1),
    ], IngredientHelper.or(["minecraft:dragon_egg", "dragonmounts:dragon_egg"]), 1000);

    const eggs = [
        {
            species: "dragonmounts:end",
            material: "minecraft:end_stone"
        },
        {
            species: "dragonmounts:aether",
            material: "minecraft:phantom_membrane"
        },
        {
            species: "dragonmounts:fire",
            material: "minecraft:magma_block"
        },
        {
            species: "dragonmounts:forest",
            material: "minecraft:dirt"
        },
        {
            species: "dragonmounts:ghost",
            material: "minecraft:bone_block"
        },
        {
            species: "dragonmounts:ice",
            material: "minecraft:blue_ice"
        },
        {
            species: "dragonmounts:nether",
            material: "minecraft:netherrack"
        },
        {
            species: "dragonmounts:water",
            material: "minecraft:clay"
        }
    ];

    for (let egg of eggs) {
        event.shaped(
            Item.of("dragonmounts:dragon_egg", {BlockEntityTag: {Breed: egg.species, id:"dragonmounts:dragon_egg"}}),
            ["ABA","ACA","AAA"],
            {
                A: egg.material,
                B: "minecraft:nether_star",
                C: "minecraft:dragon_egg"
            });
    }

    event.shaped("minecraft:saddle",
        ["AAA","ABA","C C"],
        {
            A: "minecraft:leather",
            B: "minecraft:lead",
            C: "minecraft:iron_ingot"
        }
    );
});

// Dragon Mounts dragons don't drop their loot properly, so we need to manually spawn their drops in when they die.
EntityEvents.drops("dragonmounts:dragon", event => {
    event.addDrop("ends_delight:dragon_leg");
    event.addDrop("ends_delight:raw_dragon_meat");
    event.addDrop("ends_delight:dragon_tooth");
    if (event.source.player.mainHandItem.hasTag("farmersdelight:tools/knives")) {
        event.addDrop("ends_delight:dragon_leg");
        event.addDrop("ends_delight:raw_dragon_meat");
        event.addDrop("ends_delight:dragon_tooth");
    }
});
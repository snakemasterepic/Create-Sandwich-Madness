StartupEvents.registry("item", event => {
    event.create("empty_jar")
        .texture("kubejs:item/empty_jar");

    event.create("measuring_cup")
        .texture("kubejs:item/measuring_cup");

    event.create("ice_cream_scoop")
        .texture("kubejs:item/ice_cream_scoop");

    event.create("raw_burger_bun")
        .texture("kubejs:item/raw_burger_bun");
    
    event.create("garnish_bottle")
        .texture("kubejs:item/garnish_bottle")
        .containerItem("minecraft:glass_bottle");

    const measuringCupItems = [
        "apple_cream_frosting",
        "apple_jam",
        "berry_cream_frosting",
        "berry_jam",
        "caramel",
        "chocolate_cream_frosting",
        "chorus_fruit_cream_frosting",
        "chorus_fruit_jam",
        "cream_frosting",
        "glow_berry_cream_frosting",
        "glow_berry_jam",
        "mayonaise",
        "melon_cream_frosting",
        "melon_jam",
        "peanut_butter",
        "sour_cream",
        "molasses",
        "vegetable_oil",
        "vinegar",
    ];

    for (let item of measuringCupItems) {
        let name = "measuring_cup_"+item;
        event.create(name)
            .texture("kubejs:item/"+name)
            .containerItem("kubejs:measuring_cup")
            .food(food => {
                food
                    .hunger(1)
                    .saturation(1);
            })
            .maxStackSize(4);
    }

    event.create("mayonaise_jar")
        .texture("kubejs:item/mayonaise_jar");

    event.create("peanut_butter_jar")
        .texture("kubejs:item/peanut_butter_jar");

    event.create("custom_spread")
        .texture("kubejs:item/custom_spread");

    event.create("custom_patty")
        .texture("kubejs:item/custom_spread");

    event.create("beverage_token")
        .texture("kubejs:item/beverage_token")
        .tag("kubejs:side_dish_token");
    event.create("dessert_token")
        .texture("kubejs:item/dessert_token")
        .tag("kubejs:side_dish_token");
    event.create("nonsandwich_entree_token")
        .texture("kubejs:item/nonsandwich_entree_token")
        .tag("kubejs:side_dish_token");
    event.create("side_token")
        .texture("kubejs:item/side_token")
        .tag("kubejs:side_dish_token");
    event.create("snack_token")
        .texture("kubejs:item/snack_token")
        .tag("kubejs:side_dish_token");
});

StartupEvents.registry("fluid", event => {
    event.create("peanut_butter")
        .thickTexture(0xab8f32);

    event.create("chorus_sauce")
        .displayName("Chorus Sauce")
        .stillTexture("kubejs:fluid/chorus_sauce_still")
        .flowingTexture("kubejs:fluid/chorus_sauce_flow")
        .bucketColor(0x6c286a);

    // Mechanical Spawner
    event.create("base_spawn_fluid")
        .thinTexture(0xf13a5b);

    event.create("spider_spawn_fluid")
        .thinTexture(0x611489);

    event.create("cave_spider_spawn_fluid")
        .thinTexture(0x3c184f);

    event.create("skeleton_spawn_fluid")
        .thinTexture(0x9b9b9b);

    event.create("wither_skeleton_spawn_fluid")
        .thinTexture(0x131313);

    event.create("stray_spawn_fluid")
        .thinTexture(0xa1c3ca);

    event.create("zombie_spawn_fluid")
        .thinTexture(0x2e7360);

    event.create("husk_spawn_fluid")
        .thinTexture(0x444d4b);

    event.create("drowned_spawn_fluid")
        .thinTexture(0x44526c);

    event.create("zombified_piglin_spawn_fluid")
        .thinTexture(0xcf5e7d);
        
    event.create("piglin_spawn_fluid")
        .thinTexture(0xf14271);

    event.create("piglin_brute_spawn_fluid")
        .thinTexture(0xae143d);

    event.create("hoglin_spawn_fluid")
        .thinTexture(0xbe5f37);

    event.create("zoglin_spawn_fluid")
        .thinTexture(0x934f32);

    event.create("cow_spawn_fluid")
        .thinTexture(0x372d04);

    event.create("pig_spawn_fluid")
        .thinTexture(0xf086a8);

    event.create("chicken_spawn_fluid")
        .thinTexture(0xdf1212);

    event.create("sheep_spawn_fluid")
        .thinTexture(0xffffff);

    event.create("rabbit_spawn_fluid")
        .thinTexture(0xebb481);
    
    event.create("mooshroom_spawn_fluid")
        .thinTexture(0x9a0f0f);

    event.create("polar_bear_spawn_fluid")
        .thinTexture(0xdadada);

    event.create("cod_spawn_fluid")
        .thinTexture(0xf1a864);

    event.create("salmon_spawn_fluid")
        .thinTexture(0x724715);

    event.create("tropical_fish_spawn_fluid")
        .thinTexture(0xc78608);

    event.create("pufferfish_spawn_fluid")
        .thinTexture(0xe3eb45);

    event.create("squid_spawn_fluid")
        .thinTexture(0x445064);

    event.create("glow_squid_spawn_fluid")
        .thinTexture(0x30b889);

    event.create("guardian_spawn_fluid")
        .thinTexture(0x50a696);
        
    event.create("elder_guardian_spawn_fluid")
        .thinTexture(0x7ddbc9);

    event.create("creeper_spawn_fluid")
        .thinTexture(0x1f8907);

    event.create("slime_spawn_fluid")
        .thinTexture(0x5da94d);

    event.create("witch_spawn_fluid")
        .thinTexture(0x7c538e);

    event.create("phantom_spawn_fluid")
        .thinTexture(0x7085e2);

    event.create("warden_spawn_fluid")
        .thinTexture(0x071348);

    event.create("pillager_spawn_fluid")
        .thinTexture(0x868686);

    event.create("vindicator_spawn_fluid")
        .thinTexture(0x6c6c6c);

    event.create("evoker_spawn_fluid")
        .thinTexture(0x9a9a9a);

    event.create("vex_spawn_fluid")
        .thinTexture(0x878ead);

    event.create("ravager_spawn_fluid")
        .thinTexture(0x505050);

    event.create("strider_spawn_fluid")
        .thinTexture(0x623312);

    event.create("magma_cube_spawn_fluid")
        .thinTexture(0xd67300);

    event.create("blaze_spawn_fluid")
        .thinTexture(0xf1ee22);

    event.create("ghast_spawn_fluid")
        .thinTexture(0xececec);

    event.create("enderman_spawn_fluid")
        .thinTexture(0x1e151c);

    event.create("endermite_spawn_fluid")
        .thinTexture(0x7f4384);

    event.create("shulker_spawn_fluid")
        .thinTexture(0xb21cbe);

    event.create("dragon_spawn_fluid")
        .thinTexture(0x23041d);

    event.create("mayonaise")
        .thinTexture(0xe0d385);
});

BlockEvents.modification(event => {
    event.modify([
        "minecraft:cake",
        "farmersdelight:apple_pie",
        "farmersdelight:chocolate_pie",
        "farmersdelight:sweet_berry_cheesecake",
        "ends_delight:chorus_fruit_pie",
        "create_central_kitchen:pumpkin_pie"
    ], block => {
        block.destroySpeed = 0;
    });
})

ItemEvents.modification(event => {
    const jarItems = [
        "createfood:apple_cream_frosting_bottle",
        "createfood:apple_jam_bottle",
        "createfood:berry_cream_frosting_bottle",
        "createfood:berry_jam_bottle",
        "createfood:chocolate_cream_frosting_bottle",
        "createfood:chorus_fruit_cream_frosting_bottle",
        "createfood:chorus_fruit_jam_bottle",
        "createfood:cream_frosting_bottle",
        "createfood:glow_berry_cream_frosting_bottle",
        "createfood:glow_berry_jam_bottle",
        "createfood:melon_cream_frosting_bottle",
        "createfood:melon_jam_bottle",
        "createfood:ube_cream_frosting_bottle"
    ];

    for (let jar of jarItems) {
        event.modify(jar, item => {
            item.craftingRemainder = "kubejs:empty_jar";
        });
    }

    const ice_cream_scoops = [
        "createfood:ice_cream_stick",
        "createfood:apple_ice_cream_stick",
        "createfood:berry_ice_cream_stick",
        "createfood:chocolate_ice_cream_stick",
        "createfood:chorus_fruit_ice_cream_stick",
        "createfood:glow_berry_ice_cream_stick",
        "createfood:melon_ice_cream_stick"
    ];

    for (let scoop of ice_cream_scoops) {
        event.modify(scoop, item => {
            item.craftingRemainder = "kubejs:ice_cream_scoop"
        });
    }

    event.modify("some_assembly_required:sandwich", item => {
        item.maxStackSize = 64;
    });

    event.modify("farmersdelight:melon_juice", item => {
        item.maxStackSize = 64;
    });

    event.modify("garnished:sweet_tea", item => {
        item.maxStackSize = 16;
    });

    event.modify("garnished:salad", item => {
        item.maxStackSize = 16;
    });

    event.modify("corn_delight:nachos_block", item => {
        item.maxStackSize = 1;
    });

    const garnishedBowls = [
        "garnished:tophet_brew",
        "garnished:grim_stew",
        "garnished:soul_khana",
        "garnished:overgrown_brew",
        "garnished:omniscient_stew",
        "garnished:warped_brew",
        "garnished:iniquitous_brew",
        "garnished:spirited_concoction",
        "garnished:putrid_stew",
        "garnished:nut_nacho_bowl",
        "garnished:void_mixture",
        "garnished:ethereal_concoction",
        "garnished:desolate_stew",
        "garnished:cosmic_brew",
        "garnished:farseer_brew",
        "garnished:mud_pie",
        "garnished:molten_stew",
        "garnished:cashew_sorbet_delight",
        "garnished:fishy_surprise",
        "garnished:gloomy_gathering",
        "garnished:walnut_gorge_cream",
        "garnished:ghandercken",
        "garnished:shining_dish",
        "garnished:murky_macadamia_malice",
        "garnished:nutty_melody",
        "garnished:muesli",
        "garnished:dusty_regale",
        "garnished:incendiary_stew",
        "garnished:vermilion_stew",
        "garnished:vast_brew",
        "garnished:galvanic_haunting",
        "garnished:prickly_pear_stew",
        "garnished:stew_of_the_damned",
        "garnished:void_stroganoff",
        "garnished:explorers_concoction",
        "garnished:frosted_dessert"
    ];

    for (let bowlFood of garnishedBowls) {
        event.modify(bowlFood, item => {
            item.maxStackSize = 16;
        });
    }

    event.modify("minecraft:cake", item => {
        item.maxStackSize = 64;
    });

    event.modify("ends_delight:chorus_fruit_popsicle", item => {
        item.maxStackSize = 64;
    });

    event.modify("minecraft:potion", item => {
        item.maxStackSize = 16;
    });

    event.modify("createfood:condensed_milk_bottle", item => {
        item.craftingRemainder = "minecraft:glass_bottle";
    });
});
ServerEvents.recipes(event => {
    event.remove({
        mod: "create_mechanical_spawner"
    });

    event.shaped("create_mechanical_spawner:mechanical_spawner", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:iron_bars",
        B: "createcasing:chorium_ingot"
    });

    function createSpawnFluidRecipes(
        fluid,
        entity,
        catalyst,
        baseFluid) {
        event.recipes.create.mixing(Fluid.of(fluid, 1000), [Fluid.of(baseFluid, 1000), catalyst]).heated();
        event.recipes.create_mechanical_spawner.spawner(Fluid.of(fluid, 100), entity);
    }

    event.recipes.create.mixing(
        Fluid.of("kubejs:base_spawn_fluid", 1000), 
        [
            Fluid.of("minecraft:water", 1000),
            "minecraft:egg",
            "minecraft:glow_berries",
            "minecraft:nether_wart"
        ]).heated();

    event.recipes.create.mixing(
        Fluid.of("kubejs:base_spawn_fluid", 1000), 
        [
            Fluid.of("create:potion", 1000).withNBT({Potion: "minecraft:awkward"}),
            "minecraft:egg",
            "minecraft:glow_berries"
        ]).heated();

    createSpawnFluidRecipes("kubejs:spider_spawn_fluid", "minecraft:spider", "minecraft:spider_eye", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:cave_spider_spawn_fluid", "minecraft:cave_spider", "minecraft:cobweb", "kubejs:spider_spawn_fluid");
    createSpawnFluidRecipes("kubejs:skeleton_spawn_fluid", "minecraft:skeleton", "minecraft:bone", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:wither_skeleton_spawn_fluid", "minecraft:wither_skeleton", "minecraft:coal", "kubejs:skeleton_spawn_fluid");
    createSpawnFluidRecipes("kubejs:stray_spawn_fluid", "minecraft:stray", "garnished:numbing_parchment", "kubejs:skeleton_spawn_fluid");
    createSpawnFluidRecipes("kubejs:zombie_spawn_fluid", "minecraft:zombie", "minecraft:rotten_flesh", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:husk_spawn_fluid", "minecraft:husk", "minecraft:sand", "kubejs:zombie_spawn_fluid");
    createSpawnFluidRecipes("kubejs:drowned_spawn_fluid", "minecraft:drowned", "minecraft:kelp", "kubejs:zombie_spawn_fluid");
    createSpawnFluidRecipes("kubejs:pig_spawn_fluid", "minecraft:pig", "minecraft:potato", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:piglin_spawn_fluid", "minecraft:piglin", "minecraft:gold_ingot", "kubejs:pig_spawn_fluid");
    createSpawnFluidRecipes("kubejs:zombified_piglin_spawn_fluid", "minecraft:zombified_piglin", Fluid.of("kubejs:zombie_spawn_fluid", 1000), "kubejs:piglin_spawn_fluid");
    createSpawnFluidRecipes("kubejs:piglin_brute_spawn_fluid", "minecraft:piglin_brute", "minecraft:gilded_blackstone", "kubejs:piglin_spawn_fluid");
    createSpawnFluidRecipes("kubejs:hoglin_spawn_fluid", "minecraft:hoglin", "garnished:tusk", "kubejs:pig_spawn_fluid");
    createSpawnFluidRecipes("kubejs:zoglin_spawn_fluid", "minecraft:zoglin", Fluid.of("kubejs:zombie_spawn_fluid", 1000), "kubejs:hoglin_spawn_fluid");
    createSpawnFluidRecipes("kubejs:cow_spawn_fluid", "minecraft:cow", "minecraft:wheat", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:mooshroom_spawn_fluid", "minecraft:mooshroom", "minecraft:red_mushroom", "kubejs:cow_spawn_fluid");
    createSpawnFluidRecipes("kubejs:chicken_spawn_fluid", "minecraft:chicken", "minecraft:wheat_seeds", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:sheep_spawn_fluid", "minecraft:sheep", "minecraft:white_wool", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:rabbit_spawn_fluid", "minecraft:rabbit", "minecraft:carrot", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:polar_bear_spawn_fluid", "minecraft:polar_bear", "garnished:polar_bear_hide", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:cod_spawn_fluid", "minecraft:cod", "minecraft:cod", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:salmon_spawn_fluid", "minecraft:salmon", "minecraft:salmon", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:tropical_fish_spawn_fluid", "minecraft:tropical_fish", "minecraft:tropical_fish", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:pufferfish_spawn_fluid", "minecraft:pufferfish", "minecraft:pufferfish", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:squid_spawn_fluid", "minecraft:squid", "minecraft:ink_sac", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:glow_squid_spawn_fluid", "minecraft:glow_squid", "minecraft:glowstone_dust", "kubejs:squid_spawn_fluid");
    createSpawnFluidRecipes("kubejs:guardian_spawn_fluid", "minecraft:guardian", "minecraft:prismarine_shard", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:elder_guardian_spawn_fluid", "minecraft:elder_guardian", "minecraft:prismarine_crystals", "kubejs:guardian_spawn_fluid");
    createSpawnFluidRecipes("kubejs:creeper_spawn_fluid", "minecraft:creeper", "minecraft:gunpowder", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:slime_spawn_fluid", "minecraft:slime", "minecraft:slime_ball", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:witch_spawn_fluid", "minecraft:witch", "minecraft:stick", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:warden_spawn_fluid", "minecraft:warden", "garnished:raw_tenebrous_meat", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:vindicator_spawn_fluid", "minecraft:vindicator", "minecraft:emerald", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:pillager_spawn_fluid", "minecraft:pillager", "minecraft:arrow", "kubejs:vindicator_spawn_fluid");
    createSpawnFluidRecipes("kubejs:vex_spawn_fluid", "minecraft:vex", "garnished:vex_wing", "kubejs:vindicator_spawn_fluid");
    createSpawnFluidRecipes("kubejs:evoker_spawn_fluid", "minecraft:evoker", "minecraft:totem_of_undying", "kubejs:vex_spawn_fluid");
    createSpawnFluidRecipes("kubejs:ravager_spawn_fluid", "mincecraft:ravager", "garnished:meat_scraps", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:strider_spawn_fluid", "minecraft:strider", "minecraft:warped_fungus", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:ghast_spawn_fluid", "minecraft:ghast", "garnished:ghast_tendril", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:magma_cube_spawn_fluid", "minecraft:magma_cube", "garnished:molten_remnant", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:blaze_spawn_fluid", "minecraft:glaze", "garnished:enflamed_mandible", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:enderman_spawn_fluid", "minecraft:enderman", "minecraft:ender_pearl", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:endermite_spawn_fluid", "minecraft:endermite", "garnished:preliminary_nucleus", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:shulker_spawn_fluid", "minecraft:shulker", "minecraft:shulker_shell", "kubejs:base_spawn_fluid");
    createSpawnFluidRecipes("kubejs:dragon_spawn_fluid", "dragonmounts:dragon", "ends_delight:liquid_dragon_egg", "kubejs:base_spawn_fluid");
});
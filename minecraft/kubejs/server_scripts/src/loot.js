//priority: 16
ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:shulker", loot => {
        loot.addPool(pool => {
            pool.addItem("ends_delight:shulker_meat")
                .lootingEnchant([0,1], 0);
        });
    });
});
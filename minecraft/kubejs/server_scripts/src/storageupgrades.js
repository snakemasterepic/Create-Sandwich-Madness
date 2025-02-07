
ServerEvents.recipes(event => {
    const upgrades = [
        "storagedrawers:obsidian_storage_upgrade",
        "storagedrawers:iron_storage_upgrade",
        "storagedrawers:gold_storage_upgrade",
        "storagedrawers:diamond_storage_upgrade",
        "storagedrawers:emerald_storage_upgrade"
    ];

    event.replaceInput({
        output: "storagedrawers:obsidian_storage_upgrade"
    }, "minecraft:obsidian", "#forge:stone");

    for (let i=1; i<upgrades.length; i++) {
        event.replaceInput({
            output: upgrades[i]
        }, "storagedrawers:upgrade_template", upgrades[i-1]);
    }
});
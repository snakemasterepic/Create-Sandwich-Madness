ServerEvents.recipes(event => {
    event.shaped(Item.of("minecraft:stick", 8), [
        "A","A"
    ], {
        A: "#minecraft:logs"
    });

    event.shaped(Item.of("minecraft:chest", 4), [
        "AAA",
        "A A",
        "AAA"
    ], {
        A: "#minecraft:logs"
    });

    event.shaped(Item.of("minecraft:bowl", 16), [
        "A A",
        " A "
    ], {
        A: "#minecraft:logs"
    });
})
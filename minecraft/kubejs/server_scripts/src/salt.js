//priority: 7
ServerEvents.recipes(event => {
    // Simplify salt
    event.remove([{
        output: "garnished:crushed_salt"
    }, {
        output: "garnished:salt_compound"
    }, {
        output: "createfood:salt"
    }]);
    
    event.replaceInput({
        input: "garnished:salt_compound"
    }, "garnished:salt_compound", "createfood:salt");

    event.recipes.create.milling([
        Item.of("createfood:salt"),
        Item.of("createfood:salt").withChance(0.5),
        Item.of("createfood:salt").withChance(0.25)
    ], ["create:limestone"]);

    event.remove({
        output: "garnished:salt_compound_block"
    });
});

ServerEvents.tags("item", event => {
    event.removeAllTagsFrom("garnished:salt_compound");
});
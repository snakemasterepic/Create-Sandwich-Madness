//priority: 37
ServerEvents.recipes(event => {
    event.forEachRecipe({
        type: "minecraft:smithing_transform"
    }, recipe => {
        let recipeJson = JSON.parse(recipe.json.toString());
        let base = recipeJson["base"];
        let template = recipeJson["template"];
        let addition = recipeJson["addition"];
        let result = recipeJson["result"];
        let inter = base;
        event.recipes.create.sequenced_assembly(
            [result],
            base,
            [
                event.recipes.create.deploying(
                    inter,
                    [inter, template]
                ),
                event.recipes.create.pressing(
                    inter,
                    inter
                ),
                event.recipes.create.deploying(
                    inter,
                    [inter, addition]
                ),
                event.recipes.create.pressing(
                    inter,
                    inter
                ),
                event.recipes.create.pressing(
                    inter,
                    inter
                )
            ],
            inter,
            1
        );
    });
});
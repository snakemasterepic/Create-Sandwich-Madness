//priority: 35
const containers = [
    "minecraft:glass_bottle",
    "kubejs:empty_jar",
    "kubejs:measuring_cup",
    "minecraft:bowl",
    "kubejs:ice_cream_scoop"
]

BlockEvents.rightClicked("create:basin", event => {
    const fillingRecipes = event.server.recipeManager.getAllRecipesFor("create:filling")
        .toArray().filter(recipe => recipe.ingredients.length > 0
            && recipe.ingredients[0].itemStacks.length > 0
            && recipe.fluidIngredients.length > 0
            && recipe.rollableResults.length > 0
            && event.item.item === recipe.ingredients[0].itemStacks[0].item);

    if (event.facing !== Direction.UP) {
        return;
    }

    if (containers.indexOf(event.item.item.id) != -1) {
        
        let entityData = event.block.entityData;
        let inputFluids = entityData.InputTanks ?? [];
        let outputFluids = entityData.OutputTanks ?? [];
        let allTanks = outputFluids.concat(inputFluids);
        for (let fluidData of allTanks) {
            let fluid = fluidData.TankContent;
            for (let recipe of fillingRecipes) {
                let baseFluid = Fluid.of(fluid.FluidName, 1000).fluid;
                for (let recipeFluid of recipe.fluidIngredients[0].matchingFluidStacks) {
                    if (recipeFluid.fluid.isSame(baseFluid) && recipeFluid.amount <= fluid.Amount) {
                        if (!event.player.creative) {
                            event.item.setCount(event.item.count - 1);
                            event.player.give(recipe.rollableResults[0].stack);
                        }

                        fluid.Amount = fluid.Amount - recipeFluid.amount;
                        fluidData.Level.Target = fluid.Amount / 1000;

                        if (fluid.Amount === 0) {
                            fluid.FluidName = "minecraft:empty";
                        }

                        event.block.setEntityData(entityData);

                        event.success();
                        return;
                    }
                }
            }
        }
    }
});
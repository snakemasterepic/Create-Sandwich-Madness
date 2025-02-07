ServerEvents.recipes(event => {

    event.remove("culturaldelights:avocado_toast");
    event.shapeless("culturaldelights:avocado_toast", ["some_assembly_required:toasted_bread_slice", "#culturaldelights:avocados"]);

    event.replaceInput({
        output: "createfood:buttered_toast"
    }, "createfood:toast_slice", "some_assembly_required:toasted_bread_slice");

    event.replaceInput({
        input: "createfood:toast_slice",
        not: {
            output: [
                "createfood:chicken_patty",
                "createfood:toast_plate",
                "createfood:toast_fried_egg_plate",
                "createfood:hash_brown_toast_plate",
                "createfood:breakfast_plate"
            ]
        }
    }, "createfood:toast_slice", "createfood:buttered_toast");
});
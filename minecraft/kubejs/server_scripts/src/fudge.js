ServerEvents.recipes(event => {
    event.remove({
        output: [
            "createfood:marshmallow_chocolate_fudge",
            "createfood:marshmallow_dark_chocolate_fudge",
            "createfood:marshmallow_white_chocolate_fudge",
            "createfood:marshmallow_butterscotch_fudge",
            "createfood:marshmallow_caramel_fudge",
            "createfood:marshmallow_toffee_fudge",
        ],
        not: {
            type: "farmersdelight:cooking"
        }
    });

    event.shapeless("createfood:marshmallow_chocolate_fudge", ["createfood:chocolate_fudge", "createfood:marshmallow"]);
    event.shapeless("createfood:marshmallow_dark_chocolate_fudge", ["createfood:dark_chocolate_fudge", "createfood:marshmallow"]);
    event.shapeless("createfood:marshmallow_white_chocolate_fudge", ["createfood:white_chocolate_fudge", "createfood:marshmallow"]);
    event.shapeless("createfood:marshmallow_butterscotch_fudge", ["createfood:butterscotch_fudge", "createfood:marshmallow"]);
    event.shapeless("createfood:marshmallow_caramel_fudge", ["createfood:caramel_fudge", "createfood:marshmallow"]);
    event.shapeless("createfood:marshmallow_toffee_fudge", ["createfood:toffee_fudge", "createfood:marshmallow"]);
});
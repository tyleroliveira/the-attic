const {
    Schema,
    model
} = require("mongoose");

const boxSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    items: [{
        title: {
            type: String,
            required: true,
            minLength: 1
        },
        itemCode: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        itemLink: {
            type: URL,
        }
    }, ],
});

const Box = model("Box", boxSchema);
module.exports = Box;
const mongoose = require('mongoose');
const { eventNames } = require("../../app");

const schema = mongose.Schema( {
    email: {type: String, required: true},
    password: {type: String, required: true},
    is_active: {type: Boolean, required: true},
    first_name: String,
    last_name: String,
    phone_number: String
},{
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

class Users extends mongose.model{

}

schema.loadClass(Users);
module.exports = mongoose.model("users", schema)
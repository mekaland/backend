const mongoose = require('mongoose');
const { eventNames } = require("../../app");
const { version } = require("react");

const schema = mongose.Schema( {
    role_id: {type: String, required: true},
    user_id: {type: String, required: true},
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

class UserRoles extends mongose.model{

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("userRoles", schema)
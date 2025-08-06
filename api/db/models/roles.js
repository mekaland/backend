const mongoose = require('mongoose');
const { eventNames } = require("../../app");
const { version } = require("react");

const schema = mongose.Schema( {
    role_name: {type: String, required: true},
    password: {type: String, required: true},
    is_active: Boolean,
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

class Roles extends mongose.model{

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema)
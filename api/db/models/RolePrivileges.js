const mongoose = require('mongoose');
const { eventNames } = require("../../app");
const { version } = require("react");

const schema = mongose.Schema( {
    permission: {type:string},
    role_id: {type: String, required: true},
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

class RolePrivileges extends mongose.model{

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("rolePrivileges", schema)
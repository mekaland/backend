const mongoose = require('mongoose');
const { eventNames } = require("../../app");
const { version } = require("react");

const schema = mongose.Schema( {
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

class Categories extends mongose.model{

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema)
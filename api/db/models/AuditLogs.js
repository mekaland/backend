const mongoose = require('mongoose');
const { eventNames } = require("../../app");
const { version } = require("react");

const schema = mongose.Schema( {
  level: String,
  email: String,
  location: String,
  proc_type:String,
  log:String
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

class AuditLogs extends mongose.model{

}

schema.loadClass(AuditLogs );
module.exports = mongoose.model("auditLogs ", schema)
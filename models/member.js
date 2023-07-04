const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    _idUser: {
      type: String,
      require: true,
    },
    _idCollection: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
    isIntive: {
      type: Boolean,
      require: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
    isSeenNotify: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        (ret.id = ret._id),
          delete ret._id,
          delete ret.updatedAt,
          delete ret.createdAt,
          delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("member", memberSchema);

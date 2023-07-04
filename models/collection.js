const mongoose = require("mongoose");

const collectionSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 15,
    },
    _idUser: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
      length: 6,
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
module.exports = mongoose.model("collection", collectionSchema);

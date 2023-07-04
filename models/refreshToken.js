const mongoose = require("mongoose");

const refreshToken = new mongoose.Schema(
  {
    token: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("refreshTokens", refreshToken);

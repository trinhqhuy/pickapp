import { Schema, model } from "mongoose";

const refreshToken = new Schema(
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

export default model("refreshToken", refreshToken);

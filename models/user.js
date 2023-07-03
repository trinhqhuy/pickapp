import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      minlength: 6,
      maxlenth: 10,
      unique: true,
    },
    password: {
      type: String,
      minlength: 7,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: Number,
      require: true,
      integer: true,
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
          delete ret.password,
          delete ret.__v;
      },
    },
  }
);

export default model("user", userSchema);

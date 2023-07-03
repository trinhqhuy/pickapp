import { Schema, model } from "mongoose";
const paletteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    _idUser: {
      type: String,
      required: true,
    },
    _idCollection: {
      type: String,
      required: true,
    },
    pin: {
      type: Boolean,
      required: true,
    },
    color: {
      type: [
        {
          type: String,
        },
      ],
      required: true,
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
export default model("palette", paletteSchema);

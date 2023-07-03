import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routers/auth.js";
import collectionRoute from "./routers/collection.js";
import paletteRoute from "./routers/palette.js";
import memberRoute from "./routers/member.js";
import userRoute from "./routers/user.js";
const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());

const allowedOrigins = ["http://localhost:5173/", "*"];

const options = {
  origin: allowedOrigins,
  credentials: true,
};
// app.options(
//   "http://localhost:5173",
//   cors({
//     origin: true,
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );
// Then pass these options to cors:
app.use(cors(options));
// Routes
app.use("/v1/auth", authRoute);
app.use("/v1/collection", collectionRoute);
app.use("/v1/palette", paletteRoute);
app.use("/v1/member", memberRoute);
app.use("/v1/user", userRoute);
// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Database
const url = process.env.MONGOOSE_URL;
mongoose.set("strictQuery", false);
async function connectToDatabase() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}
connectToDatabase();

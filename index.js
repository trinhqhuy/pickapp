const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRoute = require("./routers/auth");
const userRoute = require("./routers/user");
const collectionRoute = require("./routers/collection");
const paletteRoute = require("./routers/palette");
const memberRoute = require("./routers/member");
const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
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
app.use(express.static(process.cwd() + "/view")); // running when use vite bundle code

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
const port = process.env.PORT;
// Start server
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

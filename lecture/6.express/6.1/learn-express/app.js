const dotenv = require("dotenv");

const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

dotenv.config();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");

const app = express();

app.set("port", process.env.PORT);

app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
    name: "session-cookie",
  })
);
app.use("/:public", express.static(path.join(__dirname, "public")));
// app.use("/", (req, res, next) => {
//   if (req.session.id) {
//     express.static(path.join(__dirname, "public"))(req, res, next);
//   } else {
//     next();
//   }
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require("multer");
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (err) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 50 * 1024 * 1024 },
});

app.use("/", indexRouter);
app.use("/user", userRouter);

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});

app.post(
  "/upload",
  // upload.signle('image'),
  // upload.array('image'),
  // upload.fields([{ name: "image1" }, { name: "image2" }]),
  upload.none(),
  (req, res) => {
    console.log(req.body);
    res.send("ok");
  }
);

app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.get("/about", (req, res) => {
  console.log(req.session.name);
  res.send("hello express");
});

app.use((req, res, next) => {
  res.status(404).send("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("에러가 났습니다.");
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});

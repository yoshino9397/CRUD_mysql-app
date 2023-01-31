import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yoshino9397",
  database: "test",
});

// app.get("/", (req, res) => {
//   res.json("OKAY");
// });

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  // SELECT * FROM test.books;

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
  // INSERT INTO `test`.`books` (`id`, `title`, `desc`, `cover`) VALUES ('2', 'mairuma', 'comedy', 'mairuma.jpg');

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});

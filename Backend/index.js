import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 8080;
const FILE_PATH = "./counter.txt";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/' , (req,res)=>{
    res.send(`server is running on port ${PORT}`);
})

// Read counter value
app.get("/get-counter", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }
    res.json({ count: parseInt(data, 10) || 0 });
  });
});

// Update counter value
app.post("/update-counter", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    let count = parseInt(data, 10) || 0;
    count += 1;

    fs.writeFile(FILE_PATH, count.toString(), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error writing file" });
      }
      res.json({ count });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running`);
});

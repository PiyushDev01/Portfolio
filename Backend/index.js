import express from "express";

import cors from "cors";
import { kv } from "@vercel/kv";

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/' , (req,res)=>{
    res.send(`server is running on port ${PORT}`);
})

// Read counter value
app.get("/get-counter", async (req, res) => {
    try {
        let count = await kv.get("counter");
        if (count === null) {
          count = 0;
          await kv.set("counter", count);
        }
        res.json({ count });
      } catch (error) {
        res.status(500).json({ error: "Error reading counter" });
      }
});

// Update counter value
app.post("/update-counter", async (req, res) => {
    try {
        let count = await kv.get("counter");
        count = (count || 0) + 1;
        await kv.set("counter", count);
        res.json({ count });
      } catch (error) {
        res.status(500).json({ error: "Error updating counter" });
      }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running`);
});

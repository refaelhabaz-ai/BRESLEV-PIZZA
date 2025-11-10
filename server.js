const express = require("express");
const path = require("path");
const app = express();

// לאפשר גישה לכל הקבצים שבתיקייה public
app.use(express.static(path.join(__dirname, "public")));

// ניתוב לדף הראשי
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// שרת מאזין לפורט (Render נותן אוטומטית PORT)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🍕 BRESLEV PIZZA server running on port ${port}`);
});

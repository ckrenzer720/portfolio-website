const express = require("express");
const server = express();

const PORT = process.env.PORT || 3000;

// Serve static files
server.use(express());

// Route for homepage
server.get("/", (req, res) => {
  res.status(200).json({ message: "route up" });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

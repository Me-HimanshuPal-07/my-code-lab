const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const app = require("./src/app");
const connectDB = require("./src/config/db");

const port = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
};

startServer().catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});

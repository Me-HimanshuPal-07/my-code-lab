import app from "./app/app.js";
import config from "./config/config.js";
import { connectDB } from "./config/database.js";
await connectDB();
const port = config.PORT || 4000;
app.listen(port, () => {
  console.log(`Auth Server is running on ${port}`);
});
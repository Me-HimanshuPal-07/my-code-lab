import app from "./app/app.js";
import { config } from "./config/config.js";
import { connectDb } from "./config/databse.js";

const port = config.PORT || 4000;

await connectDb();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

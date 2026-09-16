import app from "./app/app.js";
import "dotenv/config";

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Auth Server is running on ${port}`);
});
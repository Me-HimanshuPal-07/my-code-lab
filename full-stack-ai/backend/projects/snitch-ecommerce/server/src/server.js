import app from "./app/app.js";
import { env } from "./config/env.js";
import { connectDb } from "./config/database.js";
await connectDb();
const port = env.port || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
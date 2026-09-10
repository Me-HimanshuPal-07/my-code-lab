require("dotenv").config();
const app = require("./src/app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`hello i am server running on ${port}`);
});

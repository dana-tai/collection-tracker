const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
)

require("./config/mongoose");

require("./routes/collection")(app);

app.listen(8000, () => console.log("Listening on port 8000"))
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", routes);
app.listen(PORT, console.log(`Servidor activo en http://localhost:${PORT}`));

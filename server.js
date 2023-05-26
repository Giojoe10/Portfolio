const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const portfolioRoute = require("./routes/portfolioRoute");
const authRoute = require("./routes/authRoute");

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
app.use("/auth", authRoute);

const express = require('express');
const { connectionDB } = require('./config/db');
const router = require('./routes/userRouter');
const app = express();
const port = 3000;

app.use(express.json());
// app.use(corse());

connectionDB();
app.use("/user",router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
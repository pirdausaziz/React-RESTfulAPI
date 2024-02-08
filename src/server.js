const express = require("express");
const cors = require("cors");

const subjectRouter = require("./api/Routes/subjectRoute");
const teacherRouter = require("./api/Routes/teacherRoute");
const studentRouter = require("./api/Routes/studentRoute");
const tableRouter = require("./api/Routes/tableRoute");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/subject", subjectRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);
app.use("/api/table", tableRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
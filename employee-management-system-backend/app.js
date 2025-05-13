const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db.config");
const employeeRoutes = require("./routes/employee.routes");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

// Routes
app.use("/employees", employeeRoutes);

// Sync DB and start server
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

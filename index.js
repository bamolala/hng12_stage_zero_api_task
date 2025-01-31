//Imports necessary modules
const express = require("express");
const cors = require("cors");

//Create express app & enable CORS
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

//Create API endpoint & send JSON response
app.get("/", (require, respond) => {
    respond.json({
        email : "ayostark7@gmail.com",
        current_datetime : new Date().toISOString(),
        github_url : "https://github.com/bamolala/hng12_stage_zero_api_task"
    });
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
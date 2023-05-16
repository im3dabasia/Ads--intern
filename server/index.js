const express = require('express');
const cors = require("cors");

// Routes
const videoRouter = require('./routes/video')

// Creating an instance of an express app
const app = express();

// Backend PORT
const port = 5000;


// Communicate with backend across all origins 
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())

/*
    Local Modules Routers
    App Sub Routes
*/
app.use("/api", videoRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

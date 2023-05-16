const express = require("express")
const { 
        videoDetails} = require("../controllers/videoUploader.js");

const videoRouter  = express.Router();

videoRouter.post("/dashboard", videoDetails);

module.exports = videoRouter;

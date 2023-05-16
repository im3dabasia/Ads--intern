// Get request: Send user Data
const videoDetails = async (req, res) => {
    console.log(req.body)

    res.status(200).send({msg:"Recieved"})
};

module.exports = {
    videoDetails
};
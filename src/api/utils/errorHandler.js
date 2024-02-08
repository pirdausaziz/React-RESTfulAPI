const statusError_400 = (res, message) => {
    return res
        .status(400)
        .send({ 
            status:"FAILED",
            data: {
                error: message
            }
        });
    };

module.exports = { statusError_400 };


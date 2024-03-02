const asyncHandler = require('express-async-handler');
const sendMailer = require("../../utils/mail");

//@desc Visualizzazione se funziona
//@route GET /api/user/
//@access private
const healthBackendCheck = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: "Il server è in ascolto",
        port: process.env.PORT || 5001
    })
});

//@desc Visualizzazione se funziona email sender
//@route POST /api/user/
//@access private
const sendEmail = asyncHandler(async (req, res) => {
    await sendMailer({
        from: process.env.email, // sender address
        to: "michele.gabrieli.work@gmail.com", // list of receivers
        subject: "TEST email sender", // Subject line
        text: "Hello world?", // plain text body
        html: "<button>Invia</button>", // html body
    });

    res.status(200).send({
        message: "Mail inviata",
        port: process.env.PORT || 5001
    })
});

module.exports = { healthBackendCheck, sendEmail }
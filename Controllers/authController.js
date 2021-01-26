exports.signup = (req,res) => {
    const {} = req.body
    return res.status(200).json({"message":"signup"})
};

exports.login = (req,res) => {
    const {} = req.body
    return res.status(200).json({"message":"login"})
};

exports.auth = (req,res) => {
    console.log(req.cookies)
    return res.status(200).json({"message":"auth"})
};

exports.refreshToken = (req,res) => {
    console.log(req.cookies)
    return res.status(200).json({"message":"refresh"})
};
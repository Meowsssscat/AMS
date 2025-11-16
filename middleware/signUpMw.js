exports.checkIfUserExist = async (req, res, next) => {

    const userExist = false;

    if (userExist) {
        return res.render('signUp', { error: "User already exist" });
    }

    next();
};



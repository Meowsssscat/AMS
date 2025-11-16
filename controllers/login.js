exports.loadLoginForm = async (req, res) => {


    res.render('login');
}


exports.redirectToHome = async (req, res) => {


    // USE MIDDLE WARE
    res.redirect('/home');
}
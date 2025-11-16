exports.loadSignUpForm = (req, res) => {
  
  res.render('signUp', {error: null});
};



exports.registerUser = async (req, res) => {

   

  console.log("User registered!");


  res.redirect('/home')
  // load the dashboard

};

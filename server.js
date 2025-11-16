const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
const signUpRoute = require('./routes/signUp');
// “Anything that starts with /signUp should be handled by routes/signUp.js.”
app.use('/signUp', signUpRoute);

const loginRoutes = require('./routes/login');
app.use('/login', loginRoutes);

const landingPageRouters = require('./routes/landingPage');
app.use('/', landingPageRouters);

const homeRoutes = require('./routes/home')
app.use('/home', homeRoutes)


const logoutRoutes = require('./routes/logout')
app.use('/logout', logoutRoutes)





// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

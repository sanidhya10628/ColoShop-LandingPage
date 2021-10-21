// Database connection
require('./db/mongoose')
const express = require('express')
const path = require('path')
const app = express();



// Other Dependencies
const indexPageRoute = require('./routes/index');
const loginSignUpRoute = require('./routes/loginSignUp')
const productPageRoute = require('./routes/productPage')
const dashboardRoute = require('./routes/dashboard')
const userMethodsRoute = require('./routes/userActions/userMethods')

// Body Parser
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// Routes
app.use('/', indexPageRoute); // for displaying Home Page
app.use('/', loginSignUpRoute); // for Login and Sign Up Page
app.use('/', productPageRoute); // for displaying Product Page
app.use('/', dashboardRoute); // for displaying User Dashboard Page
app.use('/', userMethodsRoute); // for displaying User Methods



//ON PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`On Port ${PORT}`);
})
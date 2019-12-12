let express = require('express')
let layouts = require('express-ejs-layouts')

let app = express()

//set up middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))

// Add any controllers we have
app.use('/auth', require('./controllers/auth'))

//add home or catch-all routes
app.get('/', (req, res) => {
	res.render('home')
})

app.get('*', (req, res) => {
	res.render('error404')
})

app.listen(8000, () => {
	console.log('You are connected, good job.')
})

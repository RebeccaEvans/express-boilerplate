// Create an express router object
let router = require('express').Router()

// Define routes
router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  res.send('POST /auth/login')
})

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res) => {
  res.send('POST /auth/signup')
})

router.get('/logout', (req, res) => {
  res.send('GET /auth/logout')
})

// Export the router object so we can include it in other files
module.exports = router
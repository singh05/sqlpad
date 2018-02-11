var passport = require('passport')
var router = require('express').Router()
const { baseUrl } = require('../lib/config/nonUi')()

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email'] })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: baseUrl + '/',
    failureRedirect: baseUrl + '/signin'
  })
)

module.exports = router
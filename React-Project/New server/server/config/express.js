const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const fileUploader = require('express-fileupload')
const passport = require('passport')


module.exports = (app) => {

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(session({
    secret: 's3cr3t5tr1ng',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user;
    }
    next()
  })
}
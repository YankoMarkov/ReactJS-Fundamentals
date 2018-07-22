const encryption = require('../utility/encryption')
const User = require('mongoose').model('User')

module.exports = {
  registerPost: async (req, res) => {

    res.send('asdkhfgasdkjfgasd34563456456kfjh')

    const reqUser = req.body

    if (reqUser.password && reqUser.password !== reqUser.repeatPass) {
      return res.status(200).json({
        success: false,
        message: 'Password do not match!'
      })
    }
    const salt = encryption.generateSalt()
    const hashedPass = encryption.generateHashedPass(salt, reqUser.password)

    try {
      const user = await User.create({
        name: reqUser.name,
        email: reqUser.email,
        password: hashedPass,
        roles: ['User'],
        salt
      })
      req.logIn(user, (err, user) => {
        if (err) {
          return res.status(200).json({
            success: false,
            message: err
          })
        }
      })
      res.status(200).json({
        success: true,
        message: 'You have successfully signed up!'
      })
    } catch (err) {
      console.log(err)
      res.status(200).json({
        success: false,
        message: err
      })
    }
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },
  loginPost: async (req, res) => {
    const reqUser = req.body
    try {
      const user = await User.findOne({ email: reqUser.email })
      if (!user) {
        res.status(200).json({
          success: false,
          message: 'Invalid user data'
        })
        return
      }
      if (!user.authenticate(reqUser.password)) {
        res.status(200).json({
          success: false,
          message: 'Invalid user data'
        })
        return
      }
      req.logIn(user, (err, user) => {
        if (err) {
          res.status(200).json({
            success: false,
            message: err
          })
        } else {
          res.status(200).json({
            success: true,
            message: 'You have successfully logged in!'
          })
        }
      })
    } catch (err) {
      console.log(err)
      res.status(200).json({
        success: false,
        message: err
      })
    }
  }
}
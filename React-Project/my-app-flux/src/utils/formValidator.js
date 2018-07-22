let validationFunc = (
  name,
  email,
  password,
  repeatPass
) => {
  let validMail = (() => {
    let mailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    let testMail = mailRegex.test(email)
    if (testMail && email !== '') {
      return true
    }
    return false
  })()

  let validName = (() => {
    if (name !== '') {
      return true
    }
    return false
  })()

  let validPassword = (() => {
    if (
      password.length > 7 &&
      password !== '' &&
      password === repeatPass
    ) {
      return true
    }
    return false
  })()

  return {
    validMail,
    validName,
    validPassword
  }
}

export default validationFunc

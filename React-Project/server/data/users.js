const usersById = {}
const usersByEmail = {}

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    const id = Object.keys(usersById).length + 1
    user.id = id
    user.roles = ['User']

    usersById[id] = user
    usersByEmail[user.email] = user
  },
  addAdmin: (user) => {
    for(key in usersById) {
      if (usersById[key].email === user.email) {
        usersById[key].roles.push('Admin')
      }
    }
    user.roles.push('Admin')
    usersByEmail[user.email] = user
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  }
}

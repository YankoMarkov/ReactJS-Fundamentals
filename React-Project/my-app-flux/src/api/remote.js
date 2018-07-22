import Auth from '../components/users/Auth'

const host = 'http://localhost:5000/'

async function register(user) {
  const res = await fetch(host + 'auth/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await res.json();
}

async function login(user) {
  const res = await fetch(host + 'auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await res.json()
}

async function status() {
  const res = await fetch(host + 'stats')
  return await res.json()
}

async function getUser(email) {
  const res = await fetch(host + `auth/getUser/${email}`)
  return await res.json()
}

async function createCar(car) {
  const res = await fetch(host + 'cars/create', {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
  return await res.json()
}

async function allCar(page, search) {
  const res = await fetch(host + `cars/all?page=${page}&search=${search}`)
  return await res.json()
}

async function carDetails(id) {
  const res = await fetch(host + `cars/details/${id}`, {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return await res.json()
}

async function getUserCars() {
  const res = await fetch(host + 'cars/userCars', {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return await res.json()
}

async function getCar(id) {
  const res = await fetch(host + `cars/getCar/${id}`, {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return await res.json()
}

async function deleteCar(id) {
  const res = await fetch(host + `cars/delete/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return await res.json()
}

async function likeCar(id) {
  const res = await fetch(host + `cars/details/${id}/like`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return await res.json()
}

async function updateCar(id, car) {
  const res = await fetch(host + `cars/update/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
  return await res.json()
}

async function buyCar(id, car) {
  const res = await fetch(host + `cars/buy/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
  return await res.json()
}

async function createReview(review, id) {
  const res = await fetch(host + `cars/details/${id}/reviews/create`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  return await res.json()
}

async function getAllReviews(id) {
  const res = await fetch(host + `cars/details/${id}/reviews`, {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return await res.json()
}

async function addAdminRole(email) {
  const res = await fetch(host + 'auth/addAdminRole', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
  return await res.json()
}

export {
  register,
  login,
  addAdminRole,
  status,
  getUser,
  createCar,
  allCar,
  getCar,
  buyCar,
  carDetails,
  getUserCars,
  deleteCar,
  updateCar,
  likeCar,
  createReview,
  getAllReviews
}
const controllers = require('../controllers')
const restrictedPages = require('../config/auth')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
  })

  app.get('/cars/all', controllers.car.allCarsGet)

  app.post('/cars/create', restrictedPages.isAuthed, controllers.car.addCarPost)

  app.get('/cars/details/:id', restrictedPages.isAuthed, controllers.car.editCarGet)

  app.post('/cars/details/:id/reviews/create', restrictedPages.isAuthed, controllers.car.detailsCarPost)

  app.post('/cars/details/:id/like', restrictedPages.isAuthed, controllers.car.likesCarPost)

  app.post('/cars/update/:id', restrictedPages.isAuthed, controllers.car.updateCarPost)

  app.get('/cars/details/:id/reviews', restrictedPages.isAuthed, controllers.car.reviewsCarGet)

  app.get('/cars/userCars', restrictedPages.isAuthed, controllers.car.userCarsGet)

  app.post('/cars/delete/:id', restrictedPages.isAuthed, controllers.car.deleteCarPost)

  app.post('/users/register', controllers.user.registerPost)

  app.post('/users/login', controllers.user.loginPost)

  app.post('/users/logout', controllers.user.logout)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}
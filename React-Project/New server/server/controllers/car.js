const Car = require('../models/Car')

module.exports = {
  addCarPost: (req, res) => {
    let reqCar = req.body
    if (reqCar.mileage) {
      Car.create({
        make: reqCar.marc,
        model: reqCar.model,
        year: reqCar.year,
        price: reqCar.price,
        engine: reqCar.engine,
        image: reqCar.image,
        creationOn: new Date(),
        createdBy: req.user.email,
        mileage: reqCar.mileage
      }).then(car => {
        res.status(200)
        res.send(json({
          success: true,
          message: 'Car added successfuly.',
          car
        }))
      }).catch(err => {
        console.log(err)
        res.status(200).json({
          success: false,
          message: err
        })
      })
    } else {
      Car.create({
        make: reqCar.marc,
        model: reqCar.model,
        year: reqCar.year,
        price: reqCar.price,
        engine: reqCar.engine,
        image: reqCar.image,
        creationOn: new Date(),
        createdBy: req.user.email
      }).then(car => {
        res.status(200).json({
          success: true,
          message: 'Car added successfuly.',
          car
        })
      }).catch(err => {
        console.log(err)
        res.status(200).json({
          success: false,
          message: err
        })
      })
    }

  },
  editCarGet: (req, res) => {
    let id = req.params.id
    Car.findById(id).then(car => {
      res.status(200).json(car)
    }).catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Car does not exists!'
      })
    })
  },
  detailsCarPost: (req, res) => {
    const id = req.params.id
    const user = req.user
    Car.findById(id).then(car => {
      let rating = req.body.rating
      const comment = req.body.comment

      if (rating) {
        rating = parseInt(rating)
      }
      if (!rating || rating < 1 || rating > 5) {
        return res.status(200).json({
          success: false,
          message: 'Rating must be between 1 and 5.'
        })
      }
      const review = {
        rating,
        comment,
        user,
        createdOn: new Date()
      }
      car.reviews.push(review)

      res.status(200).json({
        success: true,
        message: 'Review added successfuly.',
        review: {
          id,
          rating,
          comment,
          user
        }
      })
    }).catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Car does not exists!'
      })
    })
  },
  likesCarPost: (req, res) => {
    const id = req.params.id
    const userEmail = req.user.email
    Car.findById(id).then(car => {
      const result = true
      if (car.likes.indexOf(userEmail) >= 0) {
        result = false
      } else {
        car.likes.push(userEmail)
      }
      if (!result) {
        return res.status(200).json({
          success: false,
          message: 'This user has already liked this car!'
        })
      }
      res.status(200).json({
        success: true,
        message: 'Thank you for your like!'
      })
    }).catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Car does not exists!'
      })
    })
  },
  reviewsCarGet: (req, res) => {
    let id = req.params.id
    Car.findById(id).then(car => {
      let reviews = car.reviews
        .sort((a, b) => b.createdOn - a.createdOn)
        .slice(0)

      res.status(200).json(reviews)
    }).catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: 'Car does not exists!'
      })
    })
  },
  allCarsGet: (req, res) => {
    const page = parseInt(req.query.page) || 1
    const search = req.query.search

    Car.find().then(cars => {
      const pageSize = 10
      let startIndex = (page - 1) * pageSize
      let endIndex = startIndex + pageSize

      let newCars = Object
        .keys(cars)
        .map(key => cars[key])
        .filter(car => {
          if (!search) {
            return true
          }
          const carMake = car.make.toLowerCase()
          const carModel = car.model.toLowerCase()
          const searchTerm = search.toLowerCase()

          return carModel.indexOf(searchTerm) >= 0 ||
            carMake.indexOf(searchTerm) >= 0
        })
        .sort((a, b) => b.id - a.id)
        .slice(startIndex, endIndex)

      res.status(200).json(newCars)
    }).catch(err => {
      console.log(err)
      return res.status(200).json({
        success: false,
        message: 'Cars does not exists!'
      })
    })
  },
  userCarsGet: (req, res) => {
    const userEmail = req.user.email
    Car.find().then(cars => {
      let userCars = cars.filter(c => c.createdBy === userEmail)
      res.status(200).json(userCars)
    }).catch(err => {
      console.log(err)
      return res.status(200).json({
        success: false,
        message: 'Cars does not exists!'
      })
    })
  },
  updateCarPost: (req, res) => {
    const reqCar = req.body
    let id = req.params.id
    Car.findByIdAndUpdate(id, {
      make: reqCar.marc,
      model: reqCar.model,
      year: reqCar.year,
      image: reqCar.image,
      price: reqCar.price,
      createdOn: new Date(),
      createdBy: re.user.email,
      mileage: reqCar.mileage
    }).then(car => {
      res.status(200).json({
        success: true,
        message: 'Car updated successfuly.',
        car
      })
    }).catch(err => {
      console.log(err)
      res.status(200).json({
        success: false,
        message: err
      })
    })
  },
  deleteCarPost: (req, res) => {
    let id = req.params.id
    Car.findByIdAndRemove(id).then(car => {
      res.status(200).json({
        success: true,
        message: 'Car deleted successfully!'
      })
    }).catch(err => {
      console.log(err)
      return res.status(200).json({
        success: false,
        message: 'Car does not exists!'
      })
    })
  }
}
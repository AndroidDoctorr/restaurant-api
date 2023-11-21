const ControllerBase = require('turbo-api').ControllerBase
const { validation } = require('turbo-api')
const { fKeyRule } = require('turbo-api/src/validation')
const { RESTAURANT_COLLECTION } = require('./restaurantController')
const { numberRule } = validation

const RATING_COLLECTION = 'Ratings'
const RATING_PROPS = ['score', 'restaurant']

const ratingValidationRules = {
    score: numberRule(0, 5, true),
    restaurant: fKeyRule(RESTAURANT_COLLECTION, true),
}

class RatingController extends ControllerBase {
    constructor() {
        super(RATING_COLLECTION, ratingValidationRules, RATING_PROPS)
    }

    configureRoutes() {
        this.fullCRUD({ isPublicGet: true })
    }
}

module.exports = {
    controller: RatingController,
    RATING_COLLECTION,
    RATING_PROPS,
    ratingValidationRules,
}
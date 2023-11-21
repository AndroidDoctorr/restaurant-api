const ControllerBase = require('turbo-api').ControllerBase
const { validation } = require('turbo-api')
const { stringRule } = validation

const RESTAURANT_COLLECTION = 'Restaurants'
const RESTAURANT_PROPS = ['name', 'location']

const restaurantValidationRules = {
    name: stringRule(2, 100, true),
    location: stringRule(2, 100, true)
}

class RestaurantController extends ControllerBase {
    constructor() {
        super(RESTAURANT_COLLECTION, restaurantValidationRules, RESTAURANT_PROPS)
    }

    configureRoutes() {
        this.fullCRUD({ isPublicGet: true })
    }
}

module.exports = {
    controller: RestaurantController,
    RESTAURANT_COLLECTION,
    RESTAURANT_PROPS,
    restaurantValidationRules,
}
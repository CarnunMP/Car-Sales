import * as types from "./actionTypes";

const additionalPrice = 0;
export function priceReducer(additionalPriceState = additionalPrice, action) {
    const { features, feature } = action.payload || {};
    switch (action.type) {
        case types.ADD_FEATURE:
            return !features.includes(feature) ?
                additionalPriceState += feature.price :
                additionalPriceState;
        default:
            return additionalPriceState;
    }
}

const car = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
};
export function carReducer(carState = car, action) {
    const { feature } = action.payload || {};
    switch (action.type) {
        case types.ADD_FEATURE:
            return carState.features.includes(feature) ?
                carState :
                {
                    ...carState,
                    "features": [...carState.features, feature],
                    // Hmm... why does this need to be a string to work?
                };
        case types.REMOVE_FEATURE:
            return {
            ...carState,
            features: carState.features.filter(feature => feature !== action.payload),
        }
        default:
            return carState;
    }
}

const store = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
];
export function storeReducer(storeState = store, action) {
    switch (action.type) {
        default:
            return storeState;
    }
}
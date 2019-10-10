import * as types from "./actionTypes";

export function addFeature(feature, car) {
    return {
        type: types.ADD_FEATURE,
        payload: { feature: feature, features: car.features },
    };
}

export function removeFeature(feature, car) {
    return {
        type: types.REMOVE_FEATURE,
        payload: { feature: feature, features: car.features }
    };
}

export function buyItem(item) {
    return {
        type: types.BUY_ITEM,
    };
}
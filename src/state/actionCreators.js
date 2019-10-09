import * as types from "./actionTypes";

export function addFeature(feature) {
    return {
        type: types.ADD_FEATURE,
        payload: feature,
    };
}

export function removeFeature(feature) {
    return {
        type: types.REMOVE_FEATURE,
        payload: feature,
    };
}

export function buyItem(item) {
    return {
        type: types.BUY_ITEM,
    };
}
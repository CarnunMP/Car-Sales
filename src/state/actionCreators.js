import * as types from "./actionTypes";

export function addFeature(feature) {
    return {
        type: types.ADD_FEATURE,
        payload: feature,
    };
}

export function removeFeature(item) {
    return {
        type: types.REMOVE_FEATURE,
    };
}

export function buyItem(item) {
    return {
        type: types.BUY_ITEM,
    };
}
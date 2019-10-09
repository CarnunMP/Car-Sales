import * as types from "./actionTypes";

export function addFeature() {
    return {
        type: types.ADD_FEATURE,
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
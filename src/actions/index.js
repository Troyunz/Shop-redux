import { ADD_ITEM, FILTER_ITEM } from "./actionTypes";

let nextId = 0;

export const addItem = (text) => ({
    type: ADD_ITEM,
    id:nextId++,
    text
})

export const addFilteredItem = (text) => ({
    type: ADD_FILTEREDITEMS_ITEM,
    id:nextId++,
    text
})


export const filterItem = (text) => ({
    type: FILTER_ITEM,
    text
})
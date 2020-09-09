import { SET_TEXT_FILTER, SET_SORT_BY_NEWEST, SET_SORT_BY_OLDEST, SET_START_DATE, SET_END_DATE } from "../actionsType";

export const setTextFilter = (text) => ({
    type: SET_TEXT_FILTER,
    text
});

export const setSortByNewest = () => ({
    type: SET_SORT_BY_NEWEST
});

export const setSortByOldest = () => ({
    type: SET_SORT_BY_OLDEST
});

export const setStartDate = (startDate) => ({
    type: SET_START_DATE,
    startDate
});

export const setEndDate = (endDate) => ({
    type: SET_END_DATE,
    endDate
});
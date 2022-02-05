import axios from "axios";
import { storyItemTypes } from "./storyItems.types";

const fetchStoryItemsStart = () => ({
  type: storyItemTypes.FETCH_STORY_ITEMS_START,
});

const fetchStoryItemsSuccess = (ids) => ({
  type: storyItemTypes.FETCH_STORY_ITEMS_SUCCESS,
  payload: ids,
});

const fetchStoryItemsFail = (message) => ({
  type: storyItemTypes.FETCH_STORY_ITEMS_FAIL,
  payload: message,
});

const setActivePageIds = (page) => ({
  type: storyItemTypes.SET_ACTIVE_PAGE_IDS,
  payload: page,
});

export const fetchStoryItems = () => {
  return async (dispatch) => {
    dispatch(fetchStoryItemsStart());
    try {
      const { data } = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
      );
      dispatch(fetchStoryItemsSuccess(data));
    } catch (error) {
      dispatch(fetchStoryItemsFail(error.message));
    }
  };
};

export const setActivePage = (pageNumber) => {
  setActivePageIds(pageNumber);
};

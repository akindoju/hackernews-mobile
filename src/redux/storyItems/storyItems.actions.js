import axios from "axios";
import { userTypes } from "../user/user.types";
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

export const setActivePageIds = (page) => ({
  type: storyItemTypes.SET_ACTIVE_PAGE_IDS,
  payload: page,
});

export const saveStoryUrl = (url) => ({
  type: storyItemTypes.SAVE_STORY_URL,
  payload: url,
});

export const logout = () => ({
  type: storyItemTypes.LOGOUT,
});

export const fetchStoryItemsAsync = (page = 1) => {
  return async (dispatch) => {
    dispatch(fetchStoryItemsStart());
    try {
      const { data } = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
      );
      dispatch(fetchStoryItemsSuccess(data));
      dispatch(setActivePageIds(page));
    } catch (error) {
      dispatch(fetchStoryItemsFail(error.message));
    }
  };
};

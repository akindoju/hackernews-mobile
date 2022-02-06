import { storyItemTypes } from "./storyItems.types";

const initialState = {
  newStoryIds: [],
  activePageIds: [],
  numberOfPages: 1,
  perPage: 10,
  pageNumber: 1,
  isLoadingStoryItems: false,
  errMsg: "",
  storyUrl: "",
};

export const storyItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case storyItemTypes.FETCH_STORY_ITEMS_START: {
      return { ...state, isLoadingStoryItems: true };
    }

    case storyItemTypes.FETCH_STORY_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoadingStoryItems: false,
        newStoryIds: action.payload,
        numberOfPages: Math.ceil(action.payload.length / state.perPage),
      };
    }

    case storyItemTypes.FETCH_STORY_ITEMS_FAIL: {
      return { ...state, isLoadingStoryItems: false, errMsg: action.payload };
    }

    case storyItemTypes.SET_ACTIVE_PAGE_IDS: {
      const displayedActivePageIds = state.newStoryIds.slice(
        action.payload * state.perPage - state.perPage,
        action.payload * state.perPage - 1
      );
      return {
        ...state,
        pageNumber: action.payload,
        activePageIds: displayedActivePageIds,
      };
    }

    case storyItemTypes.SAVE_STORY_URL: {
      return { ...state, storyUrl: action.payload };
    }

    case storyItemTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

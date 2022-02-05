import { storyItemTypes } from "./storyItems.types";

const initialState = {
  newStoryIds: [],
  activePageIds: [],
  pageNumber: 1,
  isLoadingStoryItems: false,
  errMsg: "",
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
      };
    }

    case storyItemTypes.FETCH_STORY_ITEMS_FAIL: {
      return { ...state, isLoadingStoryItems: false, errMsg: action.payload };
    }

    case storyItemTypes.SET_ACTIVE_PAGE_IDS: {
      const displayedActivePageIds = state.newStoryIds.slice(
        state.pageNumber * 10 - 10,
        state.pageNumber * 10 - 1
      );
      return {
        ...state,
        pageNumber: action.payload,
        activePageIds: displayedActivePageIds,
      };
    }

    default:
      return state;
  }
};

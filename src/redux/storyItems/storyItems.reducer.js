import { storyItemTypes } from "./storyItems.types";

const initialState = {
  newStoryIds: [],
  activePageIds: [],
  //   numberOfPages: "",
  perPage: 10,
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

    default:
      return state;
  }
};

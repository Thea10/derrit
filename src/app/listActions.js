import {
  CHANGE_SEARCHFIELD,
  REQUEST_LIST_PENDING,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAILED,
  FILTER_SEARCH,
  FILTER_DATESEARCH,
} from "./listConstants";

export const displayList = () => async (dispatch) => {
  dispatch({ type: REQUEST_LIST_PENDING });
  await fetch("https://www.reddit.com/.json")
    .then(async (res) => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then(async data => {
      try {
        dispatch({ type: REQUEST_LIST_SUCCESS, payload: await data.data.children.map(post =>post.data)  });
      } catch (error) {
        dispatch({ type: REQUEST_LIST_FAILED, payload: error });
      }
    });
};

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCHFIELD, 
        payload: text 
    }
}

export const setFilter = (text) => {
    return {
        type:  FILTER_SEARCH, 
        payload: text 
    }
}

export const setFilterDate = (text) => {
    return {
        type:  FILTER_DATESEARCH, 
        payload: text 
    }
}

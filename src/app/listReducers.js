import {
    CHANGE_SEARCHFIELD,
    REQUEST_LIST_PENDING,
    REQUEST_LIST_SUCCESS,
    REQUEST_LIST_FAILED,
    FILTER_SEARCH,
    FILTER_DATESEARCH,
  } from "./listConstants";

  const initialListState = { 
    inputs: [],
    error: '',
    isPending: false,
}

export const displayList = (state= initialListState, action={}) =>{
    switch (action.type) {
        case REQUEST_LIST_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_LIST_SUCCESS:
            return Object.assign({}, state, {inputs: action.payload, isPending: false})
        case REQUEST_LIST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}

  const initialSearchState = {
    searchField: '',
    showFilter: false
}

export const SearchList =  (state = initialSearchState, action = {}) => {    
      switch (action.type) {
          case CHANGE_SEARCHFIELD:
               if (action.payload === '') {
                   return  Object.assign({}, state, {searchField: action.payload, showFilter: false})
               } else return Object.assign({}, state, {searchField: action.payload,  showFilter: true})
          default:
              return state;
  
      }
  }

  const initialFilterState = {
    filterField: '',
}

export const filterSearch = (state = initialFilterState, action = {}) => {
      switch (action.type) {
          case FILTER_SEARCH:
              return Object.assign({}, state, {filterField: action.payload});
          default:
              return state;
  
      }
  }

  const initialFilterDateState = {
    filterDateField: '',
}

export const filterDateSearch = (state = initialFilterDateState, action = {}) => {
      switch (action.type) {
          case FILTER_DATESEARCH:
              return Object.assign({}, state, {filterField: action.payload});
          default:
              return state;
  
      }
  }

  

export default displayList;
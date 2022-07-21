const initialState = {
  todosSearch: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        todosSearch: action.payload,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

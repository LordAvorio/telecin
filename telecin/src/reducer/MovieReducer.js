let INITIAL_STATE = {
  dataTvSeries: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TV_SERIES":
      return {
        ...state,
        dataTvSeries: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

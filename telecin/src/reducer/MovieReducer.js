let INITIAL_STATE = {
  dataTvSeries: [],
  dataTopRatedSeries: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TV_SERIES":
      return {
        ...state,
        dataTvSeries: action.payload,
      };
    case "GET_RATED_SERIES":
      return {
        ...state,
        dataTopRatedSeries: action.payload
      }
    default:
      return state;
  }
};

export default movieReducer;

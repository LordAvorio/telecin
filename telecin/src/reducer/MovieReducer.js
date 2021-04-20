let INITIAL_STATE = {
  dataTvSeries: [],
  dataGeneralTvSeries: [],
  dataGenres: [],
  dataPopularSeries: [],
  dataTopRatedSeries: [],
  dataDetailSeries: [],
  dataDetailGenreSeries: [],
  dataDetailProducerSeries: [],
  dataDetailNetworkSeries: [],
  dataDetailTrailerSeries: [],
  dataDetailCastingSeries: [],
  dataDetailCompaniesSeries: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TV_SERIES":
      return {
        ...state,
        dataTvSeries: action.payload,
      };
    case "GET_GENERAL_SERIES":
      return{
        ...state,
        dataGeneralTvSeries: action.payload
      }
    case "GET_GENRES_SERIES":
      return{
        ...state,
        dataGenres: action.payload
      }
    case "GET_POPULAR_SERIES":
      return {
        ...state,
        dataPopularSeries: action.payload
      }
    case "GET_RATED_SERIES":
      return {
        ...state,
        dataTopRatedSeries: action.payload
      }
    case "GET_DETAIL_SERIES":
      return {
        ...state,
        dataDetailSeries: action.payload
      }
    case "GET_DETAIL_GENRE_SERIES":
      return {
        ...state,
        dataDetailGenreSeries: action.payload
      }
    case "GET_DETAIL_PRODUCER_SERIES":
      return{
        ...state,
        dataDetailProducerSeries: action.payload
      }
    case "GET_DETAIL_NETWORK_SERIES":
      return{
        ...state,
        dataDetailNetworkSeries: action.payload
      }
    case "GET_DETAIL_TRAILER_SERIES":
      return{
        ...state,
        dataDetailTrailerSeries: action.payload
      }
    case "GET_DETAIL_CASTING_SERIES":
      return{
        ...state,
        dataDetailCastingSeries: action.payload
      }
    case "GET_DETAIL_COMPANIES_SERIES":
      return{
        ...state,
        dataDetailCompaniesSeries: action.payload
      }
    default:
      return state;
  }
};

export default movieReducer;

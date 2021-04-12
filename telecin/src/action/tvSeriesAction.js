import Axios from 'axios'
const KEY = '80191a845ede8fbdd430b0e631449c43'

export const getTopRatedSeries = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${KEY}&language=en-US&page=1`)
            
            dispatch({
                type: 'GET_RATED_SERIES',
                payload: res.data.results
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getPopularSeries = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`)
            
            dispatch({
                type: 'GET_POPULAR_SERIES',
                payload: res.data.results
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeries = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_SERIES',
                payload: res.data
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesGenre = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_GENRE_SERIES',
                payload: res.data.genres
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesProducer = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_PRODUCER_SERIES',
                payload: res.data.created_by
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesNetwork = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_NETWORK_SERIES',
                payload: res.data.networks
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesTrailer = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}/videos?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_TRAILER_SERIES',
                payload: res.data.results[0]
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesCasting = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}/credits?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_CASTING_SERIES',
                payload: res.data.cast
            })

        }
        catch(err){
            console.log(err)
        }
    }
}

export const getDetailSeriesCompanies = (id_series) => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/${id_series}?api_key=${KEY}&language=en-US`)
            
            dispatch({
                type: 'GET_DETAIL_COMPANIES_SERIES',
                payload: res.data.production_companies
            })

        }
        catch(err){
            console.log(err)
        }
    }
}


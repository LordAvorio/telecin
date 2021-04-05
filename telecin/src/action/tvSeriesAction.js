import Axios from 'axios'
const KEY = '80191a845ede8fbdd430b0e631449c43'

export const getTopRatedSeries = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`)
            
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
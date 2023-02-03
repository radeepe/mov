import axios from "axios";

export const getMoviesList = async dispatch => {

    try {
        const { data } = await axios.get("http://localhost:3300/movies")
        dispatch({ type: "GET_MOVIES", payload: data })
    } catch (error) {
        dispatch({ type: "GET_MOVIES_ERROR" })
    }

}

export const selectedMovie = ({ dispatch, movie }) => {
    try {
        dispatch({ type: "SELECTED_MOVIES", payload: movie })
    } catch (error) {
        dispatch({ type: "SELECTED_MOVIES_ERROR" })
    }

}

export const getUpcomingMoviesList = async dispatch => {
    try {
        const { data } = await axios.get("http://localhost:3300/upcomingmovies")
        dispatch({ type: "GET_UPCOMING_MOVIES", payload: data })
    } catch (error) {
        dispatch({ type: "GET_UPCOMING_MOVIES_ERROR" })
    }
}

export const getEventsList = async dispatch => {
    try {
        const { data } = await axios.get("http://localhost:3300/events")
        dispatch({ type: "GET_EVENTS", payload: data })
    } catch (error) {
        dispatch({ type: "GET_EVENTS" })
    }
}



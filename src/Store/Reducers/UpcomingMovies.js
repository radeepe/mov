const intialState = { upcomingmovie: [], loading: false, error: false };

// string number boolean = value
// array object = reference

export default function UpcomingMovieReducer(state = intialState, action) {
    switch (action.type) {

        case "GET_UPCOMING_MOVIES": {
            console.log('action', action)
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.upcomingmovie = payload
            return newState
        }

        case "GET_UPCOMING_MOVIES_ERROR": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.upcomingmovie = true;
            return newState
        }

        default: {
            return state;
        } 

    }
}
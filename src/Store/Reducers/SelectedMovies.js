const intialState = { selectedMovie: [], loading: false, error: false };

// string number boolean = value
// array object = reference

export default function SelectedMovieReducer(state = intialState, action) {
    switch (action.type) {

        case "SELECTED_MOVIES": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.selectedMovie = payload
            return newState
        }

        case "SELECTED_MOVIES_ERROR": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.selectedMovie = true;
            return newState
        }

        default: {
            return state;
        }

    }
}
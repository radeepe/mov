const intialState = { movie: [], loading: false, error: false };

// string number boolean = value
// array object = reference

export default function MovieReducer(state = intialState, action) {
    switch (action.type) {

        case "GET_MOVIES": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.movie = payload
            return newState
        }

        case "GET_MOVIES_ERROR": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.movie = true;
            return newState
        }

        default: {
            return state;
        }

    }
}
const intialState = { event: [], loading: false, error: false };

// string number boolean = value
// array object = reference

export default function EventReducer(state = intialState, action) {
    switch (action.type) {

        case "GET_EVENTS": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.event = payload
            return newState
        }

        case "GET_EVENTS_ERROR": {
            const { payload } = action
            const newState = { ...state }
            newState.loading = false
            newState.event = true;
            return newState
        }

        default: {
            return state;
        }

    }
}
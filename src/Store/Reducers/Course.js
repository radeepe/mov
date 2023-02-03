const intialState = { course: [], loading: false, error: false };

// string number boolean = value
// array object = reference

export default function CourseReducer(state = intialState, action) {
    console.log('redu')
    switch (action.type) {

        case "GET_COURSES": {
        const { payload } = action
        const newState = { ...state }
        newState.loading = false
        newState.course = payload
        return newState
    }

        case "GET_COURSES_ERROR": {
        const { payload } = action
        const newState = { ...state }
        newState.loading = false
        newState.error = true;
        return newState
    }

        default: {
        return state;
    }

}
}
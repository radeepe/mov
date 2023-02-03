import { createStore, applyMiddleware } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-Extension';
import ReduxThunk from "redux-thunk"
import CourseReducer from "./Reducers/Course"
import MovieReducer from "./Reducers/LatestMovies"
import SelectedMovieReducer from "./Reducers/SelectedMovies"
import UpcomingMovieReducer from "./Reducers/UpcomingMovies"
import EventReducer from "./Reducers/Events"
const middleWare = [thunk];

// const store = configureStore(rootReducer,
//     composeWithDevTools(applyMiddleware(...middleWare)));

const store = configureStore({
    devTools: true,
    reducer:
        combineReducers({
            Course: CourseReducer,
            Movie: MovieReducer,
            SelectedMovie: SelectedMovieReducer,
            UpcomingMovie: UpcomingMovieReducer,
            Events: EventReducer,
        }),
    middleware: [ReduxThunk]
    //middleware: [saga]
})

export default store;
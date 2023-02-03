import axios from "axios";

export const getCoursList = async dispatch => {
    try {
        const { data } = await axios.get("http://localhost:3300/courses")
        dispatch ({ type: "GET_COURSES", payload: data })
    } catch (error) {
        dispatch ({ type: "GET_COURSES_ERROR" })
    }

}
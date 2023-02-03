import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseList from "./CourseList";
import { getCoursList } from '../../Store/Actions/Course'
import axios from 'axios';

function Courses() {
    const dispatch = useDispatch();
    ///const [courses, getCourses] = useState();

    const courses = useSelector((store) => store.Course.course);
    const fetchCourses = () => {
        dispatch(getCoursList);
        // let url = "http://localhost:3300/courses";
        // axios({ url }).then((res) => {
        //     getCourses(res.data);
        // });
    }
    useEffect(() => {
        fetchCourses();
    }, []);

    const handleSubmits = (selectedId, selectedTitle, selectedDetials) => {
        console.log('s', selectedId, selectedTitle, selectedDetials)
        axios.put("http://localhost:3300/courses/" + selectedId, {
            title: selectedTitle,
            details: selectedDetials
        })
            .then((response) => {
                fetchCourses();
            })

    }

    return (
        <>
            <div>
                <CourseList courses={courses} handleSubmitCb={handleSubmits} />
            </div>
        </>

    );
}

export default Courses;

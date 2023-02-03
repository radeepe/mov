import { useState } from "react";


function CourseList({ courses, handleSubmitCb }) {
    const [form, showForm] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [selectedTitle, setSelectedTitle] = useState();
    const [selectedDetials, setSelectedDetails] = useState();
    const handleClick = (id, title, details) => {
        showForm(true)
        setSelectedId(id)
        setSelectedTitle(title)
        setSelectedDetails(details)
    }
    const titleChange = (e) => {
        setSelectedTitle(e.target.value)
    }
    const detailChange = (e) => {
        setSelectedDetails(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log('sub')
        handleSubmitCb(selectedId, selectedTitle, selectedDetials)
        showForm(false)
    }

    return (
        <>
            <div>
                {courses && courses.length > 0 ? <><div style={{ marginTop: "30px" }}> Course list</div>
                    <div>{courses.map(course => {
                        return (
                            <>
                                <div>
                                    Id : {course.id} |
                                    Title : {course.title} | Details : {course.details}
                                    <input type="button" value="Enquire" onClick={() => handleClick(course.id, course.title, course.details)}></input>
                                </div>

                            </>
                        )
                    })}</div></> : ""}
                {form && <div><form onSubmit={submit}> <>Id :{selectedId} <div>Title : <input type="text" value={selectedTitle} onChange={titleChange}></input>
                </div>
                    <div>Details : <input type="text" value={selectedDetials} onChange={detailChange}></input>
                    </div><div><button value="submit">Submit</button></div></></form></div>}
            </div>
        </>

    );
}

export default CourseList;

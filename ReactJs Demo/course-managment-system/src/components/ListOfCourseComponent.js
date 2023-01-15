import React, { Component } from 'react'
import CourseService from '../services/CourseService';
import { Link } from "react-router-dom";

class ListOfCourseComponent extends Component {

    state = {
        courses: []
    }

    componentDidMount = () => {
        CourseService.getAllCourses()
            .then(res => this.setState({ courses: res.data }))
            .catch((error) => console.log(error));
    }

    handleDelete = (id) => {
        console.log("Hello");
        CourseService.deleteCourseById(id)
            .then((res) => {
                this.setState({ courses: this.state.courses.filter((course) => course._id !== id) });
            })
            .catch((error) => console.log(error));
    }


    render() {
        return (
            <div className='container text-center mt-2'>
                <Link to="/add-course" className='btn btn-success me-2'>Add Course</Link>
                <h1>List of Employees</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Videos</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                                course =>
                                    <tr key={course._id}>
                                        <td> {course._id}</td>
                                        <td> {course.title} </td>
                                        <td> {course.content}</td>
                                        <td> {course.videos}</td>
                                        <td>
                                            <Link to={`/update-course/${course._id}`} className='btn btn-success m-2'>Update Course</Link>
                                            <button type="button" className='btn btn-danger' onClick={() => { this.handleDelete(course._id) }}>Delete Course</button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListOfCourseComponent;

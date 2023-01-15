import React, { Component } from 'react'
import CourseService from '../services/CourseService';

class AddCourseComponent extends Component {

    state = {}

    componentDidMount() {
        if (this.props.match.params.id) {
            document.title = "Update Course"
            CourseService.getCourseById(this.props.match.params.id)
                .then((res) => {
                    console.log(res.data);
                    this.setState(res.data);
                })
                .catch((error) => console.log(error));
        }
        else {
            document.title = "Add Course"
        }
    }

    handleForm = (event) => {
        event.preventDefault();

        if (this.props.match.params.id) {
            const course = this.state;
            const courseId = this.props.match.params.id;
            CourseService.updateCourseById(courseId, course)
                .then((res) => {
                    this.props.history.push('/courses');
                })
                .catch((error) => console.log(error));

        }
        else {
            const course = this.state;
            CourseService.createCourse(course)
                .then((res) => {
                    this.props.history.push('/courses');
                })
                .catch((error) => console.log(error));
        }

    }

    getTitle() {
        if (!this.props.match.params.id) {
            return <h3 className="text-center">Add Course</h3>
        } else {
            return <h3 className="text-center">Update Course</h3>
        }
    }

    render() {
        return (
            <div className='container text-center text-white mt-5'>
                <div className="row">
                    <div className='col-md-8 offset-md-2'>
                        <div className='card'>
                            <div className='card-header bg-success'>
                                {
                                    this.getTitle()
                                }
                            </div>

                            <div className='card-body'>

                                <form onSubmit={this.handleForm} >

                                    <div className="form-group">
                                        <label htmlFor="title">Enter Title</label>
                                        <input type="text" className="form-control" id="title" name="title"
                                            placeholder="Enter Title" required value={this.state.title || ''}

                                            onChange={(event) => {
                                                this.setState({ ...this.state, title: event.target.value })
                                            }}

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="content">Enter Content</label>
                                        <input type="text" className="form-control" id="content" name="content"
                                            placeholder="Enter Content" required value={this.state.content || ''}

                                            onChange={(event) => {
                                                this.setState({ ...this.state, content: event.target.value })
                                            }}

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="videos">Enter Videos</label>
                                        <input type="text" className="form-control" id="videos" name="videos"
                                            placeholder="Enter Videos" required value={this.state.videos || ''}

                                            onChange={(event) => {
                                                this.setState({ ...this.state, videos: event.target.value })
                                            }}

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="active">Enter Active</label>
                                        <input type="text" className="form-control" id="active" name="active"
                                            placeholder="Enter Active" required value={this.state.active || ''}

                                            onChange={(event) => {
                                                this.setState({ ...this.state, active: event.target.value })
                                            }}

                                        />
                                    </div>

                                    <div className="container text-center mt-2">
                                        <button type="submit" className="btn btn-primary me-2">Add Course</button>
                                        <button type="reset" className="btn btn-danger">Reset</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCourseComponent;

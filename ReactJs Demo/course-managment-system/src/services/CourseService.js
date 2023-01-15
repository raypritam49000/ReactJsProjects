import axios from 'axios';

const BASE_URL = "http://localhost:2000/api/v1/courses";

class CourseService {
    static getAllCourses = () => axios.get(`${BASE_URL}`);
    static createCourse = (course) => axios.post(`${BASE_URL}`, course);
    static getCourseById = (id) => axios.get(`${BASE_URL}/${id}`);
    static updateCourseById = (id,course) => axios.put(`${BASE_URL}/${id}`,course);
    static deleteCourseById = (id) => axios.delete(`${BASE_URL}/${id}`);
}

export default CourseService;
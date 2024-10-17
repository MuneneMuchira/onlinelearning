// Fetch enrolled courses for a student
export const getEnrolledCourses = () => {
    return axios.get(`${API_URL}/courses/enrolled`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };
  
  // Fetch courses created by an instructor
  export const getInstructorCourses = () => {
    return axios.get(`${API_URL}/courses/instructor`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };
  
  // Fetch pending courses for an approver
  export const getPendingCourses = () => {
    return axios.get(`${API_URL}/courses/pending`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  };
  
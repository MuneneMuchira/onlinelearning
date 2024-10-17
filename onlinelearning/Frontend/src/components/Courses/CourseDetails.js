import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById, enrollInCourse } from '../../services/api';

const CourseDetails = () => {
  const { id } = useParams();  // Gets the course ID
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await getCourseById(id);
        setCourse(res.data);
      } catch (error) {
        console.error('Failed to fetch course details', error);
      }
    };
    fetchCourseDetails();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await enrollInCourse(id);
      setEnrollmentStatus('Enrolled successfully');
      // This redirects you to another page after enrollment
      navigate('/courses');
    } catch (error) {
      setEnrollmentStatus('Failed to enroll');
      console.error('Enrollment failed', error);
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Status: {course.status}</p>

      {course.status === 'Approved' && (
        <button onClick={handleEnroll}>Enroll in this course</button>
      )}

      {enrollmentStatus && <p>{enrollmentStatus}</p>}
    </div>
  );
};

export default CourseDetails;

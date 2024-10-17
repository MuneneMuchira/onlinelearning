import React, { useEffect, useState } from 'react';
import { getApprovedCourses } from '../services/api';
import CourseList from '../components/Courses/CourseList';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getApprovedCourses(); // this one gets the  approved courses only
        setCourses(res.data);
      } catch (err) {
        setError('Failed to load courses.');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.length > 0 ? (
        <CourseList courses={courses} />
      ) : (
        <p>No courses available at the moment.</p>
      )}
    </div>
  );
};

export default CoursesPage;

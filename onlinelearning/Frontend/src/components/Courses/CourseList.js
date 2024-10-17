import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course._id}>
          <Link to={`/courses/${course._id}`}>{course.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;

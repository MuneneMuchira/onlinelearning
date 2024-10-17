import React, { useEffect, useState } from 'react';
import { getEnrolledCourses, getInstructorCourses, getPendingCourses } from '../../services/api';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const [courses, setCourses] = useState([]);
  const [pendingCourses, setPendingCourses] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const userRole = localStorage.getItem('role'); // Assuming role is stored on login
      setRole(userRole);

      try {
        if (userRole === 'student') {
          const res = await getEnrolledCourses();
          setCourses(res.data);
        } else if (userRole === 'instructor') {
          const res = await getInstructorCourses();
          setCourses(res.data);
        } else if (userRole === 'approver') {
          const res = await getPendingCourses();
          setPendingCourses(res.data);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {role === 'student' && (
        <div>
          <h3>Your Enrolled Courses</h3>
          {courses.length > 0 ? (
            <ul>
              {courses.map((course) => (
                <li key={course._id}>{course.title}</li>
              ))}
            </ul>
          ) : (
            <p>You are not enrolled in any courses yet.</p>
          )}
        </div>
      )}

      {role === 'instructor' && (
        <div>
          <h3>Your Created Courses</h3>
          <ul>
            {courses.map((course) => (
              <li key={course._id}>
                {course.title} - Status: {course.status}
              </li>
            ))}
          </ul>
        </div>
      )}

      {role === 'approver' && (
        <div>
          <h3>Pending Courses for Approval</h3>
          {pendingCourses.length > 0 ? (
            <ul>
              {pendingCourses.map((course) => (
                <li key={course._id}>
                  {course.title} <button>Approve</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No pending courses for approval.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

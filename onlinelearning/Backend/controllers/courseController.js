const Course = require('../models/Course');

// Create a Course
exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const instructor = req.user.id;

  try {
    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Approve a Course
exports.approveCourse = async (req, res) => {
  const { id } = req.params;

  try {
    let course = await Course.findById(id);
    if (!course) return res.status(404).json({ msg: 'Course not found' });

    course.status = 'Approved';
    await course.save();
    res.json({ msg: 'Course approved' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Enroll in Course
exports.enrollCourse = async (req, res) => {
  const { id } = req.params;
  const student = req.user.id;

  try {
    let course = await Course.findById(id);
    if (!course || course.status !== 'Approved') return res.status(404).json({ msg: 'Course not available' });

    course.studentsEnrolled.push(student);
    await course.save();
    res.json({ msg: 'Enrolled successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

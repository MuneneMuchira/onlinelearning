const express = require('express');
const { createCourse, approveCourse, enrollCourse } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware('instructor'), createCourse);
router.put('/:id/approve', authMiddleware('approver'), approveCourse);
router.post('/:id/enroll', authMiddleware('student'), enrollCourse);

module.exports = router;

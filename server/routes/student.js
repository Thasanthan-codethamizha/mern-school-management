import express from 'express';
import { createStudent, getStudents } from '../controllers/student';

import student from '../models/student.js';
const router = express.Router();

router.get('/', getStudents );
router.post('/', createStudent);

export default router;
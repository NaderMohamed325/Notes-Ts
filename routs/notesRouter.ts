import express, { Router } from 'express';
// @ts-ignore
import { getNotes, createNote, updateNote, deleteNote } from '../controller/noteController';

const router: Router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
import { Request, Response } from 'express';
// @ts-ignore
import Notes from '../models/noteModel';

const getNotes = async (req: Request, res: Response) => {
    try {
        const allNotes = await Notes.find();
        res.status(200).json({
            status: 'success',
            data: {
                notes: allNotes
            }
        });
    } catch (e) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve notes'
        });
    }
};

const createNote = async (req: Request, res: Response) => {
    try {
        const newNote = await Notes.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                note: newNote
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: 'Failed to create note'
        });
    }
};

const updateNote = async (req: Request, res: Response) => {
    try {
        const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                note: updatedNote
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: 'Failed to update note'
        });
    }
};

const deleteNote = async (req: Request, res: Response) => {
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: 'Failed to delete note'
        });
    }
};

export { getNotes, createNote, updateNote, deleteNote };
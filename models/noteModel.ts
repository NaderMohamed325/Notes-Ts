import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must have a title']
    },
    content: {
        type: String,
        required: [true, 'must have a title']
    }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
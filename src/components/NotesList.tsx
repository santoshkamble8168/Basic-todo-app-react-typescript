import * as React from 'react';
import { Note } from '../modals/note.modal';
import NoteCard from './NoteCard';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes}) => {

    const handleDelete = (id: string) => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => (
            <NoteCard key={note.id} note={note} handleDelete={handleDelete}/>
        ))
    }

    return (
        <>
            {notes.length > 0 && (<h2 className='mt-3'>Notes</h2>)}
            <div>{renderNotes()}</div>
        </>
    );
};

export default NotesList;

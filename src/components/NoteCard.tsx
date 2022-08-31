import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../modals/note.modal';

interface INoteCardProps {
    note: Note,
    handleDelete: (id: string) => void
}

const NoteCard: React.FC<INoteCardProps> = ({note, handleDelete}) => {
  return (
  <>
    <div className='mb-3'>
        <Card style={{backgroundColor: note.color}}>
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.text}</Card.Text>
                <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
                      <Button className='mt-3' variant='danger' onClick={() => handleDelete(note.id)}>Delete</Button>
            </Card.Body>
        </Card>
    </div>
  </>
  );
};

export default NoteCard;

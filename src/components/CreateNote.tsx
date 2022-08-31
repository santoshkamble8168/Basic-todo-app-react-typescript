import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../modals/note.modal';

interface ICreateNoteProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<ICreateNoteProps> = ({notes, setNotes}) => {
    const [error, setError] = React.useState<string>("")
    const titleRef = React.useRef<HTMLInputElement | null>(null)
    const textRef = React.useRef<HTMLTextAreaElement | null>(null)
    const colorRef = React.useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are required")
        }

        setError("")

        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
        (colorRef.current as HTMLInputElement).value = "#adb5bd"

    }

    return (
        <>
            <h2 className='mt-3'>Create Note</h2>
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                {error && (<Alert variant="danger">{error}</Alert>)}
                
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter title' ref={titleRef} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicText'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control type='text' placeholder='Enter Note here' as="textarea" rows={3} ref={textRef} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicColor'>
                    <Form.Label htmlFor='colorInput'>Color</Form.Label>
                    <Form.Control id="colorInput" type='color' defaultValue="#dfdfdf" title='Choose your color' ref={colorRef} />
                </Form.Group>

                <Button type='submit' variant='primary'>Create Note</Button>
            </Form>
        </>
    );
};

export default CreateNote;

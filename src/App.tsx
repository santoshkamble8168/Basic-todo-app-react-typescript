import React, {useState} from 'react';
import { Note } from './modals/note.modal';
import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Metting",
    text:"test text",
    color: "#adb5bd",
    date: (new Date).toString()
  }])

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col lg="6">
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
          <Col lg="6">
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

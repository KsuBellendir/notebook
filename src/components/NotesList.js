import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({notes, hahdleAddNote, handelDeleteNotes}) {
  return (
    <div className='notes-list'>
        {notes.map((n)=> 
        <Note 
            id={n.id} 
            text={n.text} 
            date={n.date}
            handelDeleteNotes={handelDeleteNotes}/>)}
        <AddNote hahdleAddNote={hahdleAddNote}/>
    </div>
  )
}

export default NotesList;
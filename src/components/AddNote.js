import React, {useState} from 'react';

function AddNote({hahdleAddNote}) {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 250;

    const handelChange = (e) => {
        if(characterLimit - e.target.value.length !== 0){
            setNoteText(e.target.value);
        }
    }

    const handelSaveClick = () => {
        if(noteText.trim().length > 0){
            hahdleAddNote(noteText);
            setNoteText('')
        }
        
    }

  return (
    <div className='note new'>
        <textarea 
            rows='8' 
            cols='10' 
            placeholder='Добавьте вашу заметку...'
            value={noteText}
            onChange={handelChange}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} символов</small>
            <button className='save' onClick={handelSaveClick}>Сохранить</button>
        </div>
    </div>
  )
}

export default AddNote;
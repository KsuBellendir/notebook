import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';

function Home() {

    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: 'тестовая запись',
        date: '09.03.2023'
      },
      {
        id: nanoid(),
        text: 'тестовая запись 2',
        date: '10.03.2023'
      },
      {
        id: nanoid(),
        text: 'тестовая запись3',
        date: '11.03.2023'
      },
      {
        id: nanoid(),
        text: 'тестовая запись 4',
        date: '12.03.2023'
      }]);
      const [searchText, setSaerchText] = useState('');
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
        const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
      }, [])

      useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
    
      const addNote = (text) => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text: text,
          date: date.toLocaleDateString()
        }
    
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    
      }
    
      const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>  note.id !==id)
        setNotes(newNotes);
      }
    
      return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSaerchText}/>
                <NotesList 
                    notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
                    hahdleAddNote={addNote}
                    handelDeleteNotes={deleteNote}/>
            </div>
        </div>

      )
}

export default Home;
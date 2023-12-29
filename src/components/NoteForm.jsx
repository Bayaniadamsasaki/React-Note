import React, { useState } from 'react';

const NoteForm = (props) => {
  const { addNote } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); 
  const [charLimit, setCharLimit] = useState(50);

  const handleTitleChange = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.length <= 50) {
        setTitle(inputTitle);
        setCharLimit(50 - inputTitle.length)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body, 
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle('');
    setBody(''); 
    setCharLimit(50);
  };

  return (

    <div>
    <form className="note-input__form" onSubmit={handleSubmit}>
      <label className="note-input__title">
        Create Note
      <p className="note-input__title__char-limit">
        Sisa karakter: {charLimit}
      </p>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Write the title"
        />
      </label>


      <label className="note-input__body">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your notes"
        />
      </label>
      <button type="submit" className="note-input__button">
        Add Note
      </button>
    </form>
    </div>
    
  );
};

export default NoteForm;

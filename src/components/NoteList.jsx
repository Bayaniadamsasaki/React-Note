import React from "react";

const NoteList = (props) => {
  const { notes, deleteNote, archiveNote, restoreNote, searchKeyword } = props;

  const filteredNotes = notes.filter(
    (note) =>
      note.title &&
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  const handleArchive = (id) => {
    archiveNote(id);
  };

  const handleRestore = (id) => {
    restoreNote(id);
  };

  return (
    <div className="note-search">
      {activeNotes.length > 0 && (
        <ul className="notes-list">
          {activeNotes.map((note) => (
            <li key={note.id} className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{note.createdAt}</p>
                <p className="note-item__body">{note.body}</p>
              </div>
              <div className="note-item__action">
                {note.archived ? (
                  <div className="note-item__buttons">
                    <button
                      className="note-item__button note-item__archive-button"
                      onClick={() => handleRestore(note.id)}
                    >
                      Restore
                    </button>
                    <button
                      className="note-item__button note-item__delete-button"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className="note-item__buttons">
                    <button
                      className="note-item__button note-item__archive-button"
                      onClick={() => handleArchive(note.id)}
                    >
                      Archive
                    </button>
                    <button
                      className="note-item__button note-item__delete-button"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {archivedNotes.length > 0 && (
        <>
          <h2>Arsip</h2>
          <ul className="notes-list">
            {archivedNotes.map((note) => (
              <li key={note.id} className="note-item">
                <div className="note-item__content">
                  <h3 className="note-item__title">{note.title}</h3>
                  <p className="note-item__date">{note.createdAt}</p>
                  <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                  <div className="note-item__buttons">
                    <button
                      className="note-item__button note-item__restore-button"
                      onClick={() => handleRestore(note.id)}
                    >
                      Restore
                    </button>
                    <button
                      className="note-item__button note-item__delete-button"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {activeNotes.length === 0 && archivedNotes.length === 0 && (
        <p className="notes-list__empty-message">No notes available.</p>
      )}
    </div>
  );
};

export default NoteList;

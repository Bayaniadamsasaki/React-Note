import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { getInitialData } from "../util/Data";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };
  }

  componentDidMount() {
    this.setState({ notes: getInitialData() });
  }

  handleSearchChange = (e) => {
    this.setState({ searchKeyword: e.target.value });
  };

  addNote = (note) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
  };

  archiveNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    }));
  };

  restoreNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      ),
    }));
  };

  deleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  render() {
    return (
      <div className="note-app__body">
        <div className="note-app__header">
          <h1>Submission React Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Search notes..."
              value={this.state.searchKeyword}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>

        <div className="note-grup">
          <div className="note-input">
            <NoteForm addNote={this.addNote} />
          </div>

          <div className="note-list">
            <NoteList
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              archiveNote={this.archiveNote}
              restoreNote={this.restoreNote}
              searchKeyword={this.state.searchKeyword}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Note;

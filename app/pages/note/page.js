"use client"
import { useState } from "react";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextareaAutosize, TextField } from "@mui/material";

export default function NotesPage () {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "", color: getRandomColor() });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedNote(null);
  };

  const addNote = () => {
    if (selectedNote !== null) {
      // Update existing note
      const updatedNotes = [...notes];
      updatedNotes[selectedNote] = newNote;
      setNotes(updatedNotes);
    } else {
      // Add new note with a random color
      setNotes([...notes, { ...newNote, color: getRandomColor() }]);
    }

    setNewNote({ title: "", content: "", color: getRandomColor() });
    closeForm();
  };

  const openNoteEditor = (index) => {
    setSelectedNote(index);
    setNewNote(notes[index]);
    openForm();
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <Container maxWidth="md" mt={8}>
      <h1 className="text-3xl font-bold mb-4">Sticky Notes</h1>

      {/* Display Section for Sticky Notes */}
      <Grid container spacing={2}>
        {notes.map((note, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <div
              onClick={() => openNoteEditor(index)}
              className={`p-4 rounded-md border cursor-pointer`}
              style={{ backgroundColor: note.color }}
            >
              <h2
                className="text-lg font-semibold mb-2 overflow-hidden"
                style={{ maxHeight: "2.5em" }} // Adjust the value as needed
              >
                {note.title}
              </h2>
              <p
                className="overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 6,
                }}
              >
                {note.content}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Add Sticky Note Button */}
      <Button
        onClick={openForm}
        variant="contained"
        color="warning"
        sx={{ mt: 4 }}
      >
        Add Sticky Note
      </Button>

      {/* Popup Form Modal */}
      <Dialog open={isFormOpen} onClose={closeForm} fullWidth maxWidth="md">
        <DialogTitle>
          {selectedNote !== null ? "Edit Note" : "Add New Note"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <TextareaAutosize
            aria-label="Content"
            placeholder="Content"
            minRows={6}
            maxRows={8}
            style={{ width: "100%", resize: "none", padding: "8px" }}
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm}>Cancel</Button>
          <Button onClick={addNote} variant="contained" color="success">
            {selectedNote !== null ? "Update" : "Add"} Sticky Note
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
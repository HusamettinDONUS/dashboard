import React, { useState } from "react";
import styles from "./notes.module.scss";
import Header from "../../Components/Header/Header";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { FaStickyNote } from "react-icons/fa";

const Notes = () => {
  const [categories, setCategories] = useState(["Hepsi", "Genel"]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("Hepsi");
  const [selectedCategoryNote, setSelectedCategoryNote] = useState("Genel");
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [activeForm, setActiveForm] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [editNoteIndex, setEditNoteIndex] = useState(null);

  const addCategory = () => {
    const trimmedCategory = newCategory.trim();
    if (
      trimmedCategory &&
      !categories.includes(trimmedCategory) &&
      trimmedCategory !== "Hepsi"
    ) {
      setCategories((prevCategories) => [...prevCategories, trimmedCategory]);
      setNewCategory("");
      setActiveForm("");
    }
  };

  const addNote = () => {
    const trimmedTitle = newNoteTitle.trim();
    const trimmedContent = newNoteContent.trim();
    if (trimmedTitle && trimmedContent) {
      const newNote = {
        title: trimmedTitle,
        content: trimmedContent,
        category: selectedCategoryNote,
      };

      if (editNoteIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editNoteIndex] = newNote;
        setNotes(updatedNotes);
        setEditNoteIndex(null);
      } else {
        setNotes((prevNotes) => [...prevNotes, newNote]);
      }

      setNewNoteTitle("");
      setNewNoteContent("");
      setActiveForm("");
    }
  };

  const filterNotes = () => {
    if (selectedCategoryFilter === "Hepsi") {
      return notes;
    }
    return notes.filter((note) => note.category === selectedCategoryFilter);
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    setSelectedNote(null);
    setEditNoteIndex(null);
    setNewNoteTitle("");
    setNewNoteContent("");
  };

  const deleteCategory = (categoryToDelete) => {
    if (categoryToDelete === "Genel" || categoryToDelete === "Hepsi") {
      return;
    }

    setCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToDelete)
    );

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.category === categoryToDelete
          ? { ...note, category: "Genel" }
          : note
      )
    );

    setSelectedCategoryFilter("Hepsi");
    setSelectedCategoryNote("Genel");
    setActiveForm("");
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  const goBackToList = () => {
    setSelectedNote(null);
  };

  const editNote = (index) => {
    const noteToEdit = notes[index];
    setNewNoteTitle(noteToEdit.title);
    setNewNoteContent(noteToEdit.content);
    setSelectedCategoryNote(noteToEdit.category);
    setActiveForm("note");
    setEditNoteIndex(index);
  };

  return (
    <div className={styles.notesPage}>
      <div className={styles.notesHeader}>
        <Header />
      </div>

      <div className={styles.actionButtons}>
        <button
          onClick={() =>
            setActiveForm((prev) => (prev === "note" ? "" : "note"))
          }
        >
          {editNoteIndex !== null ? "Notu Düzenle" : "Not Ekle"}
        </button>
        <span>
          <FaStickyNote />
        </span>
        <button
          onClick={() =>
            setActiveForm((prev) => (prev === "category" ? "" : "category"))
          }
        >
          Kategori
        </button>
      </div>

      {activeForm === "note" && (
        <div className={styles.noteForm}>
          <input
            type="text"
            placeholder="Not Başlığı"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          />
          <textarea
            placeholder="Notunuzu buraya yazın..."
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
          />
          <div className={styles.formActions}>
            <div className={styles.selectCategory}>
              <label htmlFor="noteCategory">Kategori Seç</label>
              <select
                id="noteCategory"
                value={selectedCategoryNote}
                onChange={(e) => setSelectedCategoryNote(e.target.value)}
              >
                {categories
                  .filter((category) => category !== "Hepsi")
                  .map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
            <button onClick={addNote}>
              <span>
                <IoIosAddCircleOutline />
              </span>
              {editNoteIndex !== null ? "Kaydet" : "Notu Ekle"}
            </button>
          </div>
        </div>
      )}

      {activeForm === "category" && (
        <div className={styles.categoryForm}>
          <input
            type="text"
            placeholder="Kategori ekle veya sil"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={addCategory}>
            <span>
              <IoIosAddCircleOutline />
            </span>
            <span>Ekle</span>
          </button>
          <button
            className={styles.deleteCat}
            onClick={() => deleteCategory(newCategory)}
          >
            <span>
              <TiDelete />
            </span>
            <span>Sil</span>
          </button>
        </div>
      )}

      <div className={styles.filterSection}>
        <label htmlFor="filterCategory">Kategoriye Göre Filtrele</label>
        <select
          id="filterCategory"
          value={selectedCategoryFilter}
          onChange={(e) => setSelectedCategoryFilter(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {selectedNote ? (
        <div className={styles.noteDetail}>
          <h3>{selectedNote.title}</h3>
          <p>{selectedNote.content}</p>
          <p>
            <small>Kategori: {selectedNote.category}</small>
          </p>
          <button onClick={goBackToList}>Geri Dön</button>
        </div>
      ) : (
        <div className={styles.notesList}>
          {filterNotes().map((note, index) => (
            <div
              key={index}
              className={styles.noteItem}
              onClick={() => selectNote(note)}
            >
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 11) + "..."}</p>
              <p>
                <small>Kategori: {note.category}</small>
              </p>
              <div className={styles.noteActions}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(index);
                  }}
                >
                  Sil
                </button>
                <button
                  className={styles.editButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    editNote(index);
                  }}
                >
                  Düzenle
                </button>
              </div>
            </div>
          ))}
          {filterNotes().length === 0 && (
            <p className={styles.noNotesMessage}>Not bulunamadı.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notes;

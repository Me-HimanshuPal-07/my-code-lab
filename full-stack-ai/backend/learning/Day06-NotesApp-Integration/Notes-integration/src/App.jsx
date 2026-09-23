import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { StickyNote, Search, X } from "lucide-react";
import NoteCard from "./components/NoteCard";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

const EMPTY_FORM = { title: "", description: "" };

const App = () => {
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [allNotes, setAllNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getAllNotes = useCallback(async () => {
    try {
      const res = await api.get("/notes/allNotes");
      setAllNotes(res.data.data);
    } catch (err) {
      console.error("error in get api all notes", err);
      setError("Notes load nahi ho payi.");
    }
  }, []);

  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  const resetForm = () => {
    setFormValues(EMPTY_FORM);
    setUpdateNoteId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (updateNoteId) {
        await api.put(`/notes/${updateNoteId}`, formValues);
      } else {
        await api.post("/notes/create", formValues);
      }
      resetForm();
      await getAllNotes();
    } catch (err) {
      console.error("error in submit", err);
      setError("Save nahi ho paya, dubara try karo.");
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      if (id === updateNoteId) resetForm();
      getAllNotes();
    } catch (err) {
      console.error("error in delete note", err);
      setError("Delete nahi ho paya.");
    }
  };

  const updateNote = (note) => {
    setUpdateNoteId(note._id);
    setFormValues({ title: note.title, description: note.description });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredNotes = useMemo(() => {
    if (!searchTerm.trim()) return allNotes;
    const q = searchTerm.toLowerCase();
    return allNotes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q)
    );
  }, [allNotes, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <header className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2.5 rounded-xl">
            <StickyNote size={24} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Notes App
            </h1>
            <p className="text-gray-500 text-sm">
              {allNotes.length} {allNotes.length === 1 ? "note" : "notes"} saved
            </p>
          </div>
        </header>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-600"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 w-full lg:max-w-md lg:sticky lg:top-8"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {updateNoteId ? "Edit Note" : "New Note"}
            </h2>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Title
              </label>
              <input
                onChange={handleChange}
                name="title"
                value={formValues.title}
                className="p-2.5 border border-gray-300 rounded-lg text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                placeholder="e.g. Grocery list"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                value={formValues.description}
                className="p-2.5 border border-gray-300 rounded-lg text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Write at least 20 characters..."
                minLength={20}
                rows={4}
                required
              />
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2.5 flex-1 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading
                  ? "Saving..."
                  : updateNoteId
                  ? "Update Note"
                  : "Add Note"}
              </button>
              {updateNoteId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg py-2.5 px-5 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="flex-1 w-full flex flex-col gap-4">
            {allNotes.length > 0 && (
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search notes..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                />
              </div>
            )}

            {allNotes.length === 0 ? (
              <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
                <StickyNote size={40} className="mx-auto mb-2 opacity-40" />
                <p className="text-lg">Koi note nahi hai abhi.</p>
                <p className="text-sm">Form se ek naya note add karo.</p>
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p>"{searchTerm}" se koi note match nahi hua.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredNotes.map((val, idx) => (
                  <div
                    key={val._id}
                    className="animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <NoteCard
                      note={val}
                      deleteNote={deleteNote}
                      updateNote={updateNote}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
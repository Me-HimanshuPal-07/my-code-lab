import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const NoteCard = ({ note, deleteNote, updateNote }) => {
  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <h3 className="text-lg font-semibold text-gray-900 truncate">
        {note.title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
        {note.description}
      </p>

      <div className="flex justify-between gap-2 pt-2 border-t border-gray-100 mt-1">
        <button
          onClick={() => updateNote(note)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-sm font-medium text-yellow-700 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition"
        >
          <Pencil size={14} />
          Edit
        </button>
        <button
          onClick={() => deleteNote(note._id)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition"
        >
          <Trash2 size={14} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
import React from "react";

const SubmitButton = ({ isSubmitting, isEditing }) => (
  <div className="border-t border-slate-100 pt-6">
    <button
      type="submit"
      disabled={isSubmitting}
      className={`group flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all ${
        isSubmitting
          ? "cursor-not-allowed bg-blue-400 shadow-blue-100"
          : "bg-blue-600 shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-90" fill="currentColor" d="M21 12a9 9 0 01-9 9v-3a6 6 0 006-6h3z" />
          </svg>
          Creating Profile...
        </>
      ) : (
        <>
          {isEditing ? "Update Profile" : "Create Profile"}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
          </svg>
        </>
      )}
    </button>

    <p className="mt-3 text-center text-xs text-slate-400">
      Your information will be securely submitted to the server.
    </p>
  </div>
);

export default SubmitButton;

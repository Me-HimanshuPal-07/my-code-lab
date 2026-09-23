import React from "react";

const ErrorMessage = ({ message }) => (
  <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-600">
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.5M12 16h.01" />
      <circle cx="12" cy="12" r="9" />
    </svg>
    {message}
  </div>
);

const FormField = ({ label, id, icon, error, required, registerProps, ...inputProps }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <span className={`h-5 w-5 ${error ? "text-red-400" : "text-slate-400"}`}>
            {icon}
          </span>
        </div>

        <input
          id={id}
          {...registerProps}
          {...inputProps}
          className={`w-full rounded-2xl border bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 ${
            error
              ? "border-red-400 ring-4 ring-red-50"
              : "border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          }`}
        />
      </div>

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export const UserIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a7.5 7.5 0 0115 0" />
  </svg>
);

export const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75V6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5l7.5 5.25 7.5-5.25" />
  </svg>
);

export default FormField;

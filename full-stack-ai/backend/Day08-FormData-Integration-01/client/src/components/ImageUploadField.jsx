import React from "react";

const ImageUploadField = ({ id, imageCount, maxImages, error, registerProps }) => {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between">
        <label htmlFor={id} className="block text-sm font-semibold text-slate-800">
          Profile Images
          <span className="ml-1 text-red-500">*</span>
        </label>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
          {imageCount}/{maxImages}
        </span>
      </div>

      <label
        htmlFor={id}
        className={`group relative flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all ${
          error
            ? "border-red-300 bg-red-50/50"
            : "border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/40"
        }`}
      >
        <input
          type="file"
          id={id}
          accept="image/*"
          multiple
          className="sr-only"
          {...registerProps}
        />

        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all group-hover:-translate-y-1 group-hover:shadow-md">
          <svg
            className="h-7 w-7 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5L12 4l4.5 4.5" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 14.5v3A2.5 2.5 0 007.5 20h9a2.5 2.5 0 002.5-2.5v-3"
            />
          </svg>
        </div>

        <p className="text-sm font-semibold text-slate-800">
          {imageCount > 0
            ? `${imageCount} image${imageCount > 1 ? "s" : ""} selected`
            : "Upload your profile images"}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Click to browse and select multiple images
        </p>

        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
            JPG
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
            PNG
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
            WEBP
          </span>
        </div>
      </label>

      {error ? (
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
          {error.message}
        </div>
      ) : (
        <p className="mt-2 text-xs text-slate-400">
          Maximum {maxImages} images • Maximum 5 MB per image
        </p>
      )}
    </div>
  );
};

export default ImageUploadField;

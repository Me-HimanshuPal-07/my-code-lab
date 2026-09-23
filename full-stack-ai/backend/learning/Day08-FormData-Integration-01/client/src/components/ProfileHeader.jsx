import React from "react";

const ProfileHeader = ({ isEditing }) => (
  <div className="mb-8 text-center">
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
      </svg>
    </div>

    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Profile</p>

    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {isEditing ? "Update your profile" : "Create your profile"}
    </h1>

    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
      Add your basic information and profile images to get started.
    </p>
  </div>
);

export default ProfileHeader;

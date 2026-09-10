import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import NotificationToast from "./components/NotificationToast";
import ProfileHeader from "./components/ProfileHeader";
import FormField, { UserIcon, MailIcon } from "./components/FormField";
import ImageUploadField from "./components/ImageUploadField";
import SubmitButton from "./components/SubmitButton";

const MAX_IMAGES = 5;
const MAX_FILE_SIZE_MB = 5;

const App = () => {
  const [uiAlert, setUiAlert] = useState(null);
  const isEditing = false;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const selectedFiles = watch("profilePic");
  const imageCount = selectedFiles?.length || 0;

  const submitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);

      const files = data.profilePic ?? [];
      for (let i = 0; i < files.length; i++) {
        formData.append("profilePic", files[i]);
      }

      const response = await axios.post(
        "http://localhost:3000/userProfile",
        formData,
      );

      setUiAlert({
        type: "success",
        message: response.data?.message || "Profile created successfully!",
      });

      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create profile";

      setUiAlert({ type: "error", message: errorMessage });
    }
  };

  return (
    <>
      <NotificationToast alert={uiAlert} onDismiss={() => setUiAlert(null)} />

      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        {/* Soft background decoration */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <ProfileHeader isEditing={isEditing} />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            {/* Card Header */}
            <div className="border-b border-slate-100 bg-white px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Personal information</h2>
                  <p className="mt-1 text-xs text-slate-500">Enter your details below</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a7.5 7.5 0 0115 0" />
                  </svg>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(submitHandler)}
              encType="multipart/form-data"
              noValidate
              className="space-y-7 p-6 sm:p-8"
            >
              <FormField
                label="Full Name"
                id="name"
                required
                icon={UserIcon}
                error={errors.name}
                type="text"
                placeholder="e.g. Himanshu Pal"
                autoComplete="name"
                registerProps={register("name", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                })}
              />

              <FormField
                label="Email Address"
                id="email"
                required
                icon={MailIcon}
                error={errors.email}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                registerProps={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              <ImageUploadField
                id="profilePic"
                imageCount={imageCount}
                maxImages={MAX_IMAGES}
                error={errors.profilePic}
                registerProps={register("profilePic", {
                  validate: {
                    required: (files) =>
                      files?.length > 0 || "Please select at least one image",

                    maxFiles: (files) =>
                      files?.length <= MAX_IMAGES ||
                      `You can upload a maximum of ${MAX_IMAGES} images`,

                    onlyImages: (files) => {
                      if (!files?.length) return true;
                      const invalidFile = Array.from(files).find(
                        (file) => !file.type.startsWith("image/"),
                      );
                      return !invalidFile || "Only image files are allowed";
                    },

                    maxSize: (files) => {
                      if (!files?.length) return true;
                      const maxSize = MAX_FILE_SIZE_MB * 1024 * 1024;
                      const largeFile = Array.from(files).find((file) => file.size > maxSize);
                      return !largeFile || `Each image must be less than ${MAX_FILE_SIZE_MB} MB`;
                    },
                  },
                })}
              />

              <SubmitButton isSubmitting={isSubmitting} isEditing={isEditing} />
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            Profile setup • Secure form submission
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
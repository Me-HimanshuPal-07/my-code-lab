import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { LoaderCircle, Upload } from 'lucide-react'
import { Button } from '../../../shared/components/ui/Button'
import { Input } from '../../../shared/components/ui/Input'
import ImagePreviewEditor from './ImagePreviewEditor'

const ProfileForm = ({
  isEditing,
  isSubmitting,
  profile,
  initialValues,
  preview,
  zoom,
  position,
  rotation,
  fileInput,
  onSubmit,
  onImageChange,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onResetImage,
  onRemoveImage,
  onZoomChange,
  onRotationChange,
  onCancelEdit,
  imageChanged,
}) => (
  <ProfileFormFields
    isEditing={isEditing}
    isSubmitting={isSubmitting}
    profile={profile}
    initialValues={initialValues}
    preview={preview}
    zoom={zoom}
    position={position}
    rotation={rotation}
    fileInput={fileInput}
    onSubmit={onSubmit}
    onImageChange={onImageChange}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onResetImage={onResetImage}
    onRemoveImage={onRemoveImage}
    onZoomChange={onZoomChange}
    onRotationChange={onRotationChange}
    onCancelEdit={onCancelEdit}
    imageChanged={imageChanged}
  />
)

const ProfileFormFields = ({
  isEditing,
  isSubmitting,
  profile,
  initialValues,
  preview,
  zoom,
  position,
  rotation,
  fileInput,
  onSubmit,
  onImageChange,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onResetImage,
  onRemoveImage,
  onZoomChange,
  onRotationChange,
  onCancelEdit,
  imageChanged,
}) => {
  const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      name: initialValues?.name ?? profile?.name ?? '',
      email: initialValues?.email ?? profile?.email ?? '',
    },
  })

  useEffect(() => {
    reset({
      name: initialValues?.name ?? profile?.name ?? '',
      email: initialValues?.email ?? profile?.email ?? '',
    })
  }, [initialValues, profile, reset])

  const canUpdate = !isEditing || isDirty || imageChanged

  return (
  <form className="profile-form" onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting}>
    <div className="form-heading">
      <p className="eyebrow">{isEditing ? 'Update profile' : 'Create profile'}</p>
      <h1>{isEditing ? 'Refine your profile' : 'Tell us about yourself'}</h1>
      <p className="form-description">Add your details and an optional profile picture to get started.</p>
    </div>

    <label htmlFor="name">Name</label>
    <Input
      id="name"
      type="text"
      placeholder="Enter your name"
      {...register('name', { required: 'Name is required' })}
      disabled={isSubmitting}
    />
    {errors.name && <p className="field-error">{errors.name.message}</p>}

    <label htmlFor="email">Email</label>
    <Input
      id="email"
      type="email"
      placeholder="Enter your email"
      {...register('email', {
        required: 'Email is required',
        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
      })}
      readOnly={Boolean(profile)}
      disabled={isSubmitting}
    />
    {errors.email && <p className="field-error">{errors.email.message}</p>}

    <label htmlFor="profilePicture">Profile picture</label>
    <input
      className="file-upload-input"
      id="profilePicture"
      name="profilePicture"
      ref={fileInput}
      type="file"
      accept="image/png, image/jpeg, image/webp"
      onChange={onImageChange}
      disabled={isSubmitting}
    />
    <label className="file-upload-label" htmlFor="profilePicture">
      <Upload size={20} />
      <span>Choose image</span>
    </label>

    {preview && (
      <ImagePreviewEditor
        preview={preview}
        zoom={zoom}
        position={position}
        rotation={rotation}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onReset={onResetImage}
        onRemove={onRemoveImage}
        onZoomChange={onZoomChange}
        onRotationChange={onRotationChange}
      />
    )}

    <div className="form-actions">
      <Button type="submit" disabled={isSubmitting || (isEditing && !canUpdate)}>
        {isSubmitting ? <><LoaderCircle className="loading-icon" size={20} /> Saving...</> : isEditing ? 'Update profile' : 'Create profile'}
      </Button>
      {isEditing && (
        <Button variant="secondary" type="button" onClick={onCancelEdit} disabled={isSubmitting}>
          Cancel
        </Button>
      )}
    </div>
  </form>
  )
}

export default ProfileForm
